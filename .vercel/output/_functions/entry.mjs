import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CwvNaBk3.mjs';
import { manifest } from './manifest_Cmxp-NVb.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/admin/rangosconfig.astro.mjs');
const _page3 = () => import('./pages/admin/variablesconfig.astro.mjs');
const _page4 = () => import('./pages/api/seed.astro.mjs');
const _page5 = () => import('./pages/api/update-rangos.astro.mjs');
const _page6 = () => import('./pages/api/update-variables.astro.mjs');
const _page7 = () => import('./pages/cliente/_id_.astro.mjs');
const _page8 = () => import('./pages/cliente/_---slog_.astro.mjs');
const _page9 = () => import('./pages/configuracion.astro.mjs');
const _page10 = () => import('./pages/metricasgenerales.astro.mjs');
const _page11 = () => import('./pages/vistaclientes.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/admin/rangosConfig.astro", _page2],
    ["src/pages/admin/variablesConfig.astro", _page3],
    ["src/pages/api/seed/index.ts", _page4],
    ["src/pages/api/update-rangos/index.ts", _page5],
    ["src/pages/api/update-variables/index.ts", _page6],
    ["src/pages/cliente/[id].astro", _page7],
    ["src/pages/cliente/[...slog].astro", _page8],
    ["src/pages/configuracion.astro", _page9],
    ["src/pages/metricasGenerales.astro", _page10],
    ["src/pages/vistaClientes.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2fbf554c-926d-4531-b65c-39dc71bdc808",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
