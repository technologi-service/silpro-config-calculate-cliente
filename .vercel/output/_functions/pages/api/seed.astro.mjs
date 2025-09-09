import { p as prisma } from '../../chunks/prisma_D9xrZjJk.mjs';
export { renderers } from '../../renderers.mjs';

const variables = [
  { nombre: "volumen", peso: 0.25 },
  { nombre: "margen", peso: 0.25 },
  { nombre: "frecuencia", peso: 0.25 },
  { nombre: "recencia", peso: 0.25 }
];
const rangos = [
  { nombre: "volumen", min_valor: 0, max_valor: 20, puntuacion: 1 },
  { nombre: "volumen", min_valor: 21, max_valor: 40, puntuacion: 2 },
  { nombre: "volumen", min_valor: 41, max_valor: 60, puntuacion: 3 },
  { nombre: "volumen", min_valor: 61, max_valor: 80, puntuacion: 4 },
  { nombre: "volumen", min_valor: 81, max_valor: 100, puntuacion: 5 },
  { nombre: "margen", min_valor: 0, max_valor: 20, puntuacion: 1 },
  { nombre: "margen", min_valor: 21, max_valor: 40, puntuacion: 2 },
  { nombre: "margen", min_valor: 41, max_valor: 60, puntuacion: 3 },
  { nombre: "margen", min_valor: 61, max_valor: 80, puntuacion: 4 },
  { nombre: "margen", min_valor: 81, max_valor: 100, puntuacion: 5 },
  { nombre: "frecuencia", min_valor: 0, max_valor: 20, puntuacion: 1 },
  { nombre: "frecuencia", min_valor: 21, max_valor: 40, puntuacion: 2 },
  { nombre: "frecuencia", min_valor: 41, max_valor: 60, puntuacion: 3 },
  { nombre: "frecuencia", min_valor: 61, max_valor: 80, puntuacion: 4 },
  { nombre: "frecuencia", min_valor: 81, max_valor: 100, puntuacion: 5 },
  { nombre: "recencia", min_valor: 0, max_valor: 20, puntuacion: 1 },
  { nombre: "recencia", min_valor: 21, max_valor: 40, puntuacion: 2 },
  { nombre: "recencia", min_valor: 41, max_valor: 60, puntuacion: 3 },
  { nombre: "recencia", min_valor: 61, max_valor: 80, puntuacion: 4 },
  { nombre: "recencia", min_valor: 81, max_valor: 100, puntuacion: 5 }
];
const GET = async ({ request }) => {
  await prisma.variable.deleteMany();
  await prisma.rangos.deleteMany();
  await prisma.variable.createMany({
    data: variables
  });
  await prisma.rangos.createMany({
    data: rangos
  });
  return new Response("Database seeded successfully", { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
