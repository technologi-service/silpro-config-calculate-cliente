import { defineAction } from 'astro:actions';
import prisma from '../../db/prisma';

export const getAllPuntuacionesClientes = defineAction({
  accept: 'json',
  handler: async ({ request }) => {
    try {
      const clientes = await prisma.puntuaciones_clientes_vcs.findMany({
        take: 100, // Limitar a 100 clientes para evitar sobrecarga
      });
      return clientes;
    } catch (error) {
      console.error('Error fetching clientes:', error);
      throw new Error('Failed to fetch clientes');
    }
  },
});
