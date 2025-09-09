import { e as createComponent, f as createAstro, h as addAttribute, o as renderHead, p as renderSlot, r as renderTemplate } from './astro/server_yluicYhb.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <nav class="bg-gradient-to-r from-blue-500 to-green-400 shadow-lg mb-8"> <div class="container mx-auto px-4 py-3 flex justify-between items-center"> <a href="/vistaClientes" class="text-white text-2xl font-bold tracking-wide">Tubos Paris </a> <ul class="flex gap-8"> <li><a href="/vistaClientes" class="text-white hover:text-yellow-200 font-semibold transition">Inicio</a></li> <li><a href="/metricasGenerales" class="text-white hover:text-yellow-200 font-semibold transition">Métricas</a></li> <li><a href="/vistaClientes" class="text-white hover:text-yellow-200 font-semibold transition">Clientes</a></li> <li><a href="/admin/rangosConfig" class="text-white hover:text-yellow-200 font-semibold transition">Rangos</a></li> <li><a href="/admin/variablesConfig" class="text-white hover:text-yellow-200 font-semibold transition">Variables</a></li> </ul> </div> </nav> <main class="container mx-auto px-4 py-8"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
