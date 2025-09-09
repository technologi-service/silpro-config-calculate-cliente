import { e as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_yluicYhb.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100"> <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"> <h2 class="text-3xl font-extrabold text-center text-blue-700 mb-6">Tubos Paris</h2> <form method="post" action="/vistaClientes" class="space-y-6"> <div class="flex flex-col gap-2"> <label class="text-lg font-semibold text-gray-700">Usuario</label> <input type="text" name="usuario" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Usuario" required> </div> <div class="flex flex-col gap-2"> <label class="text-lg font-semibold text-gray-700">Password</label> <input type="password" name="password" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Contrase" required> </div> <button type="submit" class="w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg shadow hover:scale-105 transition-transform">Acceder</button> </form> </div> </section>`;
}, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/index.astro", void 0);

const $$file = "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
