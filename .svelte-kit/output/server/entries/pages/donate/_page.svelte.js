import { c as create_ssr_component, d as add_styles, b as add_attribute, e as escape, v as validate_component, f as each } from "../../../chunks/ssr.js";
import { q as queries, D as Dialogue } from "../../../chunks/_layout.js";
import { c as createQuery, Q as Query } from "../../../chunks/Query.js";
import { H as Head } from "../../../chunks/Head.js";
import { F as FooterHost } from "../../../chunks/FooterHost.js";
import { B as Button } from "../../../chunks/Button.js";
import "qrious/dist/qrious.js";
const css$4 = {
  code: ".snackbar.svelte-13z7f7n{display:flex;box-sizing:border-box;justify-content:space-between;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:1rem;padding-right:0.5rem;height:3rem;gap:1.5rem;align-items:center;border-radius:0.25rem;min-width:12.5rem;max-width:35rem;position:fixed;margin-left:2.25rem;margin-right:2.25rem;z-index:9999;left:0;right:0;bottom:2rem;background-color:var(--white);transition:all 0.4s var(--bezier-one);box-shadow:var(--drop-shadow-one)}.text.svelte-13z7f7n{color:var(--grey-two);font-weight:500;font-size:14px}",
  map: null
};
const Snackbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { dismissTime = 3e3 } = $$props;
  let timeout;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.dismissTime === void 0 && $$bindings.dismissTime && dismissTime !== void 0)
    $$bindings.dismissTime(dismissTime);
  $$result.css.add(css$4);
  {
    if (open) {
      clearTimeout(timeout);
      timeout = setTimeout(() => open = false, dismissTime);
    }
  }
  return `${open ? `<div class="snackbar svelte-13z7f7n"><div class="text svelte-13z7f7n">${slots.text ? slots.text({}) : ``}</div></div>` : ``}`;
});
const css$3 = {
  code: "canvas.svelte-vp3e9d{border-radius:0.5rem;background-color:white;padding:0.25rem}",
  map: null
};
const QRCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { codeValue } = $$props;
  let { squareSize = 150 } = $$props;
  if ($$props.codeValue === void 0 && $$bindings.codeValue && codeValue !== void 0)
    $$bindings.codeValue(codeValue);
  if ($$props.squareSize === void 0 && $$bindings.squareSize && squareSize !== void 0)
    $$bindings.squareSize(squareSize);
  $$result.css.add(css$3);
  return `<canvas id="qrcode" class="svelte-vp3e9d"></canvas>`;
});
const css$2 = {
  code: "#pulsating-image-scale.svelte-1ktvznf.svelte-1ktvznf{user-select:none;cursor:pointer;transition:transform 0.4s ease, filter 0.2s ease}#pulsating-image-scale.svelte-1ktvznf.svelte-1ktvznf:hover{transform:scale(1.05)}#pulsating-image-scale.svelte-1ktvznf.svelte-1ktvznf:active{filter:brightness(1.3);transform:scaleY(0.95) rotate(-5deg)}#pulsating-image-scale.svelte-1ktvznf #pulsating-image-hover.svelte-1ktvznf{height:225px;width:225px;transition:all 0.2s ease}#pulsating-image-scale.svelte-1ktvznf #pulsating-image-hover.svelte-1ktvznf:hover{animation:svelte-1ktvznf-wiggle 1s}@keyframes svelte-1ktvznf-wiggle{0%{transform:rotate(0)}25%{transform:rotate(5deg)}50%{transform:rotate(-5deg)}75%{transform:rotate(5deg)}100%{transform:rotate(0deg)}}#pulsating-image-scale.svelte-1ktvznf #pulsating-image-hover #background.svelte-1ktvznf{pointer-events:none;display:flex;background-repeat:no-repeat;justify-content:center;align-items:center;animation:svelte-1ktvznf-pulse-size 1.2s infinite;will-change:transform;height:100%;width:100%}#pulsating-image-scale.svelte-1ktvznf #pulsating-image-hover #background img.svelte-1ktvznf{height:50%;animation:svelte-1ktvznf-double-pulse-size 1.2s infinite, svelte-1ktvznf-pulse-glow 1.2s infinite;will-change:transform, box-shadow}@keyframes svelte-1ktvznf-double-pulse-size{0%{transform:scale(0.7)}13%{transform:scale(0.8)}30%{transform:scale(0.7)}45%{transform:scale(0.8)}100%{transform:scale(0.7)}}@keyframes svelte-1ktvznf-pulse-glow{30%{filter:drop-shadow(0 0 0rem var(--red-one))}45%{filter:drop-shadow(0 0 0.5rem var(--red-one))}}@keyframes svelte-1ktvznf-pulse-size{0%{transform:scale(0.7)}30%{filter:brightness(1)}39%{filter:brightness(1.2)}32%{transform:scale(0.68)}50%{transform:scale(0.78)}100%{transform:scale(0.7)}}",
  map: null
};
const DonateHeartAnimation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { backgroundImageUrl } = $$props;
  let { foregroundImageUrl } = $$props;
  let { alt } = $$props;
  if ($$props.backgroundImageUrl === void 0 && $$bindings.backgroundImageUrl && backgroundImageUrl !== void 0)
    $$bindings.backgroundImageUrl(backgroundImageUrl);
  if ($$props.foregroundImageUrl === void 0 && $$bindings.foregroundImageUrl && foregroundImageUrl !== void 0)
    $$bindings.foregroundImageUrl(foregroundImageUrl);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css$2);
  return `<div id="pulsating-image-scale" class="svelte-1ktvznf"><div id="pulsating-image-hover" class="svelte-1ktvznf"><div id="background" class="svelte-1ktvznf"${add_styles({
    "background-image": `url(${backgroundImageUrl})`
  })}><img${add_attribute("src", foregroundImageUrl, 0)}${add_attribute("alt", alt, 0)} class="svelte-1ktvznf"></div></div> </div>`;
});
const css$1 = {
  code: ".member.svelte-pa0fqi{width:100%;color:var(--white);border:1px solid var(--grey-three);text-decoration:none;cursor:pointer;padding:1rem;border-radius:12px;display:flex;gap:1rem;transition:0.3s background-color var(--bezier-one)}.member.svelte-pa0fqi:hover{background-color:var(--grey-six)}.member-text.svelte-pa0fqi{display:flex;flex-direction:column;word-break:break-word}img.svelte-pa0fqi{border-radius:50%;height:64px;width:64px;transition:transform 0.4s var(--bezier-one);user-select:none;margin-bottom:1rem}@media screen and (max-width: 768px){img.svelte-pa0fqi{margin-bottom:0;height:48px;width:48px}}",
  map: null
};
const TeamMember = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { member } = $$props;
  let { i } = $$props;
  if ($$props.member === void 0 && $$bindings.member && member !== void 0)
    $$bindings.member(member);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  $$result.css.add(css$1);
  return `<a class="member svelte-pa0fqi"${add_attribute("href", member.html_url, 0)} rel="noreferrer" target="_blank"><img${add_attribute("src", member.avatar_url, 0)} alt="${escape(member.login, true) + "'s profile picture."}" class="svelte-pa0fqi"> <div class="member-text svelte-pa0fqi"><h4>${escape(member.login)}</h4> ${member.bio ? `<h6>${escape(member.bio)}</h6>` : ``}</div> </a>`;
});
function supportsWebP() {
  return document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") === 0;
}
const css = {
  code: "main.svelte-vd1s82.svelte-vd1s82{display:flex;flex-direction:column;margin-top:7rem}main.svelte-vd1s82 section.svelte-vd1s82{display:flex;justify-content:center;align-items:center}@media screen and (max-width: 768px){main.svelte-vd1s82 section.svelte-vd1s82{flex-direction:column-reverse}}h2.svelte-vd1s82.svelte-vd1s82{margin-bottom:0.5rem;color:var(--white)}h3.svelte-vd1s82.svelte-vd1s82{margin-bottom:1.5rem}p.svelte-vd1s82.svelte-vd1s82{margin-bottom:2rem;width:60%}@media screen and (max-width: 1200px){p.svelte-vd1s82.svelte-vd1s82{width:90%}}@media screen and (max-width: 768px){p.svelte-vd1s82.svelte-vd1s82{width:100%}}@media screen and (max-width: 768px){#heart.svelte-vd1s82.svelte-vd1s82{display:none}}.donate-cards.svelte-vd1s82.svelte-vd1s82{display:flex;gap:1rem;margin-bottom:3rem}@media screen and (max-width: 768px){.donate-cards.svelte-vd1s82.svelte-vd1s82{flex-direction:column}}.donate-card.svelte-vd1s82.svelte-vd1s82{text-decoration:none;background-color:var(--grey-ten);border-radius:1.5rem;width:100%;cursor:pointer;text-align:left;border:none;overflow:hidden;transition:0.3s border-radius var(--bezier-one), 0.3s background-color var(--bezier-one)}.donate-card.svelte-vd1s82.svelte-vd1s82:hover{background-color:var(--accent-low-opacity)}.donate-card.svelte-vd1s82.svelte-vd1s82:active{border-radius:2.75rem}.donate-card.svelte-vd1s82 span.svelte-vd1s82{display:block;color:var(--grey-five);font-size:1.05rem;font-weight:500;padding:1.5rem}.donate-card.svelte-vd1s82 div.svelte-vd1s82{height:200px;background-size:cover;background-position:center;max-width:100%}.wallets.svelte-vd1s82.svelte-vd1s82{width:clamp(200px, 75vw, 375px)}.wallets.svelte-vd1s82 #arrow.svelte-vd1s82{height:20px;transform:rotate(90deg)}.wallets.svelte-vd1s82 button.svelte-vd1s82{width:100%;font-size:0.9rem;background-color:transparent;border:none;color:var(--grey-five);cursor:pointer;text-align:left;display:flex;justify-content:space-between;background-color:var(--grey-six);padding:0.75rem 1.25rem;transition:filter 0.4s var(--bezier-one)}.wallets.svelte-vd1s82 button.svelte-vd1s82:hover{filter:brightness(85%)}.wallet-name.svelte-vd1s82.svelte-vd1s82{display:flex;align-items:center;gap:0.5rem}.wallet-name.svelte-vd1s82 img.svelte-vd1s82{height:24px;width:24px}.qr-code-body.svelte-vd1s82.svelte-vd1s82{display:flex;flex-direction:column;align-items:center;gap:1rem;word-break:break-word;text-align:center}.team.svelte-vd1s82.svelte-vd1s82{width:100%;display:grid;grid-template-columns:repeat(auto-fill, minmax(325px, 1fr));justify-content:space-between;align-items:stretch;gap:1rem;margin-bottom:4rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const teamQuery = createQuery(["team"], queries.team);
  const donateQuery = createQuery(["donate"], queries.donate);
  let qrCodeDialogue = false;
  let cryptoDialogue = false;
  let addressSnackbar = false;
  let qrCodeValue = "";
  let qrCodeDialogueName = "";
  const shuffle = (array) => array.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
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
        title: "Donate to ReVanced",
        description: "Donate to ReVanced with a variety of donation methods, including cryptocurrencies in order to allow us to maintain our servers and develop new features.",
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
                item: "https://revanced.app/donate"
              }
            ]
          }
        ]
      },
      {},
      {}
    )} <main class="wrapper svelte-vd1s82"><section class="svelte-vd1s82"><div data-svelte-h="svelte-hvv6cq"><h2 class="svelte-vd1s82">🎉 Support <span style="color: var(--accent-color);">ReVanced</span></h2> <p class="svelte-vd1s82">ReVanced offers a variety of patches, including ad-blocking, custom themes, and innovative
				features. All of which is completely open source and free of charge. Donating will allow
				ReVanced maintain our servers and develop new features.</p></div> <div id="heart" class="svelte-vd1s82">${validate_component(DonateHeartAnimation, "DonateHeartAnimation").$$render(
      $$result,
      {
        backgroundImageUrl: "/revanced-logo-background.svg",
        foregroundImageUrl: "/icons/heart.svg",
        alt: "ReVanced Logo"
      },
      {},
      {}
    )}</div></section> <h3 class="svelte-vd1s82" data-svelte-h="svelte-1utelbz">Donate</h3> ${validate_component(Query, "Query").$$render($$result, { query: donateQuery }, {}, {
      default: ({ data }) => {
        return `<div class="donate-cards svelte-vd1s82">${data.platforms ? `${each(data.platforms, (platform) => {
          return `<a class="donate-card svelte-vd1s82" target="_blank" rel="noreferrer"${add_attribute("href", platform.url, 0)}> <div style="${"background-image: url('/donate/card-images/" + escape(platform.name, true) + "." + escape(supportsWebP() ? "webp" : "png", true) + "'), url('/donate/card-images/fallback.svg');"}" role="img" aria-label="${escape(platform.name, true) + " preview image"}" class="svelte-vd1s82"></div> <span class="svelte-vd1s82">${escape(platform.name)}</span> </a>`;
        })}` : ``} ${data.wallets ? `<button class="donate-card svelte-vd1s82" data-svelte-h="svelte-fx73ty"><div style="${"background-image: url('/donate/card-images/Cryptocurrencies." + escape(supportsWebP() ? "webp" : "png", true) + "'), url('/donate/card-images/fallback.svg');"}" role="img" aria-label="Cryptocurrencies preview image" class="svelte-vd1s82"></div> <span class="svelte-vd1s82">Cryptocurrencies</span></button>` : ``}</div>`;
      }
    })} ${validate_component(Query, "Query").$$render($$result, { query: teamQuery }, {}, {
      default: ({ data }) => {
        return `<h3 class="svelte-vd1s82" data-svelte-h="svelte-1d3f4ut">Meet the team</h3> ${data.members.length > 0 ? `<section class="team svelte-vd1s82"> ${each(shuffle(data.members), (member, i) => {
          return `${validate_component(TeamMember, "TeamMember").$$render($$result, { member, i }, {}, {})}`;
        })}</section>` : ``}`;
      }
    })}</main> ${validate_component(Dialogue, "Dialogue").$$render(
      $$result,
      { modalOpen: cryptoDialogue },
      {
        modalOpen: ($$value) => {
          cryptoDialogue = $$value;
          $$settled = false;
        }
      },
      {
        buttons: () => {
          return `${validate_component(Button, "Button").$$render($$result, { type: "filled" }, {}, {
            default: () => {
              return `Close`;
            }
          })} `;
        },
        description: () => {
          return `<hr style="margin: 1rem 0;"> <div class="wallets svelte-vd1s82">${validate_component(Query, "Query").$$render($$result, { query: donateQuery }, {}, {
            default: ({ data }) => {
              return `${each(data.wallets, (wallet) => {
                return `<button class="svelte-vd1s82"><div class="wallet-name svelte-vd1s82"><img src="${"/donate/crypto/" + escape(wallet.currency_code, true) + ".svg"}" onerror="this.onerror=null; this.src='/donate/fallback.svg'"${add_attribute("alt", `${wallet.network} icon.'`, 0)} class="svelte-vd1s82"> ${escape(`${wallet.network} (${wallet.currency_code})`)}</div> <img id="arrow" src="/icons/expand_less.svg" alt="continue" class="svelte-vd1s82"> </button>`;
              })}`;
            }
          })}</div> `;
        },
        title: () => {
          return `Cryptocurrencies`;
        },
        icon: () => {
          return `<img class="qr-code" src="/icons/coins.svg" alt="Cryptocurrencies">`;
        }
      }
    )} ${validate_component(Dialogue, "Dialogue").$$render(
      $$result,
      { modalOpen: qrCodeDialogue },
      {
        modalOpen: ($$value) => {
          qrCodeDialogue = $$value;
          $$settled = false;
        }
      },
      {
        buttons: () => {
          return `${validate_component(Button, "Button").$$render($$result, { type: "text" }, {}, {
            default: () => {
              return `Back`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { type: "filled" }, {}, {
            default: () => {
              return `Copy Address`;
            }
          })} `;
        },
        description: () => {
          return `<div class="qr-code-body svelte-vd1s82">${escape(qrCodeValue)} ${validate_component(QRCode, "QRCode").$$render($$result, { codeValue: qrCodeValue }, {}, {})}</div> `;
        },
        title: () => {
          return `${escape(qrCodeDialogueName)} Wallet`;
        },
        icon: () => {
          return `<img class="qr-code" src="/icons/wallet.svg" alt="QR Code">`;
        }
      }
    )} ${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      { open: addressSnackbar },
      {
        open: ($$value) => {
          addressSnackbar = $$value;
          $$settled = false;
        }
      },
      {
        text: () => {
          return `Address copied to clipboard`;
        }
      }
    )} ${validate_component(FooterHost, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
