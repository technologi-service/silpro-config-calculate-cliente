import type { APIRoute } from 'astro';
import prisma from '../../../db/prisma';

function getPeriodos() {
  // Genera los periodos desde enero 2024 hasta julio 2025
  const meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const periodos = [];
  for (let year = 2024; year <= 2025; year++) {
    for (let i = 0; i < meses.length; i++) {
      if (year === 2025 && meses[i] > '07') break;
      periodos.push({
        label: `${meses[i]}/${year}`,
        mes: meses[i],
        ano: year,
      });
    }
  }
  return periodos;
}

export const GET: APIRoute = async ({ params, request }) => {
  const periodos = getPeriodos();
  // Trae todos los registros del cliente en el rango
  const registros = await prisma.puntuaciones_clientes_vcs.findMany({
    where: {
      ano: { gte: 2024, lte: 2025 },
      mes: { in: periodos.map((p) => p.mes) },
    },
  });

  // Segmentos que siempre deben aparecer
  const segmentosFijos = ['Inactivo', 'Alerta', 'Oportunidad', 'Consolidado', 'Campeon'];
  // Unir los segmentos fijos con los que aparecen en los datos
  const segmentosUnicos = Array.from(
    new Set([...segmentosFijos, ...registros.map((r) => r.segmento_categorico).filter(Boolean)])
  );

  // Para cada segmento, arma una serie con la cantidad de clientes en ese segmento por período
  const series = segmentosUnicos.map((segmento) => ({
    name: segmento,
    data: periodos.map((periodo) => {
      const count = registros.filter((r) => {
        const anoNum = r.ano ? Number(r.ano) : null;
        return (
          anoNum === periodo.ano && r.mes === periodo.mes && r.segmento_categorico === segmento
        );
      }).length;
      return count > 0 ? count : null;
    }),
  }));

  const responseBody = {
    categories: periodos.map((p) => p.label),
    series,
  };
  return new Response(JSON.stringify(responseBody), {
    headers: { 'Content-Type': 'application/json' },
  });
};
