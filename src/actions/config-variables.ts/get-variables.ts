import { defineAction } from "astro:actions";
import prisma from "../../db/prisma";

export const getVariables = defineAction({
  accept: 'json',
  handler: async ({ request }) => {
   try {
      const variables = await prisma.variable.findMany()
      return variables
   } catch (error) {
     console.error("Error fetching variable ranges:", error);
       throw new Error("Failed to fetch variable ranges");
     }
    }
  });
