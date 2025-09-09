import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, h as addAttribute, l as renderComponent } from '../chunks/astro/server_yluicYhb.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BBx6-l_U.mjs';
import 'clsx';
/* empty css                                         */
import { a as actions } from '../chunks/_astro_actions_DhSEC-wt.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ComponentClientes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ComponentClientes;
  const { data, error } = await Astro2.callAction(actions.getAllClientes, {});
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100"> <div class="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8"> <h2 class="text-3xl font-extrabold text-center text-blue-700 mb-6">Clientes</h2> ${error && renderTemplate`<p class="text-red-500 text-center">${error.message}</p>`} ${Array.isArray(data) && data.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${data.map((cliente, idx) => {
    return renderTemplate`<div class="border rounded-lg p-4 bg-gradient-to-br from-blue-800 to-green-700 shadow-lg"> <span class="inline-block bg-blue-700 text-white rounded-full px-3 py-1 text-sm font-bold shadow">ID</span> <span class="text-lg font-semibold text-blue-100 tracking-widest">${cliente.id ?? "Sin ID"}</span> <span class="inline-block bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-full px-3 py-1 text-xs font-bold shadow">${cliente.segmento_actual ?? "Sin segmento"}</span> <div class="text-2xl font-extrabold text-[#00c6ff] mb-1 drop-shadow futuristic-title">${cliente.nombre_empresa ?? "Sin nombre"}</div> <div class="text-gray-300 text-sm mb-2 italic">Empresa registrada</div> <div class="grid grid-cols-2 gap-2 w-full mb-2"> <div class="bg-[#1a2980] bg-opacity-60 rounded-lg p-2 text-white text-xs shadow"> <span class="font-bold">Recency:</span> ${cliente.recency ?? "N/A"} </div> <div class="bg-[#1a2980] bg-opacity-60 rounded-lg p-2 text-white text-xs shadow"> <span class="font-bold">Frecuencia:</span> ${cliente.frecuencia ?? "N/A"} </div> <div class="bg-[#1a2980] bg-opacity-60 rounded-lg p-2 text-white text-xs shadow"> <span class="font-bold">Volumen Facturación:</span> ${cliente.volumen_facturacion ?? "N/A"} </div> <div class="bg-[#1a2980] bg-opacity-60 rounded-lg p-2 text-white text-xs shadow"> <span class="font-bold">Margen Total:</span> ${cliente.margen_total ?? "N/A"} </div> <div class="bg-[#1a2980] bg-opacity-60 rounded-lg p-2 text-white text-xs shadow"> <span class="font-bold">Score Numérico:</span> ${cliente.score_numerico_actual ?? "N/A"} </div> <div class="bg-[#1a2980] bg-opacity-60 rounded-lg p-2 text-white text-xs shadow"> <span class="font-bold">Segmento Anterior:</span> ${cliente.segmento_anterior ?? "N/A"} </div> </div> <div class="w-full flex justify-end mt-2"> <a${addAttribute(`/cliente/${cliente.cliente_id.toString()}`, "href")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm shadow-lg">
Ver Detalles
</a> </div> </div>`;
  })} </div>` : renderTemplate`<p class="text-center text-gray-500">No hay clientes registrados.</p>`}  </div> </section>`;
}, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/ComponentClientes.astro", void 0);

const $$VistaClientes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Clientes" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Clientes", $$ComponentClientes, {})} ` })}`;
}, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/vistaClientes.astro", void 0);

const $$file = "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/vistaClientes.astro";
const $$url = "/vistaClientes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$VistaClientes,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
