import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../chunks/ssr.js";
import { P as Picture } from "../../chunks/Picture.js";
import { B as Button } from "../../chunks/Button.js";
import { q as queries } from "../../chunks/_layout.js";
import { c as createQuery, Q as Query } from "../../chunks/Query.js";
import { H as Head } from "../../chunks/Head.js";
const sources = {
  avif: "/_app/immutable/assets/manager.CQWjAKnQ.avif 1233w, /_app/immutable/assets/manager.BNT2ogxf.avif 822w, /_app/immutable/assets/manager.Bp0ieUo7.avif 411w",
  webp: "/_app/immutable/assets/manager.D0ikfiDA.webp 1233w, /_app/immutable/assets/manager.Dp2yoWv1.webp 822w, /_app/immutable/assets/manager.3pcZTM4Z.webp 411w",
  png: "/_app/immutable/assets/manager.Dex2kVpp.png 1233w, /_app/immutable/assets/manager.CrqhYuk6.png 822w, /_app/immutable/assets/manager.LGUSE7ui.png 411w"
};
const img = {
  src: "/_app/immutable/assets/manager.Dex2kVpp.png",
  w: 1233,
  h: 2621
};
const manager_screenshot = {
  sources,
  img
};
const css$5 = {
  code: ".hero-img.svelte-g4y19i img{height:100%;border-radius:1.75rem}.hero-img.svelte-g4y19i{overflow:hidden;height:70vh;max-height:70rem;z-index:-1;width:auto;float:right;padding:0.5rem 0.5rem;border-radius:1.75rem;background-color:var(--grey-six);user-select:none}@media(max-width: 1700px){.hero-img.svelte-g4y19i{position:fixed;height:100vh;top:115px;right:6rem}}",
  map: null
};
const HeroImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="hero-img svelte-g4y19i">${validate_component(Picture, "Picture").$$render(
    $$result,
    {
      data: manager_screenshot,
      alt: "Screenshot of ReVanced Manager"
    },
    {},
    {}
  )} </div>`;
});
const css$4 = {
  code: "h1.svelte-7irm2g{color:var(--white);margin-bottom:1.5rem}p.svelte-7irm2g{margin-bottom:2rem}.hero.svelte-7irm2g{padding-bottom:9rem}.hero-text.svelte-7irm2g{align-items:center}.hero-buttons.svelte-7irm2g{display:flex;user-select:none;gap:1rem}span.svelte-7irm2g{color:var(--accent-color)}@media(max-width: 767px){.hero.svelte-7irm2g{padding-bottom:0}br.svelte-7irm2g{content:' '}}@media screen and (max-width: 450px){.hero-buttons.svelte-7irm2g{flex-direction:column}}",
  map: null
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="hero svelte-7irm2g"><div class="hero-text svelte-7irm2g"><h1 class="svelte-7irm2g" data-svelte-h="svelte-a0qsji">Continuing the <br class="svelte-7irm2g">legacy of <span class="svelte-7irm2g">Vanced.</span></h1> <p class="svelte-7irm2g" data-svelte-h="svelte-1prmagh">Customize your mobile experience through ReVanced <br class="svelte-7irm2g"> by applying patches to your applications.</p> <div class="hero-buttons svelte-7irm2g">${validate_component(Button, "Button").$$render(
    $$result,
    {
      icon: "download",
      type: "filled",
      href: "download"
    },
    {},
    {
      default: () => {
        return `Download`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      icon: "docs",
      type: "tonal",
      href: "patches"
    },
    {},
    {
      default: () => {
        return `View patches`;
      }
    }
  )}</div></div> </section>`;
});
const css$3 = {
  code: "div.svelte-14h1hux.svelte-14h1hux{border:0;width:60px;height:60px;padding:14px;cursor:pointer;border-radius:200px;transition:transform 0.4s var(--bezier-one);background-color:var(--grey-two);color:var(--white);user-select:none}div.svelte-14h1hux.svelte-14h1hux{display:flex;justify-content:center}img.svelte-14h1hux.svelte-14h1hux{transition:filter 0.4s var(--bezier-one);width:30px}div.svelte-14h1hux.svelte-14h1hux:hover{transform:translateY(-5%)}div.svelte-14h1hux:hover img.svelte-14h1hux{filter:brightness(1.2)}",
  map: null
};
const SocialButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { social = "" } = $$props;
  let { data } = $$props;
  if ($$props.social === void 0 && $$bindings.social && social !== void 0)
    $$bindings.social(social);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$3);
  return `<a${add_attribute("href", data.find((jsonSocial) => jsonSocial.name.toLowerCase() === social.toLowerCase())?.url, 0)} rel="noreferrer" target="_blank"><div class="svelte-14h1hux"><img src="${"socials/" + escape(social, true) + ".svg"}"${add_attribute("alt", social, 0)} class="svelte-14h1hux"></div> </a>`;
});
const css$2 = {
  code: ".social-host.svelte-16asamr{width:min(87%, 100rem);padding:0 max(6.5%, calc(50vw - 50rem));align-items:center;user-select:none;position:absolute;display:flex;bottom:2rem;gap:1rem;left:0}@media screen and (max-width: 767px){.social-host.svelte-16asamr{left:0;width:100%;display:flex;justify-content:center}}",
  map: null
};
const SocialHost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const query = createQuery(["socials"], queries.socials);
  $$result.css.add(css$2);
  return `<div class="social-host svelte-16asamr">${validate_component(Query, "Query").$$render($$result, { query }, {}, {
    default: ({ data }) => {
      return `${data ? `${validate_component(SocialButton, "SocialButton").$$render($$result, { social: "github", data: data.socials }, {}, {})} ${validate_component(SocialButton, "SocialButton").$$render($$result, { social: "discord", data: data.socials }, {}, {})} ${validate_component(SocialButton, "SocialButton").$$render($$result, { social: "reddit", data: data.socials }, {}, {})} ${validate_component(SocialButton, "SocialButton").$$render($$result, { social: "telegram", data: data.socials }, {}, {})}` : ``}`;
    }
  })} </div>`;
});
const css$1 = {
  code: "svg.svelte-1bu5xj2{position:fixed;z-index:-999;bottom:0;height:35vh;width:100%}.wave.svelte-1bu5xj2{animation:svelte-1bu5xj2-wave-anim 40s;animation-timing-function:linear;animation-iteration-count:infinite;fill:var(--accent-color)}@keyframes svelte-1bu5xj2-wave-anim{0%{d:path(\n				'M0 500C0 500 0 250 0 250 176.5333 300.1333 353.0667 350.2667 496 325 638.9333 299.7333 748.2667 199.0667 900 174 1051.7333 148.9333 1245.8667 199.4667 1440 250 1440 250 1440 500 1440 500Z'\n			)}25%{d:path(\n				'M0 500C0 500 0 250 0 250 154.1333 219.2 308.2667 188.4 449 209 589.7333 229.6 717.0667 301.6 880 317 1042.9333 332.4 1241.4667 291.2 1440 250 1440 250 1440 500 1440 500Z'\n			)}50%{d:path(\n				'M0 500C0 500 0 250 0 250 132.8 242.9333 265.6 235.8667 414 246 562.4 256.1333 726.4 283.4667 900 287 1073.6 290.5333 1256.8 270.2667 1440 250 1440 250 1440 500 1440 500Z'\n			)}75%{d:path(\n				'M0 500C0 500 0 250 0 250 151.3333 206.6667 302.6667 163.3333 472 176 641.3333 188.6667 828.6667 257.3333 993 279 1157.3333 300.6667 1298.6667 275.3333 1440 250 1440 250 1440 500 1440 500Z'\n			)}100%{d:path(\n				'M0 500C0 500 0 250 0 250 176.5333 300.1333 353.0667 350.2667 496 325 638.9333 299.7333 748.2667 199.0667 900 174 1051.7333 148.9333 1245.8667 199.4667 1440 250 1440 250 1440 500 1440 500Z'\n			)}}",
  map: null
};
const Wave = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="svelte-1bu5xj2"><path class="wave svelte-1bu5xj2"></path></svg>`;
});
const css = {
  code: ".wrap.svelte-qxjp9z{margin-inline:auto;width:min(87%, 100rem);margin-top:7rem}.wrappezoid.svelte-qxjp9z{height:calc(100vh - 120px);display:flex;flex-direction:row;justify-content:center;gap:22rem;align-items:center}@media(max-width: 1700px){.wrappezoid.svelte-qxjp9z{justify-content:space-between}}@media(max-width: 1052px){#heroimg.svelte-qxjp9z{display:none}}@media(max-width: 767px){.wrappezoid.svelte-qxjp9z{justify-content:center;height:calc(65vh)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Head, "Head").$$render(
    $$result,
    {
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          url: "https://revanced.app/",
          logo: "https://revanced.app/logo.png"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://revanced.app/"
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is ReVanced?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ReVanced is an <b>open-source patcher</b> for <b>Android apps</b>. With ReVanced we <b>continue the legacy of Vanced</b>."
              }
            },
            {
              "@type": "Question",
              name: "How to get ReVanced?",
              acceptedAnswer: {
                "@type": "Answer",
                text: 'You can follow <a href="https://github.com/revanced/revanced-manager/tree/main/docs">ReVanced Manager documentation</a> to use <b>ReVanced Manager</b> or the <a href="https://github.com/revanced/revanced-cli/tree/main/docs">ReVanced CLI documentation</a> to use <b>ReVanced CLI</b>.'
              }
            },
            {
              "@type": "Question",
              name: "How does it work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ReVanced uses a technique called <b>patching</b>. It patches <b>your choice of an app</b> and adds <b>new features</b> to it. Thanks to the <b>modularity of ReVanced</b>, you can choose <b>any combination of features you want</b> to use."
              }
            },
            {
              "@type": "Question",
              name: "Does ReVanced support non-rooted devices?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "<b>Yes</b>! ReVanced supports <b>non-root and rooted devices</b>."
              }
            },
            {
              "@type": "Question",
              name: "Is ReVanced affiliated with Vanced?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ReVanced is <b>not affiliated</b> with Vanced."
              }
            },
            {
              "@type": "Question",
              name: "How can I help?",
              acceptedAnswer: {
                "@type": "Answer",
                text: 'Since we are an <b>open-source community</b> and depend on outside help, you can always check out our <a href="https://github.com/revanced">GitHub repositories</a> and <b>contribute to ReVanced</b> by creating an issue or pull requests.'
              }
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ReVanced Manager",
          operatingSystem: "ANDROID",
          applicationCategory: "UtilitiesApplication",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.0",
            ratingCount: "100"
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ReVanced CLI",
          operatingSystem: "All",
          applicationCategory: "UtilitiesApplication",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.0",
            ratingCount: "30"
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          }
        }
      ]
    },
    {},
    {}
  )} <main><div class="wrap svelte-qxjp9z"><div class="wrappezoid svelte-qxjp9z">${validate_component(HeroSection, "Home").$$render($$result, {}, {}, {})} <div id="heroimg" class="svelte-qxjp9z">${validate_component(HeroImage, "HeroImage").$$render($$result, {}, {}, {})}</div></div></div> ${validate_component(SocialHost, "SocialHost").$$render($$result, {}, {}, {})}</main> ${validate_component(Wave, "Wave").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
