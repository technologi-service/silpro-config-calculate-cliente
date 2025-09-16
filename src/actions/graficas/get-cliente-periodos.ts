
import { defineAction } from 'astro:actions';
import prisma from '../../db/prisma';
import { z } from 'astro:schema';

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

export const getClientePeriodos = defineAction({
  accept: 'json',
  input: z.object({
    id_cliente: z.string(),
  }),
  handler: async ({ id_cliente }) => {
    const periodos = getPeriodos();
    // Trae todos los registros del cliente en el rango
    const registros = await prisma.puntuaciones_clientes_vcs.findMany({
      where: {
        id_cliente,
        ano: { gte: 2024, lte: 2025 },
        mes: { in: periodos.map((p) => p.mes) },
      },
    });
    // Agrupa por periodo y cuenta ocurrencias
    const series = periodos.map((periodo) => {
      const count = registros.filter((r) => {
        // r.ano es Decimal | null, periodo.ano es number
        const anoNum = r.ano ? Number(r.ano) : null;
        return anoNum === periodo.ano && r.mes === periodo.mes;
      }).length;
      return count > 0 ? count : null;
    });
    return {
      categories: periodos.map((p) => p.label),
      series: [{ name: 'Visitas', data: series }],
    };
  },
});
