import { g as getContext, c as create_ssr_component, b as add_attribute, e as escape, k as null_to_empty } from "./ssr.js";
import "./exports.js";
import "devalue";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const navigating = {
  subscribe(fn) {
    const store = getStores().navigating;
    return store.subscribe(fn);
  }
};
const css = {
  code: "button.svelte-o16kn5{border:none;background-color:transparent;padding:0;margin:0}a.svelte-o16kn5,button.svelte-o16kn5{min-width:max-content;font-size:0.95rem;text-decoration:none;color:var(--white);font-weight:600;border:none;border-radius:100px;display:flex;justify-content:center;align-items:center;gap:0.5rem;cursor:pointer;transition:transform 0.4s var(--bezier-one),\n			filter 0.4s var(--bezier-one);user-select:none}.button-filled.svelte-o16kn5{background-color:var(--accent-color);color:var(--grey-four)}.button-tonal.svelte-o16kn5{background-color:var(--grey-two)}.button-filled.svelte-o16kn5,.button-tonal.svelte-o16kn5{padding:16px 24px}.button-text.svelte-o16kn5{background-color:transparent;color:var(--accent-color);font-weight:500;letter-spacing:0.01rem}button.svelte-o16kn5:hover,a.svelte-o16kn5:hover{filter:brightness(85%)}img.svelte-o16kn5{height:20px}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { icon = "" } = $$props;
  let { href = "" } = $$props;
  let { target = "" } = $$props;
  let { label = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css);
  return `${href ? `<a${add_attribute("href", href, 0)}${add_attribute("target", target, 0)} class="${escape(null_to_empty(`button-${type}`), true) + " svelte-o16kn5"}"${add_attribute("aria-label", label, 0)}>${icon ? `<img src="${"../icons/" + escape(icon, true) + ".svg"}"${add_attribute("alt", icon, 0)} class="svelte-o16kn5">` : ``} ${slots.default ? slots.default({}) : ``}</a>` : `<button class="${escape(null_to_empty(`button-${type}`), true) + " svelte-o16kn5"}"${add_attribute("aria-label", label, 0)}>${icon ? `<img src="${"../icons/" + escape(icon, true) + ".svg"}"${add_attribute("alt", icon, 0)} class="svelte-o16kn5">` : ``} ${slots.default ? slots.default({}) : ``}</button>`}`;
});
export {
  Button as B,
  navigating as n,
  page as p
};
