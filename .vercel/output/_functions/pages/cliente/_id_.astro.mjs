import { e as createComponent, f as createAstro, l as renderComponent, r as renderTemplate, m as maybeRenderHead, n as Fragment } from '../../chunks/astro/server_yluicYhb.mjs';
import 'kleur/colors';
import { a as actions } from '../../chunks/_astro_actions_DhSEC-wt.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_BBx6-l_U.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const id_cliente = Astro2.params.id;
  let cliente = null;
  if (id_cliente) {
    cliente = await Astro2.callAction(actions.getMetricasByCliente, { id: Number(id_cliente) });
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": cliente?.data?.nombre_empresa ?? "Detalle Cliente" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#05060a] via-[#0a0f1a] to-[#0a0f1a] text-slate-100"> <div class="w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"> <h2 class="text-3xl md:text-4xl font-extrabold text-center tracking-wide mb-8 text-white">
Datos del Cliente
</h2> ${id_cliente && cliente ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"> <div class="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 hover:bg-slate-800 transition"> <span class="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 ring-1 ring-slate-700">ID</span> <span class="ml-auto font-mono text-base text-slate-100">${cliente.data?.id_cliente}</span> </div> <div class="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 hover:bg-slate-800 transition"> <span class="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 ring-1 ring-slate-700">Empresa</span> <span class="ml-auto text-base text-slate-100">${cliente.data?.nombre_empresa}</span> </div> <div class="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 hover:bg-slate-800 transition"> <span class="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 ring-1 ring-slate-700">Recency</span> <span class="ml-auto text-base text-slate-100">${cliente.data?.puntuacion_recency?.toString() ?? "N/A"}</span> </div> <div class="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 hover:bg-slate-800 transition"> <span class="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 ring-1 ring-slate-700">Segmento numérico</span> <span class="ml-auto text-base text-slate-100">${cliente.data?.segmento_numerico}</span> </div> <div class="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 hover:bg-slate-800 transition"> <span class="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 ring-1 ring-slate-700">Año</span> <span class="ml-auto text-base text-slate-100">${cliente.data?.ano ?? "N/A"}</span> </div> <div class="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 hover:bg-slate-800 transition"> <span class="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 ring-1 ring-slate-700">Mes</span> <span class="ml-auto text-base text-slate-100">${cliente.data?.mes ?? "N/A"}</span> </div> <div class="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 hover:bg-slate-800 transition"> <span class="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 ring-1 ring-slate-700">Punt. Volumen</span> <span class="ml-auto text-base text-slate-100">${cliente.data?.puntuacion_volumen}</span> </div> <div class="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 hover:bg-slate-800 transition"> <span class="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 ring-1 ring-slate-700">Punt. Margen</span> <span class="ml-auto text-base text-slate-100">${cliente.data?.puntuacion_margen}</span> </div> <div class="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 hover:bg-slate-800 transition"> <span class="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 ring-1 ring-slate-700">Punt. Frecuencia</span> <span class="ml-auto text-base text-slate-100">${cliente.data?.puntuacion_frecuencia?.toString() ?? "N/A"}</span> </div> <div class="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 hover:bg-slate-800 transition"> <span class="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 ring-1 ring-slate-700">Ponderación VCS</span> <span class="ml-auto text-base text-slate-100">${cliente.data?.ponderacion_vcs?.toString() ?? "N/A"}</span> </div> <div class="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 hover:bg-slate-800 transition md:col-span-2"> <span class="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 ring-1 ring-slate-700">Segmento categórico</span> <span class="ml-auto text-base text-slate-100">${cliente.data?.segmento_categorico}</span> </div> </div> ` })}` : renderTemplate`<div class="text-center text-sm md:text-lg font-semibold text-rose-200 bg-rose-900/30 border border-rose-800 rounded-xl py-3">
No se proporcionó id en la URL o no hay datos.
</div>`} </div> </section> ` })}`;
}, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/cliente/[id].astro", void 0);

const $$file = "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/cliente/[id].astro";
const $$url = "/cliente/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
