export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["customCSS/listStyleTypeCircle.css","favicon.png","favicon.svg","img/Marianne_Krause.jpg","img/bg.jpg","img/blogi/vuosi-hallituksessa.jpeg","img/board/anni-seilo.jpg","img/board/elina-illikainen.jpg","img/board/greatman-lim.jpg","img/board/henna-jylha.jpg","img/board/lasse-vaskelainen.jpg","img/board/niina-kajovuori.jpg","img/board/selina-virtanen.jpg","img/board/suvi-maenpaa.jpg","img/front-page/call-to-action-blur.jpg","img/front-page/call-to-action.jpg","img/front-page/jumbotron-bg.jpg","img/front-page/logo.jpg","img/front-page/logo.png","img/logo/epo.png","img/logo/epoOriginal.png","img/logo/epoWithShadow.png","img/logo/ppo.png","img/logo/pv.jpg","img/logo/pvAlpha.png","img/logo/pvOriginal.jpg","img/logo/vn.png","img/logo/vnOriginal.png","img/picture/desktop/annika-juuso.jpg","img/picture/desktop/hanne-juuso.jpg","img/picture/desktop/kimmo-luukkonen.jpg","img/picture/desktop/marianne-krause.jpg","img/picture/desktop/minttu-ilmari.jpg","img/picture/hanne-ilmari.jpg","img/picture/mobile/annika-juuso.jpg","img/picture/mobile/hanne-juuso.jpg","img/picture/mobile/kimmo-luukkonen.jpg","img/picture/mobile/marianne-krause.jpg","img/picture/mobile/minttu-ilmari.jpg","img/pot-jumbotron50.jpg","img/pot-jumbotron65.jpg","img/pot-jumbotron80.jpg"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.a56eb798.js","app":"_app/immutable/entry/app.ec7d0ff0.js","imports":["_app/immutable/entry/start.a56eb798.js","_app/immutable/chunks/index.a20139b5.js","_app/immutable/chunks/singletons.b8bdb6d7.js","_app/immutable/entry/app.ec7d0ff0.js","_app/immutable/chunks/index.a20139b5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blogit",
				pattern: /^\/blogit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blogit/kisaaminen",
				pattern: /^\/blogit\/kisaaminen\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blogit/lavaetiketti",
				pattern: /^\/blogit\/lavaetiketti\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blogit/tanssilajit",
				pattern: /^\/blogit\/tanssilajit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blogit/vastauksia-palautteisiin",
				pattern: /^\/blogit\/vastauksia-palautteisiin\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/blogit/vuosi-hallituksessa",
				pattern: /^\/blogit\/vuosi-hallituksessa\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/hallitus",
				pattern: /^\/hallitus\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/kurssit",
				pattern: /^\/kurssit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/kurssit/alkeisjatko",
				pattern: /^\/kurssit\/alkeisjatko\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/kurssit/alkeiskurssi",
				pattern: /^\/kurssit\/alkeiskurssi\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/kurssit/hinnasto-ja-maksaminen",
				pattern: /^\/kurssit\/hinnasto-ja-maksaminen\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/kurssit/ilmoittautuminen",
				pattern: /^\/kurssit\/ilmoittautuminen\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/kurssit/jatkokurssi",
				pattern: /^\/kurssit\/jatkokurssi\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/kurssit/kurssiaikataulut-ja-lajit",
				pattern: /^\/kurssit\/kurssiaikataulut-ja-lajit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/kurssit/yleista-kursseista",
				pattern: /^\/kurssit\/yleista-kursseista\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/ry/kannatusjasenyys",
				pattern: /^\/ry\/kannatusjasenyys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/ry/liity-aktiiviksi",
				pattern: /^\/ry\/liity-aktiiviksi\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/ry/yhdistyksen-saannot",
				pattern: /^\/ry\/yhdistyksen-saannot\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			},
			{
				id: "/tapahtumat",
				pattern: /^\/tapahtumat\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 21 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
