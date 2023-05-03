import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".board.svelte-kfxjfy.svelte-kfxjfy{--border:2px solid var(--color-gray-blue);display:flex;flex-wrap:wrap;gap:1.4em;width:min(100% - 2rem, 1080px)}.board.svelte-kfxjfy .item.svelte-kfxjfy{background-color:var(--color-night-blue);border-radius:2px;border:var(--border);width:228px}.board.svelte-kfxjfy .item img.svelte-kfxjfy{width:224px;height:233px;border-bottom:var(--border)}.board.svelte-kfxjfy .role.svelte-kfxjfy,.board.svelte-kfxjfy .email.svelte-kfxjfy{font-size:0.85em}.board.svelte-kfxjfy .role.svelte-kfxjfy{padding-top:0.35em}.board.svelte-kfxjfy .email.svelte-kfxjfy{padding-top:0.7em;padding-bottom:1em}.board.svelte-kfxjfy .name.svelte-kfxjfy{font-size:1.1em;font-weight:bold;padding-top:0.15em}.board.svelte-kfxjfy .role.svelte-kfxjfy,.board.svelte-kfxjfy .email.svelte-kfxjfy,.board.svelte-kfxjfy .name.svelte-kfxjfy{text-align:center}.board.svelte-kfxjfy .line.svelte-kfxjfy{height:2px;width:33%;background-color:var(--color-gray-blue)}",
  map: null
};
const imgPrefexUrl = "/img/board/";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { boards } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1 id="hallituksen-jäsenet">Hallituksen jäsenet</h1>

<div class="board svelte-kfxjfy">${each(boards, (board) => {
    return `<div class="item svelte-kfxjfy"><img src="${escape(imgPrefexUrl, true) + escape(board.picture, true)}" alt="${escape(board.firstname, true) + " " + escape(board.lastname, true)}" class="svelte-kfxjfy">
      <div class="role svelte-kfxjfy">${escape(board.role)}</div>
      <div class="name svelte-kfxjfy">${escape(board.firstname)} ${escape(board.lastname)}</div>
      <div class="line svelte-kfxjfy"></div>
      <div class="email svelte-kfxjfy">${escape(board.email)}</div>
    </div>`;
  })}</div>

<h1 id="järjestötoiminta">Järjestötoiminta</h1>
<p>Pohjalaisten tanssikerho toimii täysin vapaaehtoisvoimin. Palvelun on siis tuottanut tanssikerhon
	jäsen tanssikerholaiselle. Yhdistyksen tavoite ei ole kerätä voittoa vaan tuottaa jäsenilleen
	hyötyä.
</p>
<p>Pohjalaisten tanssikerho on olemassa jäseniä varten, mutta ilman sitä pyörittävää hallitusta POT
	ei olisi olemassa. Pohjalaisten tanssikerhon hallitus on yhdistyksen päättävä elin, jonka jäsenet
	valitaan edellisen vuoden syyskokouksessa. Yhdistyksen säännöt ovat <a href="/ry/yhdistyksen-saannot/">luettavissa omalla sivulla</a>.
</p>
<h2 id="mukaan-hallitukseen">Mukaan hallitukseen?</h2>
<p>Hallituksessa toimiminen tuo vastuuta, mutta antaa mahdollisuuden vaikuttaa. Joskus työ voi olla
	raskasta, mutta sen aikaan saamat onnistumisen tunteet ovat sen arvoisia. Muut hallituksen jäsenet
	ovat auttamassa ja tukemassa. Asiat tehdään yhdessä. Hallituksessa oleminen on yksi
	mielenkiintoisimpia elämän kokemuksia, jota myös työnantajat arvostavat.
</p>
<p>Hieman henkilökohtaisemman tarinan voi lukea <a href="/blogi/vuosi-hallituksessa/">Hennan kirjoittamassa blogissa</a>.
</p>
<p>Hyviä syitä liittyä hallitukseen:</p>
<ol><li>merkintä CV:hen</li>
	<li>halu vaikuttaa tanssikerhon toimintaan</li>
	<li>halu auttaa</li>
	<li>kokemus ja uusiin ihmisiin tutustuminen</li></ol>
<p>Hallitus perehdyttää työtehtäviin, joten ei tarvitse pelätä, että kaikki on selvitettävä itse.
</p>
<h2 id="aktiivit">Aktiivit</h2>
<p>Hallitustoiminta tuo mukanaan vastuuta, mikä ei kaikille ehkä sovi. Aktiivit ovat joukko
	tanssikerhon jäseniä, jotka auttavat yhdistyksen toiminnassa. Käytännössä he tekevät samaa kuin
	hallitus ilman hallituksen vastuuta. Työtehtäviä on yllättävän paljon: tanssibileiden tarjoilu,
	soittolistat, siivous jne.
</p>
<p>Aktiiviksi voi ryhtyä milloin vain. Ota vain yhteyttä lähimpään hallituslaiseen ja kerro, että
	voit auttaa. Otamme mielellämme kaiken avun vastaan!
</p>
<h1 id="yhteystiedot">Yhteystiedot</h1>
<p>Hallituksen sähköposti: pohjalaistentanssikerho . ry (ät) gmail . com</p>
<p>Kirjepostin voi lähettää Pohjalaisen valtuuskunnan kautta lisäämällä kuoreen “TANSSIKERHO”.
	Pohjalaisen valtuuskunnan osoite:
</p>
<p>Töölönkatu 3 A, 00940 Helsinki, 5krs.</p>`;
});
export {
  Page as default
};
