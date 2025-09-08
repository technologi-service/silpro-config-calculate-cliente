import { defineAction } from 'astro:actions';
import prisma from '../../db/prisma';

export const getSegmentos = defineAction({
  accept: 'json',
  handler: async ({ request }) => {
    try {
      const variables = await prisma.puntuaciones_clientes_vcs.findMany({
        select: {
          id: true,
          id_cliente: true,
          nombre_empresa: true,
          ano: true,
          mes: true,
          ponderacion_vcs: true,
          segmento_numerico: true,
          segmento_categorico: true,
        },
        take: 100, // Limitar a 100 registros para evitar sobrecarga
      });
      return variables;
    } catch (error) {
      console.error('Error fetching variable ranges:', error);
      throw new Error('Failed to fetch variable ranges');
    }
  },
});
