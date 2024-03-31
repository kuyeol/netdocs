import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { H as Head } from "../../chunks/Head.js";
import { p as page, B as Button } from "../../chunks/Button.js";
const css = {
  code: "section.svelte-1n18ctg{text-align:center;margin-top:10rem}h1.svelte-1n18ctg{color:var(--accent-color)}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let status;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  status = $page.status;
  $$unsubscribe_page();
  return `${validate_component(Head, "Meta").$$render($$result, { title: status.toString() }, {}, {})} <section class="wrapper svelte-1n18ctg"><h1 class="svelte-1n18ctg">${escape(status)}</h1> ${status == 404 ? `<p data-svelte-h="svelte-17y22q0">This page received a cease and desist letter from a multi-billion dollar tech company.</p> <br> ${validate_component(Button, "Button").$$render($$result, { type: "filled", href: "/" }, {}, {
    default: () => {
      return `Return Home`;
    }
  })}` : `<p>${escape($page.error?.message)}</p>`} </section>`;
});
export {
  Error as default
};
