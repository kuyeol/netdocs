import { c as create_ssr_component, b as add_attribute, e as escape, d as add_styles, f as each, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                                                              */
import { F as FooterHost } from "../../../chunks/FooterHost.js";
import { H as Head } from "../../../chunks/Head.js";
import { c as createQuery, Q as Query } from "../../../chunks/Query.js";
import { q as queries } from "../../../chunks/_layout.js";
function friendlyName(text) {
  return text.replace(/-/g, " ").replace(/revanced\/revanced/g, "ReVanced").replace(/\bcli\b/g, "CLI").replace(/api/g, "API").replace(/(?:^|\s)\S/g, (x) => x.toUpperCase());
}
const css$2 = {
  code: "a.svelte-nghe6q{color:var(--white);text-decoration:none;cursor:pointer;padding:0.9rem 1rem;width:100%;transition:background-color 0.3s var(--bezier-one);display:flex;gap:1rem;align-items:center;border-right:1px solid var(--grey-three);border-bottom:1px solid var(--grey-three)}a.svelte-nghe6q:hover{background:var(--grey-one);text-decoration:underline var(--accent-color);color:var(--white)}h5.svelte-nghe6q{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0.25rem 0}img.svelte-nghe6q{border-radius:50%;height:32px;width:32px;background-color:var(--grey-two);transition:transform 0.4s var(--bezier-one);user-select:none}@media(max-width: 767px){h5.svelte-nghe6q{display:none}img.svelte-nghe6q{height:42px;width:42px}a.svelte-nghe6q{width:max-content;background-color:transparent;border:none}}",
  map: null
};
const ContributorPerson = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { pfp } = $$props;
  let { url } = $$props;
  let alt = `${name}'s profile picture`;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.pfp === void 0 && $$bindings.pfp && pfp !== void 0)
    $$bindings.pfp(pfp);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$2);
  return `<a${add_attribute("href", url, 0)} rel="noreferrer" target="_blank" class="svelte-nghe6q"><img${add_attribute("src", pfp, 0)}${add_attribute("alt", alt, 0)} class="svelte-nghe6q"> <h5 class="svelte-nghe6q">${escape(name)}</h5> </a>`;
});
const css$1 = {
  code: ".title.svelte-9wzsbj{display:flex;align-items:center;justify-content:space-between;cursor:pointer;background-color:var(--grey-six);padding:0.75rem 1.25rem;border-bottom:1px solid var(--grey-three);transition:all 0.2s var(--bezier-one)}.title.svelte-9wzsbj:hover{background-color:var(--grey-one)}.closed.svelte-9wzsbj{border-bottom:none}#arrow.svelte-9wzsbj{height:1.5rem;transition:all 0.2s var(--bezier-one);user-select:none}.section-container.svelte-9wzsbj{border-radius:20px;overflow:hidden;border:1px solid var(--grey-three)}a.svelte-9wzsbj{display:flex;text-decoration:none;width:max-content;border-radius:8px}a.svelte-9wzsbj:hover{text-decoration:underline var(--accent-color);color:var(--white)}.contrib-host.svelte-9wzsbj{margin-right:-1px;margin-bottom:-1px;display:grid;justify-items:center;grid-template-columns:repeat(auto-fill, minmax(150px, 1fr))}@media(max-width: 767px){.contrib-host.svelte-9wzsbj{padding:0.75rem;gap:0.25rem;grid-template-columns:repeat(auto-fill, minmax(50px, 1fr))}}",
  map: null
};
const ContributorSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contributors } = $$props;
  let { repo } = $$props;
  let usersIwantToExplodeSoBadly = ["semantic-release-bot"];
  let repo_name = friendlyName(repo);
  if ($$props.contributors === void 0 && $$bindings.contributors && contributors !== void 0)
    $$bindings.contributors(contributors);
  if ($$props.repo === void 0 && $$bindings.repo && repo !== void 0)
    $$bindings.repo(repo);
  $$result.css.add(css$1);
  return `<div class="section-container svelte-9wzsbj"><div class="${["title svelte-9wzsbj", ""].join(" ").trim()}"><a href="${"https://github.com/" + escape(repo, true)}" rel="noreferrer" target="_blank" class="svelte-9wzsbj"><h4>${escape(repo_name)}</h4></a> <img id="arrow" src="/icons/expand_less.svg" alt="dropdown" class="svelte-9wzsbj"${add_styles({
    "transform": "rotate(0deg)"
  })}></div> ${`<div class="contrib-host svelte-9wzsbj">${each(contributors, ({ login, avatar_url, html_url }) => {
    return `${!usersIwantToExplodeSoBadly.includes(login) ? `${validate_component(ContributorPerson, "ContributorButton").$$render(
      $$result,
      {
        name: login,
        pfp: avatar_url,
        url: html_url
      },
      {},
      {}
    )}` : ``}`;
  })}</div>`} </div>`;
});
const css = {
  code: ".repos.svelte-nx1y5b{display:flex;flex-direction:column;gap:2rem;margin-bottom:4rem}h2.svelte-nx1y5b{text-align:center;color:var(--grey-four);margin-bottom:0.3rem}p.svelte-nx1y5b{text-align:center;color:var(--grey-four)}.text-container.svelte-nx1y5b{display:flex;align-items:center;flex-direction:column;margin-bottom:2rem;background-color:var(--accent-color);padding:2.5rem 1.75rem;border-radius:20px}a.svelte-nx1y5b{text-decoration:none;color:var(--grey-four)}a.svelte-nx1y5b::after{padding-left:5px;content:'→';position:absolute;transition:all 0.3s var(--bezier-one)}a.svelte-nx1y5b:hover{text-decoration:underline var(--grey-four)}a.svelte-nx1y5b:hover::after{transform:translateX(5px)}@media screen and (max-width: 767px){.text-container.svelte-nx1y5b{padding:2rem 1.75rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const query = createQuery(["repositories"], queries.repositories);
  $$result.css.add(css);
  return `${validate_component(Head, "Head").$$render(
    $$result,
    {
      title: "Contributors of ReVanced",
      description: "ReVanced is made possible by the community. Check out the people who have contributed to the project and how you can contribute too.",
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://revanced.app/"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contributors",
              item: "https://revanced.app/contributors"
            }
          ]
        }
      ]
    },
    {},
    {}
  )} <main><div class="wrapper"><div class="text-container svelte-nx1y5b" data-svelte-h="svelte-15rca5b"><h2 class="svelte-nx1y5b">Made possible by the community.</h2> <p class="svelte-nx1y5b">Want to show up here? <span><a href="https://github.com/revanced" target="_blank" rel="noreferrer" class="svelte-nx1y5b">Become a contributor</a></span></p></div> <div class="repos svelte-nx1y5b">${validate_component(Query, "Query").$$render($$result, { query }, {}, {
    default: ({ data }) => {
      return `${each(data.repositories, ({ contributors, name: repo }) => {
        return `<div>${validate_component(ContributorSection, "ContributorHost").$$render($$result, { contributors, repo }, {}, {})} </div>`;
      })}`;
    }
  })}</div></div></main> ${validate_component(FooterHost, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
