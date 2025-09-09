import 'kleur/colors';
import { q as decodeKey } from './chunks/astro/server_yluicYhb.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_-XB_7i5h.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_Cixpwzzf.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/","cacheDir":"file:///home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/node_modules/.astro/","outDir":"file:///home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/dist/","srcDir":"file:///home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/","publicDir":"file:///home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/public/","buildClientDir":"file:///home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/dist/client/","buildServerDir":"file:///home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/vistaClientes.BZkuAooz.css"}],"routeData":{"route":"/admin/rangosconfig","isIndex":false,"type":"page","pattern":"^\\/admin\\/rangosConfig\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"rangosConfig","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/rangosConfig.astro","pathname":"/admin/rangosConfig","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/vistaClientes.BZkuAooz.css"}],"routeData":{"route":"/admin/variablesconfig","isIndex":false,"type":"page","pattern":"^\\/admin\\/variablesConfig\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"variablesConfig","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/variablesConfig.astro","pathname":"/admin/variablesConfig","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/seed","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/seed\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"seed","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/seed/index.ts","pathname":"/api/seed","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/update-rangos","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/update-rangos\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"update-rangos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/update-rangos/index.ts","pathname":"/api/update-rangos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/update-variables","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/update-variables\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"update-variables","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/update-variables/index.ts","pathname":"/api/update-variables","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/vistaClientes.BZkuAooz.css"}],"routeData":{"route":"/cliente/[id]","isIndex":false,"type":"page","pattern":"^\\/cliente\\/([^/]+?)\\/?$","segments":[[{"content":"cliente","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/cliente/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cliente/[...slog]","isIndex":false,"type":"page","pattern":"^\\/cliente(?:\\/(.*?))?\\/?$","segments":[[{"content":"cliente","dynamic":false,"spread":false}],[{"content":"...slog","dynamic":true,"spread":true}]],"params":["...slog"],"component":"src/pages/cliente/[...slog].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/configuracion","isIndex":false,"type":"page","pattern":"^\\/configuracion\\/?$","segments":[[{"content":"configuracion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/configuracion.astro","pathname":"/configuracion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/vistaClientes.BZkuAooz.css"}],"routeData":{"route":"/metricasgenerales","isIndex":false,"type":"page","pattern":"^\\/metricasGenerales\\/?$","segments":[[{"content":"metricasGenerales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/metricasGenerales.astro","pathname":"/metricasGenerales","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/vistaClientes.BZkuAooz.css"}],"routeData":{"route":"/vistaclientes","isIndex":false,"type":"page","pattern":"^\\/vistaClientes\\/?$","segments":[[{"content":"vistaClientes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/vistaClientes.astro","pathname":"/vistaClientes","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/vistaClientes.BZkuAooz.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/admin/rangosConfig.astro",{"propagation":"none","containsHead":true}],["/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/admin/variablesConfig.astro",{"propagation":"none","containsHead":true}],["/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/cliente/[id].astro",{"propagation":"none","containsHead":true}],["/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/metricasGenerales.astro",{"propagation":"none","containsHead":true}],["/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/pages/vistaClientes.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/admin/rangosConfig@_@astro":"pages/admin/rangosconfig.astro.mjs","\u0000@astro-page:src/pages/admin/variablesConfig@_@astro":"pages/admin/variablesconfig.astro.mjs","\u0000@astro-page:src/pages/api/seed/index@_@ts":"pages/api/seed.astro.mjs","\u0000@astro-page:src/pages/api/update-rangos/index@_@ts":"pages/api/update-rangos.astro.mjs","\u0000@astro-page:src/pages/api/update-variables/index@_@ts":"pages/api/update-variables.astro.mjs","\u0000@astro-page:src/pages/cliente/[id]@_@astro":"pages/cliente/_id_.astro.mjs","\u0000@astro-page:src/pages/cliente/[...slog]@_@astro":"pages/cliente/_---slog_.astro.mjs","\u0000@astro-page:src/pages/configuracion@_@astro":"pages/configuracion.astro.mjs","\u0000@astro-page:src/pages/metricasGenerales@_@astro":"pages/metricasgenerales.astro.mjs","\u0000@astro-page:src/pages/vistaClientes@_@astro":"pages/vistaclientes.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Cmxp-NVb.mjs","/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DqwklAUf.mjs","/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/ViewMetricas.tsx":"_astro/ViewMetricas.BUUeX-SY.js","@astrojs/react/client.js":"_astro/client.ShtJu5IE.js","/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/confiRangos.astro?astro&type=script&index=0&lang.ts":"_astro/confiRangos.astro_astro_type_script_index_0_lang.XcjTKB1W.js","/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/ReloadButton.astro?astro&type=script&index=0&lang.ts":"_astro/ReloadButton.astro_astro_type_script_index_0_lang.D_3PbAHz.js","/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/FormConfig.astro?astro&type=script&index=0&lang.ts":"_astro/FormConfig.astro_astro_type_script_index_0_lang.0qXMuxNn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/confiRangos.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".grupo-form\").forEach(t=>{t.addEventListener(\"submit\",async function(c){c.preventDefault();const o=[];t.querySelectorAll(\"[data-rango]\").forEach((n,e)=>{const u=n.querySelector('input[name=\"id\"]'),i=u?u.value:null,r=n.querySelector(`input[name=\"min_valor_${e}\"]`),s=n.querySelector(`input[name=\"max_valor_${e}\"]`),l=n.querySelector(`input[name=\"puntuacion_${e}\"]`),m=r?parseInt(r.value):null,d=s?parseInt(s.value):null,v=l?parseInt(l.value):null;o.push({id:Number(i),min_valor:m,max_valor:d,puntuacion:v})});const a={rangos:o};console.log(\"Enviando grupo:\",a);const p=await(await fetch(\"/api/update-rangos\",{method:\"PATCH\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(a)})).json();console.log(\"Respuesta:\",p)})})});"],["/home/maverick/projectos/astro/tubo-paris-config-calculate-cliente/src/components/FormConfig.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".variable-form\").forEach(n=>{n.addEventListener(\"submit\",async function(t){t.preventDefault();const e=t.currentTarget,a=e.getAttribute(\"data-id\"),r=e.querySelector('input[name=\"nombre\"]')?.value,s=parseFloat(e.querySelector('input[name=\"peso\"]')?.value??\"0\"),o={id:Number(a),nombre:r,peso:s};console.log(\"Enviando:\",o);const c=await(await fetch(\"/api/update-variables\",{method:\"PATCH\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(o)})).json();console.log(\"Respuesta:\",c)})})});"]],"assets":["/_astro/vistaClientes.BZkuAooz.css","/favicon.svg","/_astro/ReloadButton.astro_astro_type_script_index_0_lang.D_3PbAHz.js","/_astro/ViewMetricas.BUUeX-SY.js","/_astro/client.ShtJu5IE.js","/_astro/index.BIysndU8.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"CbeiOWvdH2vvAlVt7ATbKozb01caj/kt2Laanvt3sDg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
