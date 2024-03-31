import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.D4LMV6hb.js","_app/immutable/chunks/_layout.GokP2kCb.js","_app/immutable/chunks/scheduler.ByELIq10.js","_app/immutable/chunks/index.DJ_v6P4m.js","_app/immutable/chunks/entry.DMsEQtAS.js","_app/immutable/chunks/Button.C2omio6e.js"];
export const stylesheets = ["_app/immutable/assets/_layout.Cc_UlzU9.css","_app/immutable/assets/Button.DMlMxInr.css"];
export const fonts = [];
