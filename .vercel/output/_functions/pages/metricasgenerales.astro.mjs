import { e as createComponent, m as maybeRenderHead, k as renderScript, r as renderTemplate, l as renderComponent } from '../chunks/astro/server_yluicYhb.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BBx6-l_U.mjs';
import 'clsx';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$ReloadButton = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl shadow-md max-w-md mx-auto mt-8"> <h3 class="mb-2 text-blue-600 text-xl font-semibold">Recalcular Métricas</h3> <p class="mb-5 text-gray-700">Haz clic en el botón para recalcular las métricas generales.</p> <button id="recalcularBtn" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-lg text-base font-medium shadow hover:from-blue-700 hover:to-cyan-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
Recalcular Métricas
</button> ${renderScript($$result, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/ReloadButton.astro?astro&type=script&index=0&lang.ts")}</div>`;
}, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/ReloadButton.astro", void 0);

const $$MetricasGenerales = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "M\xE9tricas Generales" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ViewMetricas", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/ViewMetricas.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "ReloadButton", $$ReloadButton, {})} ` })}`;
}, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/metricasGenerales.astro", void 0);

const $$file = "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/metricasGenerales.astro";
const $$url = "/metricasGenerales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MetricasGenerales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
