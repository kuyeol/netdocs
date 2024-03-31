import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, f as each } from "./ssr.js";
import { q as queries } from "./_layout.js";
import { c as createQuery, Q as Query } from "./Query.js";
const css$1 = {
  code: "span.svelte-yijywk{list-style:none;color:var(--grey-five);font-size:0.9rem;font-weight:600}ul.svelte-yijywk{margin:1.25rem 0rem;display:flex;gap:1rem;flex-direction:column;width:max-content}.title.svelte-yijywk{display:flex;justify-content:space-between;background-color:transparent;border:none;width:100%;margin:1.5rem 0;cursor:pointer}.mobile-only.svelte-yijywk:not(:last-child){border-bottom:1px solid var(--grey-three)}.mobile-only.svelte-yijywk{display:none}@media screen and (max-width: 768px){.mobile-only.svelte-yijywk{display:block}.desktop-only.svelte-yijywk{display:none}}img.svelte-yijywk{height:24px}",
  map: null
};
const FooterSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  return `<div class="desktop-only svelte-yijywk"><span class="svelte-yijywk">${escape(title)}</span> <ul class="svelte-yijywk">${slots.default ? slots.default({}) : ``}</ul></div> <div class="mobile-only svelte-yijywk"> <button class="title svelte-yijywk"><span class="svelte-yijywk">${escape(title)}</span> <img src="${"/icons/" + escape("expand_more", true) + ".svg"}"${add_attribute("alt", "Expand", 0)} class="svelte-yijywk"></button> ${``} </div>`;
});
const css = {
  code: "footer.svelte-1bbfwsp.svelte-1bbfwsp{margin:4rem 0 5rem 0;margin-inline:auto;padding-bottom:1rem;width:min(87%, 80rem)}.footer-top.svelte-1bbfwsp.svelte-1bbfwsp{display:flex;gap:8rem;justify-content:space-between;margin-bottom:4rem}.footer-bottom.svelte-1bbfwsp.svelte-1bbfwsp{display:flex;gap:2rem;align-items:center}@media screen and (max-width: 768px){.footer-bottom.svelte-1bbfwsp.svelte-1bbfwsp{flex-wrap:wrap;gap:1rem}}#logo-name.svelte-1bbfwsp.svelte-1bbfwsp{font-size:1.4rem;color:var(--white);font-weight:600}#logo-name.svelte-1bbfwsp span.svelte-1bbfwsp{color:var(--accent-color)}.footer-bottom.svelte-1bbfwsp a.svelte-1bbfwsp{text-decoration:none;color:var(--grey-five);font-weight:600}li.svelte-1bbfwsp.svelte-1bbfwsp{list-style:none;color:var(--grey-five);font-size:0.9rem;font-weight:500}li.svelte-1bbfwsp a.svelte-1bbfwsp{color:var(--accent-color);font-weight:600;font-size:0.95rem}path.svelte-1bbfwsp.svelte-1bbfwsp{stroke:var(--grey-three)}.main-content.svelte-1bbfwsp.svelte-1bbfwsp{display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start}img.svelte-1bbfwsp.svelte-1bbfwsp{height:2.5rem}a.svelte-1bbfwsp.svelte-1bbfwsp{text-decoration:none}a.svelte-1bbfwsp.svelte-1bbfwsp:hover{text-decoration:underline var(--accent-color-two);color:var(--white)}.links-container.svelte-1bbfwsp.svelte-1bbfwsp{display:flex;gap:10rem;margin-top:1rem}@media screen and (max-width: 1050px){.footer-top.svelte-1bbfwsp.svelte-1bbfwsp{flex-direction:column;gap:2rem}.links-container.svelte-1bbfwsp.svelte-1bbfwsp{display:grid;gap:2rem;grid-template-columns:repeat(auto-fit, minmax(80px, 1fr))}}@media screen and (max-width: 768px){.links-container.svelte-1bbfwsp.svelte-1bbfwsp{display:flex;flex-direction:column;gap:initial}}svg.svelte-1bbfwsp.svelte-1bbfwsp{padding-left:15px;padding-right:15px}",
  map: null
};
const FooterHost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const infoQuery = createQuery(["info"], queries.info);
  const socialsQuery = createQuery(["socials"], queries.socials);
  $$result.css.add(css);
  return ` <svg aria-hidden="true" width="100%" height="8" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1bbfwsp"><pattern id="a" width="91" height="8" patternUnits="userSpaceOnUse"><path d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0" stroke-linecap="square" class="svelte-1bbfwsp"></path></pattern><rect width="100%" height="100%" fill="url(#a)"></rect></svg> <footer class="svelte-1bbfwsp"><div class="footer-top svelte-1bbfwsp"><section class="main-content svelte-1bbfwsp"><img src="/logo.svg" class="logo-image svelte-1bbfwsp" alt="ReVanced Logo"> ${validate_component(Query, "Query").$$render($$result, { query: infoQuery }, {}, {
    default: ({ data }) => {
      return `${data ? `<div><p>${escape(data.info.about)}</p></div>` : ``}`;
    }
  })}</section> <section class="links-container svelte-1bbfwsp">${validate_component(FooterSection, "FooterSection").$$render($$result, { title: "Pages" }, {}, {
    default: () => {
      return `<li class="svelte-1bbfwsp" data-svelte-h="svelte-1huopth"><a href="/" class="svelte-1bbfwsp">Home</a></li> <li class="svelte-1bbfwsp" data-svelte-h="svelte-yyl906"><a href="/download" class="svelte-1bbfwsp">Download</a></li> <li class="svelte-1bbfwsp" data-svelte-h="svelte-e9o666"><a href="/patches" class="svelte-1bbfwsp">Patches</a></li> <li class="svelte-1bbfwsp" data-svelte-h="svelte-j0tqj6"><a href="/contributors" class="svelte-1bbfwsp">Contributors</a></li> <li class="svelte-1bbfwsp" data-svelte-h="svelte-sa8932"><a href="/donate" class="svelte-1bbfwsp">Donate</a></li>`;
    }
  })} ${validate_component(Query, "Query").$$render($$result, { query: socialsQuery }, {}, {
    default: ({ data }) => {
      return `${data ? `${validate_component(FooterSection, "FooterSection").$$render($$result, { title: "Socials" }, {}, {
        default: () => {
          return `${each(data.socials, ({ name, url }) => {
            return `<li class="svelte-1bbfwsp"><a${add_attribute("href", url, 0)} target="_blank" rel="noreferrer" class="svelte-1bbfwsp">${escape(name)}</a> </li>`;
          })}`;
        }
      })}` : ``}`;
    }
  })}</section></div> ${validate_component(Query, "Query").$$render($$result, { query: infoQuery }, {}, {
    default: ({ data }) => {
      return `${data ? `<div class="footer-bottom svelte-1bbfwsp"><div id="logo-name" class="svelte-1bbfwsp" data-svelte-h="svelte-1378yhg"><span class="svelte-1bbfwsp">Re</span>Vanced</div> <a href="/donate" class="svelte-1bbfwsp" data-svelte-h="svelte-19eiv6k"><div>Donate</div></a> <a href="${"mailto:" + escape(data.info.contact.email, true)}" class="svelte-1bbfwsp"><div data-svelte-h="svelte-1qge2sq">Email</div></a></div>` : ``}`;
    }
  })} </footer>`;
});
export {
  FooterHost as F
};
