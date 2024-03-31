import { c as create_ssr_component, f as each, b as add_attribute, e as escape } from "./ssr.js";
const Picture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { alt } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<picture>${each(Object.entries(data.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)} type="${"image/" + escape(format, true)}">`;
  })} <img${add_attribute("alt", alt, 0)}${add_attribute("src", data.img.src, 0)}></picture>`;
});
export {
  Picture as P
};
