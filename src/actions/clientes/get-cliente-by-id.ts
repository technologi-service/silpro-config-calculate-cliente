import { defineAction } from 'astro:actions';
import prisma from '../../db/prisma';
import { z } from 'astro:schema';

export const getClienteById = defineAction({
  accept: 'json',
  input: z.object({
    id_cliente: z.string(), // id_cliente es string según el modelo
  }),
  handler: async ({ id_cliente }) => {
    try {
      // Busca el último registro de puntuación del cliente
      const ultimaPuntuacion = await prisma.puntuaciones_clientes_vcs.findFirst({
        where: { id_cliente },
        orderBy: { id: 'desc' },
      });
      if (!ultimaPuntuacion) {
        return null;
      }
      return ultimaPuntuacion;
    } catch (error) {
      console.error('Error fetching última puntuación del cliente:', error);
      throw new Error('Failed to fetch última puntuación del cliente');
    }
  },
});
