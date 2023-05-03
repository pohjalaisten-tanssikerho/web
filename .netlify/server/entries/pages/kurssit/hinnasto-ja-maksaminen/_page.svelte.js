import { c as create_ssr_component, d as each, e as escape } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { prices } = $$props;
  async function loadPrices() {
    const response = await fetch("https://raw.githubusercontent.com/pohjalaisten-tanssikerho/web-page/master/data/prices.json");
    const data = await response.json();
    prices = Object.fromEntries(Object.entries(data).map(([category, values]) => [category, values.map((value) => ({ price: value.price, ref: value.ref }))]));
  }
  loadPrices();
  if ($$props.prices === void 0 && $$bindings.prices && prices !== void 0)
    $$bindings.prices(prices);
  return `<h1 id="hinnasto-ja-maksaminen">Hinnasto ja maksaminen</h1>
<p>Maksu tapahtuu tilisiirrolla tilille:</p>
<pre>  <code>
    Holvi FI51 7997 7998 0564 23
    BIC HOLVFIHH
  </code>
</pre>
<p>Muista käyttää viitettä!</p>
<h2 id="kausikurssien-hinnasto">Kausikurssien hinnasto</h2>
${prices ? `<table class="price-table"><tbody><tr><th colspan="2"></th>
		<th>Alkeet</th>
		<th>Alkeisjatko</th>
		<th>Jatko</th></tr>
	  ${each(Object.entries(prices), ([category, values]) => {
    return `<tr><th rowspan="2">${escape(category)}</th>
		  <td class="dark-background">hinta</td>
		  ${each(values, (value) => {
      return `<td class="dark-background">${escape(value.price)}</td>`;
    })}</tr>
		<tr><td>viite</td>
		  ${each(values, (value) => {
      return `<td>${escape(value.ref)}</td>`;
    })}
		</tr>`;
  })}</tbody></table>` : `<p>Hintoja päivitetään. Yritä myöhemmin uudelleen.</p>`}
<p>Ota talteen kuitti ja pidä se mukana kursseilla, kunnes maksut on tarkistettu.</p>
<div class="footnote">* Osakuntalaisuudella tarkoitetaan seuraavia osakunnan jäseniä: <a href="http://vasa.nation.fi">Vasa Nation</a>
	(VN), <a href="http://pohjoispohjalaiset.fi">Pohjois-Pohjalanen osakunta</a> (PPO) ja
	<a href="http://epo.osakunta.fi">Etelä-Pohjalainen osakunta</a> (EPO). Lisäksi osakunnan jäsenen on
	oltava kirjoilla Helsingin yliopistossa, Aalto-yliopistossa tai muussa korkeakoulussa, jotta on oikeutettu
	alennettuun hintaan.
</div>
<div class="footnote">** Myös jatko-opiskelijat.</div>`;
});
export {
  Page as default
};
