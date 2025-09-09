import './chunks/_astro_actions_DhSEC-wt.mjs';
import { p as prisma } from './chunks/prisma_D9xrZjJk.mjs';
import { d as defineAction } from './chunks/server_-XBQkNIe.mjs';
import * as z from 'zod';

const getAllPuntuacionesClientes = defineAction({
  accept: "json",
  handler: async ({ request }) => {
    try {
      const clientes = await prisma.puntuaciones_clientes_vcs.findMany({
        take: 100
        // Limitar a 100 clientes para evitar sobrecarga
      });
      return clientes;
    } catch (error) {
      console.error("Error fetching clientes:", error);
      throw new Error("Failed to fetch clientes");
    }
  }
});

const getClienteById = defineAction({
  accept: "json",
  input: z.object({
    id_cliente: z.number()
  }),
  handler: async ({ id_cliente }) => {
    try {
      const metricas = await prisma.clientes.findUnique({
        where: { id: id_cliente }
      });
      if (!metricas) {
        return null;
      }
      return metricas;
    } catch (error) {
      console.error("Error fetching métricas del cliente:", error);
      throw new Error("Failed to fetch métricas del cliente");
    }
  }
});

const getAllClientes = defineAction({
  accept: "json",
  handler: async ({ request }) => {
    try {
      const clientes = await prisma.clientes.findMany({
        take: 100
      });
      return clientes;
    } catch (error) {
      console.error("Error fetching clientes:", error);
      throw new Error("Failed to fetch clientes");
    }
  }
});

const getRangos = defineAction({
  accept: "json",
  handler: async ({ request }) => {
    try {
      const rangos = await prisma.rangos.findMany();
      return rangos;
    } catch (error) {
      console.error("Error fetching variable ranges:", error);
      throw new Error("Failed to fetch variable ranges");
    }
  }
});

const getVariables = defineAction({
  accept: "json",
  handler: async ({ request }) => {
    try {
      const variables = await prisma.variable.findMany();
      return variables;
    } catch (error) {
      console.error("Error fetching variable ranges:", error);
      throw new Error("Failed to fetch variable ranges");
    }
  }
});

const updateVariable = defineAction({
  accept: "json",
  input: z.object({
    id: z.number(),
    peso: z.number()
  }),
  handler: async ({ id, peso }) => {
    try {
      const updated = await prisma.variable.update({
        where: { id },
        data: { peso }
      });
      return updated;
    } catch (error) {
      console.error("Error actualizando variable:", error);
      throw new Error("No se pudo actualizar la variable");
    }
  }
});

const getMetricasByCliente = defineAction({
  accept: "json",
  input: z.object({
    id: z.number()
  }),
  handler: async ({ id }) => {
    const metricas = await prisma.puntuaciones_clientes.findUnique({
      where: { id_cliente: id },
      select: {
        id: true,
        id_cliente: true,
        nombre_empresa: true,
        ano: true,
        mes: true,
        ponderacion_vcs: true,
        segmento_numerico: true,
        segmento_categorico: true,
        puntuacion_frecuencia: true,
        puntuacion_volumen: true,
        puntuacion_recency: true,
        puntuacion_margen: true,
        frecuencia: true
      }
    });
    return metricas;
  }
});

const getSegmentos = defineAction({
  accept: "json",
  handler: async ({ request }) => {
    try {
      const variables = await prisma.puntuaciones_clientes.findMany({
        select: {
          id: true,
          id_cliente: true,
          nombre_empresa: true,
          ano: true,
          mes: true,
          ponderacion_vcs: true,
          segmento_numerico: true,
          segmento_categorico: true,
          puntuacion_frecuencia: true,
          puntuacion_volumen: true,
          puntuacion_recency: true,
          puntuacion_margen: true,
          frecuencia: true
        },
        take: 100
        // Limitar a 100 registros para evitar sobrecarga
      });
      return variables;
    } catch (error) {
      console.error("Error fetching variable ranges:", error);
      throw new Error("Failed to fetch variable ranges");
    }
  }
});

const server = {
  getVariables,
  updateVariable,
  getRangos,
  getAllClientes,
  getAllPuntuacionesClientes,
  getSegmentos,
  getMetricasByCliente,
  getClienteById
};

export { server };
