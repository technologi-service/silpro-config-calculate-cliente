import { e as createComponent, f as createAstro, m as maybeRenderHead, k as renderScript, r as renderTemplate, h as addAttribute, l as renderComponent } from '../../chunks/astro/server_yluicYhb.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_BBx6-l_U.mjs';
import 'clsx';
/* empty css                                            */
import { a as actions } from '../../chunks/_astro_actions_DhSEC-wt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ConfiRangos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ConfiRangos;
  const { data, error } = await Astro2.callAction(actions.getRangos, {});
  let grupos = {};
  if (Array.isArray(data)) {
    for (const rango of data) {
      if (!grupos[rango.nombre]) grupos[rango.nombre] = [];
      grupos[rango.nombre].push(rango);
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-green-100"> <div class="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8"> <h2 class="text-3xl font-extrabold text-center text-purple-700 mb-6">Configuración de Rangos</h2> ${error && renderTemplate`<p class="text-red-500">${error.message}</p>`} ${Object.keys(grupos).length > 0 ? Object.entries(grupos).map(([nombreGrupo, rangos]) => renderTemplate`<div class="mb-12"> <h3 class="text-2xl font-bold text-purple-600 mb-4 border-b pb-2">${nombreGrupo}</h3> <form class="space-y-4 grupo-form" autocomplete="off"${addAttribute(nombreGrupo, "data-grupo")}> <div class="grid gap-6"> ${rangos.map((rango, idx) => renderTemplate`<div class="grid grid-cols-3 gap-4"${addAttribute(rango.id, "data-rango")}> <input type="hidden" name="id"${addAttribute(rango.id, "value")}> <div class="flex flex-col gap-2"> <label class="text-md font-semibold text-gray-700">Min Valor</label> <input type="number"${addAttribute(`min_valor_${idx}`, "name")}${addAttribute(rango.min_valor ?? "", "value")} class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Valor mínimo"> </div> <div class="flex flex-col gap-2"> <label class="text-md font-semibold text-gray-700">Max Valor</label> <input type="number"${addAttribute(`max_valor_${idx}`, "name")}${addAttribute(rango.max_valor ?? "", "value")} class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Valor máximo"> </div> <div class="flex flex-col gap-2"> <label class="text-md font-semibold text-gray-700">Puntuación</label> <div class="flex items-center gap-1"> ${Array.from({ length: 5 }).map((_, starIdx) => renderTemplate`<span${addAttribute(
    starIdx < (rango.puntuacion ?? 0) ? "text-yellow-400 text-2xl cursor-pointer" : "text-gray-300 text-2xl cursor-pointer",
    "class"
  )}${addAttribute(`this.parentElement.parentElement.parentElement.querySelector('input[name='puntuacion_${idx}']').value = ${starIdx + 1}; this.parentElement.querySelectorAll('span').forEach((el, i) => el.className = i < ${starIdx + 1} ? 'text-yellow-400 text-2xl cursor-pointer' : 'text-gray-300 text-2xl cursor-pointer');`, "onclick")}>★</span>`)} <input type="hidden"${addAttribute(`puntuacion_${idx}`, "name")}${addAttribute(rango.puntuacion ?? 0, "value")}> </div> </div> </div>`)} </div> <button type="submit" class="w-full py-2 rounded-lg bg-gradient-to-r from-green-400 to-purple-500 text-white font-bold text-md shadow hover:scale-105 transition-transform mt-2">Guardar grupo</button> </form> </div>`) : renderTemplate`<p class="text-center text-gray-500">No hay rangos registrados.</p>`} ${renderScript($$result, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/confiRangos.astro?astro&type=script&index=0&lang.ts")} </div> </section>`;
}, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/confiRangos.astro", void 0);

const $$RangosConfig = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ConfigRangos", $$ConfiRangos, {})} ` })}`;
}, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/admin/rangosConfig.astro", void 0);

const $$file = "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/admin/rangosConfig.astro";
const $$url = "/admin/rangosConfig";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RangosConfig,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
