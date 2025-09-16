import { defineAction } from 'astro:actions';
import prisma from '../../db/prisma';

export const getClientesConUltimaPuntuacion = defineAction({
  accept: 'json',
  handler: async () => {
    try {
      // Obtener todos los clientes
      const clientes = await prisma.clientes.findMany();
      // Para cada cliente, buscar su última puntuación
      const clientesConPuntuacion = await Promise.all(
        clientes.map(async (cliente) => {
          const ultimaPuntuacion = await prisma.puntuaciones_clientes_vcs.findFirst({
            where: { id_cliente: cliente.id_cliente },
            orderBy: { id: 'desc' },
          });
          return {
            ...cliente,
            ultimaPuntuacion,
          };
        })
      );
      return clientesConPuntuacion;
    } catch (error) {
      console.error('Error fetching clientes con última puntuación:', error);
      throw new Error('Failed to fetch clientes con última puntuación');
    }
  },
});
