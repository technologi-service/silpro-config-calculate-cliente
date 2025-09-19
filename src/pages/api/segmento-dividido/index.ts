// src/pages/api/segmento-dividido.ts
import type { APIRoute } from 'astro';
import prisma from '../../../db/prisma'; // Asegúrate que la ruta a tu cliente Prisma sea correcta

export const GET: APIRoute = async () => {
  try {
    const todosLosSegmentos = ['5*', '4*', '3*', '2*', '1*', '0*'];

    const segmentosConDatos = await prisma.puntuaciones_clientes_vcs.groupBy({
      by: ['segmento_categorico', 'ano', 'mes'],
      _count: {
        id_cliente: true,
      },
      _sum: {
        volumen_total: true,
      },
      orderBy: {
        segmento_categorico: 'desc',
      },
    });

    // Filtra solo los registros de julio 2025
    const segmentosFiltrados = segmentosConDatos.filter(
      seg => Number(seg.ano) === 2025 && seg.mes === '07'
    );

    const datosMapeados = new Map(
      segmentosFiltrados.map((seg) => {
        const ticketMedio = (seg._sum.volumen_total ?? 0) / (seg._count.id_cliente || 1);
        return [
          seg.segmento_categorico,
          {
            segmento_categorico: seg.segmento_categorico,
            fecha_referencia: `${seg.ano}-${String(seg.mes).padStart(2, '0')}`,
            num_clientes: seg._count.id_cliente,
            suma_volumen_total: seg._sum.volumen_total ?? 0,
            ticket_medio: ticketMedio,
          },
        ];
      })
    );

    const resultadoFinal = todosLosSegmentos.map((nombreSegmento) => {
      if (datosMapeados.has(nombreSegmento)) {
        return datosMapeados.get(nombreSegmento);
      } else {
        return {
          segmento_categorico: nombreSegmento,
          fecha_referencia: '2025-07',
          num_clientes: 0,
          suma_volumen_total: 0,
          ticket_medio: 0,
        };
      }
    });

    return new Response(JSON.stringify(resultadoFinal), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error al obtener datos de segmentos:', error);
    return new Response(JSON.stringify({ message: 'Error interno del servidor' }), {
      status: 500,
    });
  }
};
