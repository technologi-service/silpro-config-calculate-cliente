import { p as prisma } from '../../chunks/prisma_D9xrZjJk.mjs';
export { renderers } from '../../renderers.mjs';

const GET = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a GET!"
    })
  );
};
const PATCH = async ({ request }) => {
  try {
    const body = await request.json();
    const { rangos } = body;
    if (!Array.isArray(rangos) || rangos.length === 0) {
      return new Response(JSON.stringify({ error: "Datos inválidos" }), { status: 400 });
    }
    const results = [];
    for (const r of rangos) {
      if (!r.id || typeof r.min_valor !== "number" || typeof r.max_valor !== "number") continue;
      const updated = await prisma.rangos.update({
        where: { id: Number(r.id) },
        data: {
          min_valor: r.min_valor,
          max_valor: r.max_valor,
          puntuacion: r.puntuacion
        }
      });
      results.push(updated);
    }
    return new Response(JSON.stringify({ message: "Rangos actualizados", resultados: results }), {
      status: 200
    });
  } catch (error) {
    console.error("Error PATCH rangos:", error);
    return new Response(JSON.stringify({ error: "No se pudo actualizar los rangos" }), {
      status: 500
    });
  }
};
const DELETE = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a DELETE!"
    })
  );
};
const ALL = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: `This was a ${request.method}!`
    })
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  DELETE,
  GET,
  PATCH
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
