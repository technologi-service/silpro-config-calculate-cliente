import type { APIRoute } from 'astro';
import prisma from '../../../db/prisma';

export const GET: APIRoute = async () => {
  // Obtener el mes máximo para el año 2025
  const maxMesRegistro = await prisma.puntuaciones_clientes_vcs.findFirst({
    where: { ano: 2025 },
    orderBy: { mes: 'desc' },
    select: { mes: true },
  });
  const maxMes = maxMesRegistro?.mes;
  // Obtener la fecha de referencia máxima para el año 2025
  const registrosFechas = await prisma.puntuaciones_clientes_vcs.findMany({
    where: { ano: 2025 },
    select: { ano: true, mes: true },
  });
  const fechas = registrosFechas.map((r) => `${r.ano}-${r.mes?.padStart(2, '0')}-01`);
  const fechaReferencia = fechas.length > 0 ? fechas.sort().reverse()[0] : null;
  if (!fechaReferencia) {
    return new Response(JSON.stringify({ error: 'No hay datos para 2025' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 404,
    });
  }

  // Traer todos los registros de ese mes y año
  const [anoRef, mesRef] = fechaReferencia.split('-');
  const registros = await prisma.puntuaciones_clientes_vcs.findMany({
    where: { ano: Number(anoRef), mes: mesRef },
    select: {
      segmento_categorico: true,
      id_cliente: true,
      volumen_total: true,
      margen_promedio: true,
      ano: true,
      mes: true,
    },
  });

  // Agrupar por segmento_categorico
  const resumen: Record<
    string,
    {
      numero_clientes: number;
      suma_volumen_total: number;
      promedio_volumen_por_cliente: number;
      suma_margen_promedio: number;
      promedio_margen_promedio: number;
      ano: number;
      mes: string;
    }
  > = {};
  const clientesPorSegmento: Record<string, Set<string>> = {};

  registros.forEach((r) => {
    const seg = r.segmento_categorico ?? 'Sin segmento';
    if (!resumen[seg]) {
      resumen[seg] = {
        numero_clientes: 0,
        suma_volumen_total: 0,
        promedio_volumen_por_cliente: 0,
        suma_margen_promedio: 0,
        promedio_margen_promedio: 0,
        ano: Number(r.ano),
        mes: r.mes ?? '',
      };
      clientesPorSegmento[seg] = new Set();
    }
    clientesPorSegmento[seg].add(r.id_cliente ?? '');
    resumen[seg].suma_volumen_total += Number(r.volumen_total ?? 0);
    resumen[seg].suma_margen_promedio += Number(r.margen_promedio ?? 0);
  });

  Object.keys(resumen).forEach((seg) => {
    resumen[seg].numero_clientes = clientesPorSegmento[seg].size;
    resumen[seg].promedio_volumen_por_cliente =
      resumen[seg].numero_clientes > 0
        ? resumen[seg].suma_volumen_total / resumen[seg].numero_clientes
        : 0;
    resumen[seg].promedio_margen_promedio =
      resumen[seg].numero_clientes > 0
        ? resumen[seg].suma_margen_promedio / resumen[seg].numero_clientes
        : 0;
  });

  // Convertir a array ordenado por segmento
  const resultado = Object.keys(resumen)
    .sort()
    .map((seg) => ({
      segmento_categorico: seg,
      ...resumen[seg],
    }));

  return new Response(JSON.stringify(resultado), {
    headers: { 'Content-Type': 'application/json' },
  });
};
