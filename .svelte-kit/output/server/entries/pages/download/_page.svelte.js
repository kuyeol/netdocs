import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { q as queries, D as Dialogue } from "../../../chunks/_layout.js";
import { c as createQuery, Q as Query } from "../../../chunks/Query.js";
import { H as Head } from "../../../chunks/Head.js";
import { B as Button } from "../../../chunks/Button.js";
import { F as FooterHost } from "../../../chunks/FooterHost.js";
import { P as Picture } from "../../../chunks/Picture.js";
/* empty css                                                              */
const sources = {
  avif: "/_app/immutable/assets/manager.mcb2h-hC.avif 2880w",
  webp: "/_app/immutable/assets/manager.B8RtvQNA.webp 2880w"
};
const img = {
  src: "/_app/immutable/assets/manager._DvZGXXG.png",
  w: 2880,
  h: 6122
};
const manager_screenshot = {
  sources,
  img
};
const css = {
  code: ".center.svelte-1rqzkwn{display:flex;flex-direction:column;align-items:center}h2.svelte-1rqzkwn{text-align:center;color:var(--white)}p.svelte-1rqzkwn{text-align:center;margin-bottom:1.5rem}.screenshot.svelte-1rqzkwn img{margin-top:2.5rem;margin-bottom:2.5rem;height:50rem;width:auto;padding:0.5rem 0.5rem;border-radius:2rem;background-color:var(--grey-six);user-select:none}.buttons.svelte-1rqzkwn{display:flex;gap:1rem}span.svelte-1rqzkwn{color:var(--accent-color)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const query = createQuery(["manager"], queries.manager);
  let warning;
  let warningDialogue = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Head, "Head").$$render(
      $$result,
      {
        title: "Download ReVanced",
        description: "Download ReVanced Manager to patch your favourite apps, right on your device.",
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
                name: "Download",
                item: "https://revanced.app/download"
              }
            ]
          }
        ]
      },
      {},
      {}
    )} ${validate_component(Dialogue, "Dialogue").$$render(
      $$result,
      { modalOpen: warningDialogue },
      {
        modalOpen: ($$value) => {
          warningDialogue = $$value;
          $$settled = false;
        }
      },
      {
        buttons: () => {
          return `${validate_component(Query, "Query").$$render($$result, { query }, {}, {
            default: ({ data }) => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  type: "text",
                  href: data.assets[0].browser_download_url
                },
                {},
                {
                  default: () => {
                    return `Okay`;
                  }
                }
              )}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { type: "text" }, {}, {
            default: () => {
              return `Cancel`;
            }
          })} `;
        },
        description: () => {
          return `${escape(warning)} Do you still want to download?`;
        },
        title: () => {
          return `Warning`;
        }
      }
    )} <div class="wrapper center svelte-1rqzkwn"><h2 class="svelte-1rqzkwn" data-svelte-h="svelte-tqh5li">ReVanced <span class="svelte-1rqzkwn">Manager</span></h2> <p class="svelte-1rqzkwn" data-svelte-h="svelte-8ek1oc">Patch your favourite apps, right on your device.</p> <div class="buttons svelte-1rqzkwn">${validate_component(Query, "Query").$$render($$result, { query }, {}, {
      default: ({ data }) => {
        return `${`${validate_component(Button, "Button").$$render($$result, { type: "filled", icon: "download" }, {}, {
          default: () => {
            return `${escape(data.metadata.tag_name)}`;
          }
        })}`}`;
      }
    })} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        type: "tonal",
        href: "https://github.com/revanced/revanced-manager",
        target: "_blank"
      },
      {},
      {
        default: () => {
          return `View Source`;
        }
      }
    )}</div> <div class="screenshot svelte-1rqzkwn">${validate_component(Picture, "Picture").$$render(
      $$result,
      {
        data: manager_screenshot,
        alt: "Manager Screenshot"
      },
      {},
      {}
    )}</div></div> ${validate_component(FooterHost, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
