import { c as create_ssr_component, e as escape, f as each, v as validate_component, d as add_styles, a as subscribe, b as add_attribute, n as noop } from "../../../chunks/ssr.js";
import { b as building } from "../../../chunks/environment.js";
import { r as readable, d as derived } from "../../../chunks/index.js";
import { B as Button, p as page } from "../../../chunks/Button.js";
import { c as createQuery, Q as Query } from "../../../chunks/Query.js";
import { q as queries, D as Dialogue } from "../../../chunks/_layout.js";
import { H as Head } from "../../../chunks/Head.js";
import { coerce, compare } from "semver";
import { F as FooterHost } from "../../../chunks/FooterHost.js";
const css$5 = {
  code: ".menu.svelte-85r3mn{height:calc(100vh - 60px);width:100%;padding:0px 30px 30px 10px;display:flex;flex-direction:column;position:sticky;top:60px;padding-top:calc(6rem - 60px);overflow-y:scroll}.menu.svelte-85r3mn::-webkit-scrollbar-thumb{background-color:transparent}.menu.svelte-85r3mn:hover::-webkit-scrollbar-thumb{background-color:var(--accent-color)}.slot.svelte-85r3mn{margin-top:0.75rem;display:flex;gap:1rem;flex-direction:column;white-space:normal;word-break:break-all}h6.svelte-85r3mn{margin-bottom:1rem;color:var(--accent-color)}@media(max-width: 767px){.menu.svelte-85r3mn{padding:0.75rem;height:unset}h6.svelte-85r3mn,hr.svelte-85r3mn{display:none}}",
  map: null
};
const PackageMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="menu svelte-85r3mn"><h6 class="svelte-85r3mn" data-svelte-h="svelte-1w7d3oj">Packages</h6> <hr class="svelte-85r3mn"> <div class="slot svelte-85r3mn">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
const css$4 = {
  code: ".package.svelte-193cezd{padding:0.75rem 1rem;font-size:0.85rem;font-weight:500;border-radius:100px;cursor:pointer;display:flex;align-items:center;gap:0.6rem;width:100%;user-select:none;transition:background-color 0.4s var(--bezier-one);color:var(--grey-five);transition:color 0.3s var(--bezier-one)}.selected.svelte-193cezd{color:var(--accent-color);transition:color 0.3s var(--bezier-one);background-color:var(--accent-low-opacity)}.package.svelte-193cezd:hover:not(.selected){background-color:var(--grey-six)}.package.svelte-193cezd:not(.selected):hover{color:var(--white)}@media(max-width: 767px){.package.svelte-193cezd{border-radius:0px;font-size:0.9rem;padding:1rem 1rem;width:100%;background-color:transparent;word-break:break-all;overflow:hidden;text-overflow:ellipsis;color:var(--grey-five);border-bottom:1px solid var(--grey-three)}.selected.svelte-193cezd{color:var(--accent-color);background-color:var(--accent-low-opacity)}.package.svelte-193cezd:not(.selected):hover{color:var(--grey-five)}}",
  map: null
};
const Package = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedPkg } = $$props;
  let { name } = $$props;
  let { searchTerm } = $$props;
  if ($$props.selectedPkg === void 0 && $$bindings.selectedPkg && selectedPkg !== void 0)
    $$bindings.selectedPkg(selectedPkg);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.searchTerm === void 0 && $$bindings.searchTerm && searchTerm !== void 0)
    $$bindings.searchTerm(searchTerm);
  $$result.css.add(css$4);
  return ` <div class="${[
    "package svelte-193cezd",
    selectedPkg === name || name === "All packages" && !selectedPkg ? "selected" : ""
  ].join(" ").trim()}">${escape(name)} </div>`;
});
const css$3 = {
  code: "h3.svelte-1cirb5s.svelte-1cirb5s{margin-right:0.5rem;margin-bottom:0.2rem;color:var(--accent-color)}#option-description.svelte-1cirb5s.svelte-1cirb5s{white-space:pre-wrap;word-break:break-all}#option-title.svelte-1cirb5s.svelte-1cirb5s{color:var(--accent-color-two)}.button.svelte-1cirb5s.svelte-1cirb5s{display:flex;align-items:center}.patch-info.svelte-1cirb5s.svelte-1cirb5s{display:flex;justify-content:center;align-items:center;list-style:none;font-size:0.8rem;font-weight:500;color:var(--grey-five);padding:0.25rem 0.5rem;border:1px solid var(--grey-three);border-radius:8px}.patch-info.svelte-1cirb5s.svelte-1cirb5s:hover{background-color:var(--grey-two)}a.svelte-1cirb5s.svelte-1cirb5s{text-decoration:none;color:var(--grey-five)}a.svelte-1cirb5s.svelte-1cirb5s:hover{text-decoration:underline var(--accent-color-two);color:var(--accent-color-two)}.info-container.svelte-1cirb5s.svelte-1cirb5s{display:flex;flex-wrap:wrap;gap:0.25rem;margin:0.3rem 0rem;width:100%;margin-top:0.5rem}.patch-container.svelte-1cirb5s.svelte-1cirb5s{transition:all 0.1s var(--bezier-one);background-color:var(--grey-six);padding:1.25rem;border-radius:12px}.patch-container.svelte-1cirb5s.svelte-1cirb5s:active{filter:brightness(1.15)}.patch-container.svelte-1cirb5s.svelte-1cirb5s:hover{background-color:var(--grey-one)}.title.svelte-1cirb5s.svelte-1cirb5s{display:flex;align-items:center}.things.svelte-1cirb5s.svelte-1cirb5s{display:flex;justify-content:space-between}.expand-arrow.svelte-1cirb5s.svelte-1cirb5s{transition:all 0.2s var(--bezier-one);user-select:none;height:1.5rem}.rotate.svelte-1cirb5s .expand-arrow.svelte-1cirb5s{transform:rotate(180deg)}.expanded.svelte-1cirb5s.svelte-1cirb5s{cursor:pointer}.option.svelte-1cirb5s.svelte-1cirb5s{padding:1rem}.option.svelte-1cirb5s.svelte-1cirb5s:hover{background-color:var(--grey-two)}.option.svelte-1cirb5s+.option.svelte-1cirb5s{border-top:1px solid var(--grey-three)}.options.svelte-1cirb5s.svelte-1cirb5s{border:1px solid var(--grey-three);overflow:hidden;border-radius:8px;margin-top:1rem;display:flex;flex-direction:column}",
  map: null
};
const PatchItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { patch } = $$props;
  let { showAllVersions } = $$props;
  const hasPatchOptions = !!patch.options?.length;
  if ($$props.patch === void 0 && $$bindings.patch && patch !== void 0)
    $$bindings.patch(patch);
  if ($$props.showAllVersions === void 0 && $$bindings.showAllVersions && showAllVersions !== void 0)
    $$bindings.showAllVersions(showAllVersions);
  $$result.css.add(css$3);
  return ` <div class="${[
    "patch-container svelte-1cirb5s",
    (hasPatchOptions ? "expanded" : "") + " "
  ].join(" ").trim()}"><div class="things svelte-1cirb5s"><div class="title svelte-1cirb5s"><h3 class="svelte-1cirb5s">${escape(patch.name)}</h3></div> ${hasPatchOptions ? `<img class="expand-arrow svelte-1cirb5s" src="/icons/expand_more.svg" alt="dropdown">` : ``}</div> ${patch.description ? `<h5>${escape(patch.description)}</h5>` : ``} <ul class="info-container svelte-1cirb5s">${!patch.compatiblePackages?.length ? `<li class="patch-info svelte-1cirb5s" data-svelte-h="svelte-1r2q071">🌎 Universal patch</li>` : `${each(patch.compatiblePackages, (pkg) => {
    return `<li class="patch-info svelte-1cirb5s"><a href="${"https://play.google.com/store/apps/details?id=" + escape(pkg.name, true)}" target="_blank" rel="noreferrer" class="svelte-1cirb5s">📦 ${escape(pkg.name)}</a> </li>`;
  })}`} ${hasPatchOptions ? `<li class="patch-info svelte-1cirb5s" data-svelte-h="svelte-czr53m">⚙️ Patch options</li>` : ``}  ${patch.compatiblePackages?.length && patch.compatiblePackages[0].versions?.length ? `${showAllVersions ? `${each(
    patch.compatiblePackages[0].versions.slice().sort((a, b) => {
      const coercedA = coerce(a);
      const coercedB = coerce(b);
      if (coercedA && coercedB)
        return compare(coercedA, coercedB);
      else if (!coercedA && !coercedB)
        return 0;
      else
        return !coercedA ? 1 : -1;
    }).reverse(),
    (version) => {
      return `<li class="patch-info svelte-1cirb5s">🎯 ${escape(version)} </li>`;
    }
  )}` : `<li class="patch-info svelte-1cirb5s">🎯 ${escape(patch.compatiblePackages[0].versions.slice(-1))}</li>`} ${patch.compatiblePackages[0].versions.length > 1 ? `<li class="button svelte-1cirb5s">${validate_component(Button, "Button").$$render($$result, { type: "text" }, {}, {
    default: () => {
      return `<img class="expand-arrow svelte-1cirb5s" src="/icons/expand_more.svg" alt="dropdown"${add_styles({
        "transform": showAllVersions ? "rotate(90deg)" : "rotate(-90deg)"
      })}>`;
    }
  })}</li>` : ``}` : `<li class="patch-info svelte-1cirb5s" data-svelte-h="svelte-w6ndhn">🎯 Any</li>`}</ul> ${``} </div>`;
});
const css$2 = {
  code: "#search.svelte-1oh45l9{position:absolute;z-index:1;left:16px;top:14px;height:24px}#clear.svelte-1oh45l9{position:absolute;right:16px;top:14px;z-index:1;height:24px;cursor:pointer}.search-container.svelte-1oh45l9{position:relative}input.svelte-1oh45l9{position:relative;display:flex;padding:1rem 3.25rem;width:100%;color:var(--accent-color-two);font-weight:500;font-size:0.92rem;border-radius:100px;border:none;background-color:var(--grey-ten);outline:none;transition:background-color 0.3s var(--bezier-one)}input.svelte-1oh45l9:hover{background-color:var(--grey-three)}input.svelte-1oh45l9:focus::placeholder{color:var(--accent-color)}input.svelte-1oh45l9:focus{background-color:var(--bg-color)}input.svelte-1oh45l9::placeholder{color:var(--grey-five);font-size:0.9rem;font-weight:500;transition:all 0.2s var(--bezier-one)}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { title } = $$props;
  let { searchTerm } = $$props;
  let { searchTermFiltered } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.searchTerm === void 0 && $$bindings.searchTerm && searchTerm !== void 0)
    $$bindings.searchTerm(searchTerm);
  if ($$props.searchTermFiltered === void 0 && $$bindings.searchTermFiltered && searchTermFiltered !== void 0)
    $$bindings.searchTermFiltered(searchTermFiltered);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<div class="search-container svelte-1oh45l9"><img src="../icons/search.svg" id="search" alt="Search" class="svelte-1oh45l9"> ${searchTerm ? `<img src="../icons/close.svg" id="clear" alt="Clear" class="svelte-1oh45l9">` : ``} <input type="text"${add_attribute("placeholder", title, 0)} class="${["svelte-1oh45l9", searchTerm ? "clear" : ""].join(" ").trim()}"${add_attribute("value", searchTerm, 0)}> </div>`;
});
const css$1 = {
  code: "button.svelte-4nmeeh{font-family:var(--font-two);border:none;border:1.5px solid var(--grey-three);background-color:transparent;color:var(--grey-five);height:32px;padding:0 16px;border-radius:8px;font-size:0.85rem;cursor:pointer;display:flex;align-items:center;gap:8px}.selected.svelte-4nmeeh{background-color:var(--accent-low-opacity);color:var(--accent-color)}img.svelte-4nmeeh{height:18px}#dropdown.svelte-4nmeeh{margin-right:-6px}#check.svelte-4nmeeh{margin-left:-6px}",
  map: null
};
const FilterChip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dropdown = false } = $$props;
  let { check = false } = $$props;
  let { selected = false } = $$props;
  if ($$props.dropdown === void 0 && $$bindings.dropdown && dropdown !== void 0)
    $$bindings.dropdown(dropdown);
  if ($$props.check === void 0 && $$bindings.check && check !== void 0)
    $$bindings.check(check);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  $$result.css.add(css$1);
  return `<button class="${["svelte-4nmeeh", selected ? "selected" : ""].join(" ").trim()}">${check ? `<img id="check" src="/icons/check.svg" alt="selected" class="svelte-4nmeeh">` : ``} ${slots.default ? slots.default({}) : ``} ${dropdown ? `<img id="dropdown" src="/icons/expand_more.svg" alt="dropdown" class="svelte-4nmeeh">` : ``} </button>`;
});
const css = {
  code: "main.svelte-15wzwha{display:grid;grid-template-columns:300px 3fr;width:min(90%, 80rem);margin-inline:auto;gap:1.5rem}.search.svelte-15wzwha{padding-top:5rem;padding-bottom:1.25rem;background-color:var(--grey-seven)}.search-contain.svelte-15wzwha{width:min(90%, 80rem);margin-inline:auto}.patches-container.svelte-15wzwha{overflow:hidden;border-radius:20px;margin-top:1.5rem;display:flex;flex-direction:column;gap:0.5rem;width:100%;position:sticky;z-index:1;min-height:calc(100vh - 6rem);margin-bottom:3rem}.filter-chips.svelte-15wzwha{display:none}.mobile-packages.svelte-15wzwha{margin-bottom:-1px;overflow:hidden;border-radius:12px;border:1px solid var(--grey-three)}@media(min-width: 768px){.mobile-packages-Dialogue.svelte-15wzwha{display:none}}@media(max-width: 767px){main.svelte-15wzwha{grid-template-columns:none;flex-direction:column;gap:0}aside.svelte-15wzwha{display:none}.search.svelte-15wzwha{padding-top:4.5rem}.patches-container.svelte-15wzwha{margin-top:1rem;margin-bottom:1.5rem;gap:0.75rem}.filter-chips.svelte-15wzwha{display:flex;flex-wrap:wrap;margin-top:1rem;gap:0.75rem;padding-bottom:0rem}}",
  map: null
};
function checkCompatibility(patch, pkg) {
  if (pkg === "") {
    return false;
  }
  return !!patch.compatiblePackages?.find((compat) => compat.name === pkg);
}
function searchString(str, term, filter2) {
  return str?.toLowerCase().replace(filter2, "").includes(term);
}
function filter(patches, pkg, search) {
  if (search === void 0 && pkg === "") {
    return patches;
  }
  return patches.filter((patch) => {
    if (pkg && !checkCompatibility(patch, pkg)) {
      return false;
    }
    if (search !== void 0) {
      return searchString(patch.description, search, /\s/g) || searchString(patch.name, search, /\s/g) || patch.compatiblePackages?.find((x) => searchString(x.name, search, /\./g));
    }
    return true;
  });
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedPkg;
  let $searchParams, $$unsubscribe_searchParams = noop, $$subscribe_searchParams = () => ($$unsubscribe_searchParams(), $$unsubscribe_searchParams = subscribe(searchParams, ($$value) => $searchParams = $$value), searchParams);
  const query = createQuery(["patches"], queries.patches);
  let searchParams;
  if (building) {
    $$subscribe_searchParams(searchParams = readable(new URLSearchParams()));
  } else {
    $$subscribe_searchParams(searchParams = derived(page, ($page) => $page.url.searchParams));
  }
  let searchTerm = $searchParams.get("s");
  let searchTermFiltered = searchTerm?.replace(/\./g, "").replace(/\s/g, "").replace(/-/g, "").replace(/_/g, "").toLowerCase();
  let mobilePackages = false;
  let showAllVersions = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selectedPkg = $searchParams.get("pkg");
    $$rendered = `${validate_component(Head, "Head").$$render(
      $$result,
      {
        title: "Patches for ReVanced",
        description: "Browse our rich collection of patches for ReVanced you can use to patch your favourite apps.",
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
                name: "Patches",
                item: "https://revanced.app/patches"
              }
            ]
          }
        ]
      },
      {},
      {}
    )} <div class="search svelte-15wzwha"><div class="search-contain svelte-15wzwha">  ${validate_component(Search, "Search").$$render(
      $$result,
      {
        title: "Search for patches",
        searchTerm,
        searchTermFiltered
      },
      {
        searchTerm: ($$value) => {
          searchTerm = $$value;
          $$settled = false;
        },
        searchTermFiltered: ($$value) => {
          searchTermFiltered = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <main class="svelte-15wzwha"><div class="filter-chips svelte-15wzwha">${validate_component(FilterChip, "FilterChip").$$render($$result, { selected: !!selectedPkg, dropdown: true }, {}, {
      default: () => {
        return `${escape(selectedPkg || "Packages")}`;
      }
    })} </div> ${validate_component(Query, "Query").$$render($$result, { query }, {}, {
      default: ({ data }) => {
        return `<div class="mobile-packages-Dialogue svelte-15wzwha">${validate_component(Dialogue, "Dialogue").$$render(
          $$result,
          {
            fullscreen: true,
            modalOpen: mobilePackages
          },
          {
            modalOpen: ($$value) => {
              mobilePackages = $$value;
              $$settled = false;
            }
          },
          {
            title: () => {
              return `Packages`;
            },
            default: () => {
              return `<div class="mobile-packages svelte-15wzwha"><span>${validate_component(Package, "Package").$$render(
                $$result,
                {
                  selectedPkg,
                  name: "All packages",
                  searchTerm
                },
                {
                  searchTerm: ($$value) => {
                    searchTerm = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</span> ${each(data.packages, (pkg) => {
                return `<span>${validate_component(Package, "Package").$$render(
                  $$result,
                  { selectedPkg, name: pkg, searchTerm },
                  {
                    searchTerm: ($$value) => {
                      searchTerm = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} </span>`;
              })}</div>`;
            }
          }
        )}</div> <aside class="svelte-15wzwha">${validate_component(PackageMenu, "PackageMenu").$$render($$result, {}, {}, {
          default: () => {
            return `<span class="packages">${validate_component(Package, "Package").$$render(
              $$result,
              {
                selectedPkg,
                name: "All packages",
                searchTerm
              },
              {
                searchTerm: ($$value) => {
                  searchTerm = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${each(data.packages, (pkg) => {
              return `${validate_component(Package, "Package").$$render(
                $$result,
                { selectedPkg, name: pkg, searchTerm },
                {
                  searchTerm: ($$value) => {
                    searchTerm = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            })}</span>`;
          }
        })}</aside> <div class="patches-container svelte-15wzwha">${each(filter(data.patches, selectedPkg || "", searchTermFiltered), (patch) => {
          return ` <div>${validate_component(PatchItem, "PatchItem").$$render(
            $$result,
            { patch, showAllVersions },
            {
              showAllVersions: ($$value) => {
                showAllVersions = $$value;
                $$settled = false;
              }
            },
            {}
          )} </div>`;
        })}</div>`;
      }
    })}</main> ${validate_component(FooterHost, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_searchParams();
  return $$rendered;
});
export {
  Page as default
};
