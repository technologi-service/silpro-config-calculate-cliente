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
    const { id, nombre, peso } = body;
    if (!id || typeof nombre !== "string" || typeof peso !== "number") {
      return new Response(JSON.stringify({ error: "Datos inválidos" }), { status: 400 });
    }
    const updated = await prisma.variable.update({
      where: { id: Number(id) },
      data: { nombre, peso }
    });
    return new Response(JSON.stringify({ message: "Variable actualizada", variable: updated }), {
      status: 200
    });
  } catch (error) {
    console.error("Error PATCH variable:", error);
    return new Response(JSON.stringify({ error: "No se pudo actualizar la variable" }), {
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
