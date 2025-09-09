import { e as createComponent, f as createAstro, m as maybeRenderHead, k as renderScript, r as renderTemplate, h as addAttribute, l as renderComponent } from '../../chunks/astro/server_yluicYhb.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_BBx6-l_U.mjs';
import 'clsx';
/* empty css                                            */
import { a as actions } from '../../chunks/_astro_actions_DhSEC-wt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$FormConfig = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormConfig;
  const { data, error } = await Astro2.callAction(actions.getVariables, {});
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100"> <div class="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"> <h2 class="text-3xl font-extrabold text-center text-blue-700 mb-6">Configuración de Variables</h2> ${error && renderTemplate`<p class="text-red-500">${error.message}</p>`} ${data && data.length > 0 ? data.map((variable) => renderTemplate`<form class="space-y-6 mb-8 variable-form" autocomplete="off"${addAttribute(variable.id, "data-id")}> <div class="flex flex-col gap-2"> <label class="text-lg font-semibold text-gray-700">Nombre</label> <input type="text" name="nombre"${addAttribute(variable.nombre ?? "", "value")} class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Nombre de la variable"> </div> <div class="flex flex-col gap-2"> <label class="text-lg font-semibold text-gray-700">Peso</label> <input type="number" step="0.01" name="peso"${addAttribute(variable.peso?.toString().replace(",", ".") ?? "", "value")} inputmode="decimal" pattern="[0-9]+(\\.[0-9]{1,2})?" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Peso de la variable"> </div> <button type="submit" class="w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg shadow hover:scale-105 transition-transform">Guardar</button> </form>`) : renderTemplate`<p class="text-center text-gray-500">No hay variables registradas.</p>`} ${renderScript($$result, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/FormConfig.astro?astro&type=script&index=0&lang.ts")} </div> </section>`;
}, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/FormConfig.astro", void 0);

const $$VariablesConfig = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormConfig", $$FormConfig, {})} ` })}`;
}, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/admin/variablesConfig.astro", void 0);

const $$file = "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/admin/variablesConfig.astro";
const $$url = "/admin/variablesConfig";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VariablesConfig,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
