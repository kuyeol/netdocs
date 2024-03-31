export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["_headers","_redirects","donate/card-images/Cryptocurrencies.png","donate/card-images/Cryptocurrencies.webp","donate/card-images/GitHub Sponsors.png","donate/card-images/GitHub Sponsors.webp","donate/card-images/Open Collective.png","donate/card-images/Open Collective.webp","donate/card-images/fallback.svg","donate/crypto/BTC.svg","donate/crypto/DOGE.svg","donate/crypto/ETH.svg","donate/crypto/LTC.svg","donate/crypto/XMR.svg","donate/crypto/fallback.svg","favicon.ico","icons/arrow.svg","icons/back.svg","icons/check.svg","icons/close.svg","icons/coins.svg","icons/docs.svg","icons/download.svg","icons/expand_less.svg","icons/expand_more.svg","icons/heart.svg","icons/home.svg","icons/qr_code.svg","icons/reset.svg","icons/search.svg","icons/wallet.svg","logo.png","logo.svg","revanced-logo-background.svg","socials/discord.svg","socials/github.svg","socials/reddit.svg","socials/telegram.svg"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.D4jSgv3h.js","app":"_app/immutable/entry/app.BHL4hYVl.js","imports":["_app/immutable/entry/start.D4jSgv3h.js","_app/immutable/chunks/entry.DMsEQtAS.js","_app/immutable/chunks/scheduler.ByELIq10.js","_app/immutable/entry/app.BHL4hYVl.js","_app/immutable/chunks/scheduler.ByELIq10.js","_app/immutable/chunks/index.DJ_v6P4m.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
