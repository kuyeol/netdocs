import { s as setContext, g as getContext, c as create_ssr_component, o as onDestroy, a as subscribe, b as add_attribute, e as escape, d as add_styles, h as compute_slots, v as validate_component } from "./ssr.js";
import { B as BROWSER, d as derived, w as writable } from "./index.js";
import { p as page, n as navigating, B as Button } from "./Button.js";
import { QueryClient } from "@tanstack/query-core";
const browser = BROWSER;
const _contextKey = "$$_queryClient";
const getQueryClientContext = () => {
  const client = getContext(_contextKey);
  if (!client) {
    throw new Error("No QueryClient was found in Svelte context. Did you forget to wrap your component with QueryClientProvider?");
  }
  return client;
};
const setQueryClientContext = (client) => {
  setContext(_contextKey, client);
};
function useQueryClient() {
  const queryClient = getQueryClientContext();
  return queryClient;
}
const QueryClientProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { client = new QueryClient() } = $$props;
  setQueryClientContext(client);
  onDestroy(() => {
    client.unmount();
  });
  if ($$props.client === void 0 && $$bindings.client && client !== void 0)
    $$bindings.client(client);
  return `${slots.default ? slots.default({}) : ``}`;
});
const RV_API_URL = "https://api.revanced.app";
const default_base_url = RV_API_URL;
function api_base_url() {
  return default_base_url;
}
async function get_json(endpoint) {
  const url = `${api_base_url()}/${endpoint}`;
  return await fetch(url).then((r) => r.json());
}
async function repositories() {
  const json = await get_json("contributors");
  return { repositories: json.repositories };
}
async function manager() {
  const json = await get_json("v2/revanced-manager/releases/latest");
  console.log(json.release.assets[0].browser_download_url);
  return { metadata: json.release.metadata, assets: json.release.assets };
}
async function patches() {
  const json = await get_json("v2/patches/latest");
  const packagesWithCount = {};
  for (let i = 0; i < json.patches.length; i++) {
    json.patches[i].compatiblePackages?.forEach((pkg) => {
      packagesWithCount[pkg.name] = (packagesWithCount[pkg.name] || 0) + 1;
    });
  }
  const packages = Object.keys(packagesWithCount);
  packages.sort((a, b) => packagesWithCount[b] - packagesWithCount[a]);
  return { patches: json.patches, packages };
}
async function team() {
  const json = await get_json("v2/team/members");
  return { members: json.members };
}
async function info() {
  const json = await get_json("v2/info");
  return { info: json.info };
}
async function donate() {
  const json = await get_json("v2/donations");
  return { wallets: json.donations.wallets, platforms: json.donations.links };
}
async function socials() {
  const json = await get_json("v2/socials");
  return { socials: json.socials };
}
const staleTime = 5 * 60 * 1e3;
const queries = {
  manager: {
    queryKey: ["manager"],
    queryFn: manager,
    staleTime
  },
  patches: {
    queryKey: ["patches"],
    queryFn: patches,
    staleTime
  },
  repositories: {
    queryKey: ["repositories"],
    queryFn: repositories,
    staleTime
  },
  team: {
    queryKey: ["team"],
    queryFn: team,
    staleTime
  },
  info: {
    queryKey: ["info"],
    queryFn: info,
    staleTime
  },
  donate: {
    queryKey: ["donate"],
    queryFn: donate,
    staleTime
  },
  socials: {
    queryKey: ["socials"],
    queryFn: socials,
    staleTime
  }
};
function makeStore() {
  if (typeof location === "undefined") {
    return derived(page, ($page) => {
      return { navigating: false, target_url: $page.url };
    });
  } else {
    let current = new URL(location.href);
    return derived(navigating, ($nav) => {
      let navigating2 = false;
      if ($nav != null && $nav.to != null) {
        current = $nav.to.url;
        navigating2 = true;
      }
      return { navigating: navigating2, target_url: current };
    });
  }
}
const RouterEvents = makeStore();
const css$3 = {
  code: "li.svelte-lzwye.svelte-lzwye{list-style:none;position:relative;transition-timing-function:var(--bezier-one);transition-duration:0.25s;border-radius:10px}a.svelte-lzwye.svelte-lzwye{text-decoration:none;user-select:none;border-radius:10px;display:flex;align-items:center;justify-content:center;padding:10px 16px}span.svelte-lzwye.svelte-lzwye{font-weight:400;font-size:0.9rem;letter-spacing:0.02rem;color:var(--grey-five)}li.svelte-lzwye.svelte-lzwye:hover{color:var(--white);background-color:var(--grey-one)}li.selected.svelte-lzwye.svelte-lzwye{background-color:var(--accent-low-opacity);color:var(--accent-color)}li.selected.svelte-lzwye span.svelte-lzwye{color:var(--accent-color)}@media(max-width: 767px){li.svelte-lzwye.svelte-lzwye{border-radius:100px}a.svelte-lzwye.svelte-lzwye{padding:0.75rem 1.25rem;justify-content:left}span.svelte-lzwye.svelte-lzwye{font-size:1rem;font-weight:500}}",
  map: null
};
const NavButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $RouterEvents, $$unsubscribe_RouterEvents;
  $$unsubscribe_RouterEvents = subscribe(RouterEvents, (value) => $RouterEvents = value);
  useQueryClient();
  let { href } = $$props;
  let { queryKey = null } = $$props;
  let { label } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.queryKey === void 0 && $$bindings.queryKey && queryKey !== void 0)
    $$bindings.queryKey(queryKey);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$3);
  $$unsubscribe_RouterEvents();
  return `<li class="${[
    "svelte-lzwye",
    href === "/" + $RouterEvents.target_url.pathname.split("/")[1] ? "selected" : ""
  ].join(" ").trim()}"><a data-sveltekit-preload-data${add_attribute("href", href, 0)}${add_attribute("aria-label", label, 0)} class="svelte-lzwye"> <span class="svelte-lzwye">${slots.default ? slots.default({}) : ``}</span></a> </li>`;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { viewBoxHeight } = $$props;
  let { viewBoxWidth = viewBoxHeight } = $$props;
  let { svgHeight } = $$props;
  let { svgWidth = svgHeight } = $$props;
  if ($$props.viewBoxHeight === void 0 && $$bindings.viewBoxHeight && viewBoxHeight !== void 0)
    $$bindings.viewBoxHeight(viewBoxHeight);
  if ($$props.viewBoxWidth === void 0 && $$bindings.viewBoxWidth && viewBoxWidth !== void 0)
    $$bindings.viewBoxWidth(viewBoxWidth);
  if ($$props.svgHeight === void 0 && $$bindings.svgHeight && svgHeight !== void 0)
    $$bindings.svgHeight(svgHeight);
  if ($$props.svgWidth === void 0 && $$bindings.svgWidth && svgWidth !== void 0)
    $$bindings.svgWidth(svgWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="${"0 0 " + escape(viewBoxHeight, true) + " " + escape(viewBoxWidth, true)}"${add_styles({
    "height": svgHeight + "px",
    "width": svgWidth + "px"
  })}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const css$2 = {
  code: ".overlay.svelte-fnvau2.svelte-fnvau2{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:999}.top.svelte-fnvau2.svelte-fnvau2{display:flex;flex-direction:column;align-items:center;gap:1rem}.title.svelte-fnvau2.svelte-fnvau2{display:flex;align-items:center;gap:1rem;width:100%;background-color:var(--grey-six)}.buttons.svelte-fnvau2.svelte-fnvau2{display:flex;gap:2rem;justify-content:flex-end;width:100%}#back-button.svelte-fnvau2.svelte-fnvau2{cursor:pointer}.hasIcon.svelte-fnvau2.svelte-fnvau2{flex-direction:column}.modal.svelte-fnvau2.svelte-fnvau2{position:fixed;width:min(85%, 425px);max-height:75%;overflow-y:scroll;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:26px;background-color:var(--grey-six);display:flex;gap:5%;white-space:normal;display:flex;flex-direction:column;gap:2px;z-index:1001;padding:32px;box-shadow:0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n			0px 1px 10px 0px rgba(0, 0, 0, 0.12),\n			0px 2px 4px -1px rgba(0, 0, 0, 0.2);scrollbar-width:none;-ms-overflow-style:none}button.svelte-fnvau2.svelte-fnvau2{padding:0;margin:0;border:none;background-color:transparent;display:flex;align-items:center}#back.svelte-fnvau2.svelte-fnvau2{height:24px}.fullscreen.svelte-fnvau2.svelte-fnvau2{padding:0;max-height:100%;width:100%;border-radius:0}.fullscreen.svelte-fnvau2 .slot.svelte-fnvau2{padding:0 32px 32px}.fullscreen.svelte-fnvau2 .title.svelte-fnvau2{justify-content:flex-start;position:sticky;padding:32px;padding-bottom:0.75rem;top:0;left:0}.fullscreen.scrolled.svelte-fnvau2 .title.svelte-fnvau2{border-bottom:1px solid var(--grey-three)}.slot.svelte-fnvau2.svelte-fnvau2{display:flex;flex-direction:column;align-content:center;width:100%}.modal.svelte-fnvau2.svelte-fnvau2::-webkit-scrollbar{display:none}",
  map: null
};
const Dialogue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { modalOpen = false } = $$props;
  let { fullscreen = false } = $$props;
  let { notDismissible = false } = $$props;
  let element;
  if ($$props.modalOpen === void 0 && $$bindings.modalOpen && modalOpen !== void 0)
    $$bindings.modalOpen(modalOpen);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.notDismissible === void 0 && $$bindings.notDismissible && notDismissible !== void 0)
    $$bindings.notDismissible(notDismissible);
  $$result.css.add(css$2);
  return `${modalOpen ? `<div class="overlay svelte-fnvau2"></div> <div class="${[
    "modal svelte-fnvau2",
    (fullscreen ? "fullscreen" : "") + " "
  ].join(" ").trim()}" role="dialog" aria-modal="true"${add_attribute("this", element, 0)}><div class="top svelte-fnvau2"><div class="${["title svelte-fnvau2", $$slots.icon ? "hasIcon" : ""].join(" ").trim()}">${fullscreen ? `<button id="back-button" class="svelte-fnvau2" data-svelte-h="svelte-1mamcxo"><img src="../icons/back.svg" id="back" alt="back" class="svelte-fnvau2"></button>` : ``} ${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : ``} ${$$slots.title ? `<h3>${slots.title ? slots.title({}) : ``}</h3>` : ``}</div> ${$$slots.description ? `<p>${slots.description ? slots.description({}) : ``}</p>` : ``} <div class="slot svelte-fnvau2">${slots.default ? slots.default({}) : ``}</div> ${$$slots.buttons ? `<div class="buttons svelte-fnvau2">${slots.buttons ? slots.buttons({}) : ``}</div>` : ``}</div></div>` : ``}`;
});
const css$1 = {
  code: "#logo.svelte-1rjj6gz.svelte-1rjj6gz{padding:0.5rem}path.svelte-1rjj6gz.svelte-1rjj6gz{fill:var(--grey-five)}button.svelte-1rjj6gz:hover path.svelte-1rjj6gz{fill:var(--accent-color-two)}button.svelte-1rjj6gz.svelte-1rjj6gz{background-color:transparent;border:none;cursor:pointer;display:flex;justify-content:center;align-items:center}.input-wrapper.svelte-1rjj6gz.svelte-1rjj6gz{margin-bottom:0.75rem;display:flex;justify-content:space-between;position:relative}input.svelte-1rjj6gz.svelte-1rjj6gz{width:100%;position:relative;padding-right:3rem;margin-top:1rem}#button-reset.svelte-1rjj6gz.svelte-1rjj6gz{position:absolute;right:12px;top:30px}nav.svelte-1rjj6gz.svelte-1rjj6gz{position:fixed;top:0;display:flex;gap:2rem;justify-content:space-between;align-items:center;padding:1rem 2rem;z-index:666;height:70px;background-color:var(--grey-seven);width:100%}#main-navigation.svelte-1rjj6gz.svelte-1rjj6gz,#secondary-navigation.svelte-1rjj6gz.svelte-1rjj6gz{align-items:center;display:flex;gap:2rem}a.svelte-1rjj6gz.svelte-1rjj6gz{display:flex}img.svelte-1rjj6gz.svelte-1rjj6gz{height:22px}.nav-buttons.svelte-1rjj6gz.svelte-1rjj6gz{display:flex;gap:1rem}.scrolled.svelte-1rjj6gz.svelte-1rjj6gz{box-shadow:var(--drop-shadow-one)}.overlay.svelte-1rjj6gz.svelte-1rjj6gz{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:88}.nav-wrapper.svelte-1rjj6gz.svelte-1rjj6gz{display:flex;width:100%;justify-content:space-between}@media(min-width: 768px){.nav-wrapper.svelte-1rjj6gz.svelte-1rjj6gz{align-items:center}}@media(max-width: 767px){.nav-wrapper.svelte-1rjj6gz.svelte-1rjj6gz{flex-direction:column;gap:0.5rem;height:100%;margin:0 auto;position:fixed;width:20rem;top:0px;border-radius:0px 24px 24px 0px;left:0px;background-color:var(--grey-seven);padding:1rem;padding-top:6rem;z-index:100}.desktop-only.svelte-1rjj6gz.svelte-1rjj6gz{display:none !important}nav.svelte-1rjj6gz.svelte-1rjj6gz{justify-content:normal}.nav-buttons.svelte-1rjj6gz.svelte-1rjj6gz{flex-direction:column;gap:0.5rem;width:100%}#secondary-navigation.svelte-1rjj6gz.svelte-1rjj6gz{z-index:100;padding:16px}}@media screen and (min-width: 768px){.mobile-only.svelte-1rjj6gz.svelte-1rjj6gz{display:none !important}}.menu-btn.svelte-1rjj6gz.svelte-1rjj6gz{user-select:none;position:relative;display:flex;height:50px;z-index:999;justify-content:center;align-items:center;cursor:pointer}.menu-btn__burger.svelte-1rjj6gz.svelte-1rjj6gz{display:flex;flex-wrap:wrap}.menu-btn__burger.svelte-1rjj6gz.svelte-1rjj6gz,.menu-btn__burger.svelte-1rjj6gz.svelte-1rjj6gz::before,.menu-btn__burger.svelte-1rjj6gz.svelte-1rjj6gz::after{width:24px;height:2px;background:var(--grey-five);transition:all 0.3s var(--bezier-one)}.menu-btn__burger.svelte-1rjj6gz.svelte-1rjj6gz::before,.menu-btn__burger.svelte-1rjj6gz.svelte-1rjj6gz::after{content:'';position:absolute}.menu-btn__burger.svelte-1rjj6gz.svelte-1rjj6gz::before{transform:translateY(-6.5px)}.menu-btn__burger.svelte-1rjj6gz.svelte-1rjj6gz::after{transform:translateY(6.5px)}.menu-btn.open.svelte-1rjj6gz .menu-btn__burger.svelte-1rjj6gz{transform:translateX(-10px);background:transparent;box-shadow:none}.menu-btn.open.svelte-1rjj6gz .menu-btn__burger.svelte-1rjj6gz::before{transform:rotate(45deg) translate(10px, -10px)}.menu-btn.open.svelte-1rjj6gz .menu-btn__burger.svelte-1rjj6gz::after{transform:rotate(-45deg) translate(10px, 10px)}.skiptab-btn.svelte-1rjj6gz.svelte-1rjj6gz{position:fixed;left:-300px;border-radius:100px;text-decoration:none;background-color:var(--accent-color);z-index:10;color:var(--grey-four);font-weight:600;font-size:0.95rem;padding:16px 24px}.skiptab-btn.svelte-1rjj6gz.svelte-1rjj6gz:focus{left:12px}",
  map: null
};
const NavHost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  useQueryClient();
  let url = api_base_url();
  let modalOpen = false;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` <nav class="${["svelte-1rjj6gz", ""].join(" ").trim()}"><a class="menu-btn skiptab-btn svelte-1rjj6gz" href="#skiptab" data-svelte-h="svelte-emq17c">Skip navigation</a> <button class="${["menu-btn mobile-only svelte-1rjj6gz", ""].join(" ").trim()}" aria-label="Menu" data-svelte-h="svelte-jyeuui"><span class="menu-btn__burger svelte-1rjj6gz"></span></button> <a href="/" id="logo" class="svelte-1rjj6gz" data-svelte-h="svelte-12epafe"><img src="/logo.svg" alt="ReVanced Logo" class="svelte-1rjj6gz"></a> <div class="${["nav-wrapper svelte-1rjj6gz", "desktop-only"].join(" ").trim()}"><div id="main-navigation" class="svelte-1rjj6gz"><ul class="nav-buttons svelte-1rjj6gz">${validate_component(NavButton, "Navigation").$$render($$result, { href: "/", label: "Home" }, {}, {
      default: () => {
        return `Home`;
      }
    })} ${validate_component(NavButton, "Navigation").$$render(
      $$result,
      {
        queryKey: "manager",
        href: "/download",
        label: "Download"
      },
      {},
      {
        default: () => {
          return `Download`;
        }
      }
    )} ${validate_component(NavButton, "Navigation").$$render(
      $$result,
      {
        queryKey: "patches",
        href: "/patches",
        label: "Patches"
      },
      {},
      {
        default: () => {
          return `Patches`;
        }
      }
    )} ${validate_component(NavButton, "Navigation").$$render(
      $$result,
      {
        queryKey: "repositories",
        href: "/contributors",
        label: "Contributors"
      },
      {},
      {
        default: () => {
          return `Contributors`;
        }
      }
    )} ${validate_component(NavButton, "Navigation").$$render(
      $$result,
      {
        queryKey: ["donate", "team"],
        href: "/donate",
        label: "Donate"
      },
      {},
      {
        default: () => {
          return `Donate`;
        }
      }
    )}</ul></div> <div id="secondary-navigation" class="svelte-1rjj6gz"><button aria-label="Settings" class="svelte-1rjj6gz">${validate_component(Svg, "Svg").$$render($$result, { viewBoxHeight: 24, svgHeight: 20 }, {}, {
      default: () => {
        return `<path d="M 19.1 12.9 C 19.1 12.6 19.2 12.3 19.2 12 C 19.2 11.7 19.2 11.4 19.1 11.1 L 21.1 9.5 C 21.3 9.4 21.3 9.1 21.2 8.9 L 19.3 5.6 C 19.2 5.4 18.9 5.3 18.7 5.4 L 16.3 6.4 C 15.8 6 15.3 5.7 14.7 5.5 L 14.3 3 C 14.3 2.8 14.1 2.6 13.8 2.6 L 10 2.6 C 9.8 2.6 9.6 2.8 9.5 3 L 9.2 5.3 C 8.7 5.6 8.1 5.9 7.6 6.3 L 5.2 5.3 C 5 5.2 4.8 5.3 4.6 5.5 L 2.7 8.9 C 2.6 9.1 2.7 9.3 2.9 9.5 L 4.9 11.1 C 4.9 11.4 4.8 11.7 4.8 12 C 4.8 12.3 4.8 12.6 4.9 12.9 L 2.9 14.5 C 2.7 14.6 2.7 14.9 2.8 15.1 L 4.7 18.4 C 4.8 18.6 5.1 18.7 5.3 18.6 L 7.7 17.6 C 8.2 18 8.7 18.3 9.3 18.5 L 9.7 21 C 9.8 21.2 9.9 21.4 10.2 21.4 L 14 21.4 C 14.2 21.4 14.4 21.2 14.5 21 L 14.9 18.5 C 15.5 18.3 16 17.9 16.5 17.6 L 18.9 18.6 C 19.1 18.7 19.4 18.6 19.5 18.4 L 21.4 15.1 C 21.5 14.9 21.5 14.6 21.3 14.5 L 19.1 12.9 Z M 12 15.6 C 10 15.6 8.4 14 8.4 12 C 8.4 10 10 8.4 12 8.4 C 14 8.4 15.6 10 15.6 12 C 15.6 14 14 15.6 12 15.6 Z" class="svelte-1rjj6gz"></path>`;
      }
    })}</button></div></div> ${``}</nav>  ${validate_component(Dialogue, "Modal").$$render(
      $$result,
      { modalOpen },
      {
        modalOpen: ($$value) => {
          modalOpen = $$value;
          $$settled = false;
        }
      },
      {
        buttons: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              type: "text",
              label: "Clear Cache Button"
            },
            {},
            {
              default: () => {
                return `Clear cache`;
              }
            }
          )} ${validate_component(Button, "Button").$$render($$result, { type: "text", label: "Save Button" }, {}, {
            default: () => {
              return `Save`;
            }
          })} `;
        },
        description: () => {
          return `Configure the API for this website.`;
        },
        title: () => {
          return `Settings`;
        },
        icon: () => {
          return `${validate_component(Svg, "Svg").$$render(
            $$result,
            {
              viewBoxHeight: 24,
              viewBoxWidth: 24,
              svgHeight: 24
            },
            {},
            {
              default: () => {
                return `<rect fill="none" height="24" width="24"></rect> <path d="M19.5,12c0-0.23-0.01-0.45-0.03-0.68l1.86-1.41c0.4-0.3,0.51-0.86,0.26-1.3l-1.87-3.23c-0.25-0.44-0.79-0.62-1.25-0.42 l-2.15,0.91c-0.37-0.26-0.76-0.49-1.17-0.68l-0.29-2.31C14.8,2.38,14.37,2,13.87,2h-3.73C9.63,2,9.2,2.38,9.14,2.88L8.85,5.19 c-0.41,0.19-0.8,0.42-1.17,0.68L5.53,4.96c-0.46-0.2-1-0.02-1.25,0.42L2.41,8.62c-0.25,0.44-0.14,0.99,0.26,1.3l1.86,1.41 C4.51,11.55,4.5,11.77,4.5,12s0.01,0.45,0.03,0.68l-1.86,1.41c-0.4,0.3-0.51,0.86-0.26,1.3l1.87,3.23c0.25,0.44,0.79,0.62,1.25,0.42 l2.15-0.91c0.37,0.26,0.76,0.49,1.17,0.68l0.29,2.31C9.2,21.62,9.63,22,10.13,22h3.73c0.5,0,0.93-0.38,0.99-0.88l0.29-2.31 c0.41-0.19,0.8-0.42,1.17-0.68l2.15,0.91c0.46,0.2,1,0.02,1.25-0.42l1.87-3.23c0.25-0.44,0.14-0.99-0.26-1.3l-1.86-1.41 C19.49,12.45,19.5,12.23,19.5,12z M12.04,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.97,15.5,12.04,15.5z" class="svelte-1rjj6gz"></path>`;
              }
            }
          )} `;
        },
        default: () => {
          return `<div id="settings-content"><div class="input-wrapper svelte-1rjj6gz"><input name="api-url" type="text" class="svelte-1rjj6gz"${add_attribute("value", url, 0)}> <button id="button-reset" aria-label="Reset Button" class="svelte-1rjj6gz">${validate_component(Svg, "Svg").$$render($$result, { viewBoxHeight: 48, svgHeight: 24 }, {}, {
            default: () => {
              return `<path d="M11.2 36.725C14.6667 40.2417 18.8833 42 23.85 42C26.35 42 28.7 41.525 30.9 40.575C33.1 39.625 35.025 38.3333 36.675 36.7C38.325 35.0667 39.625 33.15 40.575 30.95C41.525 28.75 42 26.4 42 23.9C42 21.4 41.525 19.0667 40.575 16.9C39.625 14.7333 38.325 12.8417 36.675 11.225C35.025 9.60833 33.1 8.33333 30.9 7.4C28.7 6.46667 26.35 6 23.85 6C21.1833 6 18.6583 6.58333 16.275 7.75C13.8917 8.91667 11.8333 10.5167 10.1 12.55V7.25H7.1V17.65H17.55V14.65H12.3C13.7667 12.95 15.4917 11.5833 17.475 10.55C19.4583 9.51667 21.5833 9 23.85 9C28.0167 9 31.5833 10.425 34.55 13.275C37.5167 16.125 39 19.6167 39 23.75C39 27.9833 37.5333 31.5833 34.6 34.55C31.6667 37.5167 28.0833 39 23.85 39C19.6833 39 16.1667 37.5333 13.3 34.6C10.4333 31.6667 9 28.1167 9 23.95H6C6 28.95 7.73333 33.2083 11.2 36.725Z" class="svelte-1rjj6gz"></path>`;
            }
          })}</button></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "@keyframes svelte-1lxj5vg-spinner{to{transform:rotate(360deg)}}.spinner.svelte-1lxj5vg{position:fixed;top:50%;left:50%;width:50px;height:50px;transform:translate(-50%, -50%)}.spinner.svelte-1lxj5vg:before{content:'';box-sizing:border-box;position:absolute;width:100%;height:100%;border-radius:50%;border:4.5px solid transparent;border-top-color:var(--accent-color);animation:svelte-1lxj5vg-spinner 0.6s linear infinite}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="spinner svelte-1lxj5vg"></div>`;
});
const isRestoring = writable(false);
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $show_loading_animation, $$unsubscribe_show_loading_animation;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { enabled: browser, cacheTime: staleTime }
    }
  });
  let showConsentModal = false;
  const show_loading_animation = derived(
    RouterEvents,
    ($event, set) => {
      if ($event.navigating) {
        const timeout = setTimeout(() => set(true), 250);
        return () => clearTimeout(timeout);
      } else {
        set(false);
      }
    },
    false
  );
  $$unsubscribe_show_loading_animation = subscribe(show_loading_animation, (value) => $show_loading_animation = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1bmq5dh_START --><script data-svelte-h="svelte-1pbl3u3">allowAnalytics = localStorage.getItem('analytics') === 'true';
		if (allowAnalytics) {
			(function (w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, 'script', 'dataLayer', 'GTM-MQ6K849');
		}<\/script><!-- HEAD_svelte-1bmq5dh_END -->`, ""} ${validate_component(QueryClientProvider, "QueryClientProvider").$$render($$result, { client: queryClient }, {}, {
      default: () => {
        return `${validate_component(NavHost, "NavHost").$$render($$result, {}, {}, {})} ${validate_component(Dialogue, "Dialogue").$$render(
          $$result,
          {
            notDismissible: true,
            modalOpen: showConsentModal
          },
          {
            modalOpen: ($$value) => {
              showConsentModal = $$value;
              $$settled = false;
            }
          },
          {
            buttons: () => {
              return `${validate_component(Button, "Button").$$render($$result, { type: "text" }, {}, {
                default: () => {
                  return `Deny`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, { type: "filled" }, {}, {
                default: () => {
                  return `Allow`;
                }
              })} `;
            },
            description: () => {
              return `We use analytics to improve your experience on this site. By clicking &quot;Allow&quot;, you allow us to
			collect anonymous data about your visit.
		`;
            },
            title: () => {
              return `It&#39;s your choice`;
            }
          }
        )} <div id="skiptab">${$show_loading_animation ? `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}` : `${slots.default ? slots.default({}) : ``}`}</div> `;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_show_loading_animation();
  return $$rendered;
});
export {
  Dialogue as D,
  Layout as L,
  isRestoring as i,
  queries as q,
  useQueryClient as u
};
