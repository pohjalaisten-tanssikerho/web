import { c as create_ssr_component, d as each, e as escape } from "../../chunks/index2.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.jumbotron.svelte-1aapjc2.svelte-1aapjc2.svelte-1aapjc2{background-image:url(/img/picture/hanne-ilmari.jpg);background-size:cover;border-bottom:3px solid var(--color-light-blue)}.jumbotron.svelte-1aapjc2 h1.svelte-1aapjc2.svelte-1aapjc2{text-align:center;font-size:2.5em;text-decoration:underline;text-decoration-thickness:5px;text-decoration-color:orange;padding-top:1em}.jumbotron.svelte-1aapjc2 h2.svelte-1aapjc2.svelte-1aapjc2{max-width:776px}.jumbotron.svelte-1aapjc2 p.svelte-1aapjc2.svelte-1aapjc2{max-width:776px;font-size:15px;line-height:1.6em;color:#e9f3ff}.jumbotron.svelte-1aapjc2 em.svelte-1aapjc2.svelte-1aapjc2{display:block;text-align:center}.jumbotron.svelte-1aapjc2 .sections.svelte-1aapjc2.svelte-1aapjc2{display:flex;flex-wrap:wrap;gap:1em;justify-content:center;padding:3em 0}.jumbotron.svelte-1aapjc2 .sections section.svelte-1aapjc2.svelte-1aapjc2{position:relative;width:300px;height:400px;border:2px solid var(--color-light-blue);border-radius:6px;backdrop-filter:blur(6px);background:rgba(2, 33, 64, 0.6862745098)}.jumbotron.svelte-1aapjc2 .sections section.svelte-1aapjc2.svelte-1aapjc2::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;opacity:70%;border-radius:4px}.teachers.svelte-1aapjc2.svelte-1aapjc2.svelte-1aapjc2{display:flex;flex-wrap:wrap;width:min(100% - 2rem, 890px)}.teachers.svelte-1aapjc2 div.svelte-1aapjc2.svelte-1aapjc2{width:380px;padding-top:1.2em}.teachers.svelte-1aapjc2 div.svelte-1aapjc2 h2.svelte-1aapjc2{text-align:center;padding:0.5em 0}.teachers.svelte-1aapjc2 img.svelte-1aapjc2.svelte-1aapjc2{width:380px;height:460px}.center.svelte-1aapjc2.svelte-1aapjc2.svelte-1aapjc2{text-align:center}.logo.svelte-1aapjc2.svelte-1aapjc2.svelte-1aapjc2{width:240px;height:240px}.logos.svelte-1aapjc2.svelte-1aapjc2.svelte-1aapjc2{display:flex;flex-wrap:wrap;width:min(100% - 2rem, 890px)}.logos.svelte-1aapjc2 div.svelte-1aapjc2.svelte-1aapjc2{margin:2em auto 3.5em auto}.logos.svelte-1aapjc2 .normal-width.svelte-1aapjc2.svelte-1aapjc2{width:220px;height:220px}.logos.svelte-1aapjc2 .special-width.svelte-1aapjc2.svelte-1aapjc2{width:250px;height:220px}caption.svelte-1aapjc2.svelte-1aapjc2.svelte-1aapjc2{display:block;font-size:0.83em}',
  map: null
};
const timezoneName = "Europe/Helsinki";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  let courses = [];
  $$result.css.add(css);
  return `<div class="jumbotron svelte-1aapjc2"><h1 class="svelte-1aapjc2">Pohjalaisten tanssikerho</h1>
  <em class="svelte-1aapjc2">Opetusta, bileitä ja ekskursioita. Pohjalaisten tanssikerho tuo opiskelijan elämään tanssin iloa.</em>
  <div class="sections svelte-1aapjc2"><section class="svelte-1aapjc2"><h2 class="svelte-1aapjc2">Tiedotteet</h2></section>
    <section class="svelte-1aapjc2"><h2 class="svelte-1aapjc2">Seuraavat kurssit</h2>
      ${courses.length > 0 ? `<table><thead><tr><th></th>
              ${each(courses.slice(0, 3), (course) => {
    return `<th>${escape(dayjs.utc(course.date).tz(timezoneName).format("ddd, MMM D, YYYY"))}</th>`;
  })}</tr></thead>
          <tbody>${each(["alkeet", "alkeisjatko", "jatko"], (courseType) => {
    return `<tr><th>${escape(courseType)}</th>
                ${each(courses.slice(0, 3), (course) => {
      return `<td>${escape(course[courseType.toLowerCase()])}</td>`;
    })}
              </tr>`;
  })}</tbody></table>
        <p class="svelte-1aapjc2">Kurssit ovat ajantasalla.</p>` : `<p class="svelte-1aapjc2">Viikottaiset kurssit ovat loppu tältä erää. Ensi kaudella taas lisää!</p>`}</section>
    <section class="svelte-1aapjc2"><h2 class="svelte-1aapjc2">Tapahtumat</h2></section></div></div>
<h1>Paritanssin huumaa opiskelijoille</h1>
<h1>Tanssin opettajat</h1>
<div class="teachers svelte-1aapjc2"><div class="svelte-1aapjc2"><img src="/img/picture/desktop/kimmo-luukkonen.jpg" alt="Kimmo Luukkonen" width="380" height="460" class="svelte-1aapjc2">
    <h2 class="svelte-1aapjc2">Kimmo Luukkonen</h2>
    <p>Kimmon tunneilla ei ole koskaan tylsää. Hän osaa keventää tunnelmaa vallattoman huumorinsa ja persoonansa avulla, mikä vapauttaa ja rentouttaa kehon tanssitunnelmaan. Tunneilla tanssii vapaammin ja paremmin kuin missään muualla.</p>
    <p><a href="kimmoluukkonen.wordpress.com">Kimmosta saa lisää tietoa</a> hänen omilta sivuiltaan.</p></div>
  <div class="svelte-1aapjc2"><img src="img/picture/desktop/marianne-krause.jpg" alt="Marianne Krause" width="380" height="460" class="svelte-1aapjc2">
    <h2 class="svelte-1aapjc2">Marianne Krause</h2>
    <p>Marianne on ilmiö. Usein hänen opetuksensa kuuluvat käytävillekin asti, joten jokainen voi olla varma, että takarivin oppilaatkin kuulevat. Marianne pitää oppilaansa hereillä, haastaa heitä ja etenee opetuksessaan määrätietoisesti. Hänen opetuksensa etenee pienin askelin; kuin asialla olisi taitava tarinan kertoja. Lopussa kaikki tanssin palaset loksahtavat yhteen ja oppilaat pääsevät tuntemaan ylpeyttä omasta etenemisestään ja oppimisestaan. Marianne vie “ahaa” elämyksen aivan uudelle tasolle.</p></div></div>
<h1>Pohjalaisten valtuuskunta</h1>
<p>Pohjalaisten tanssikerho ry on itsenäinen voittoa tavoittelematon yhdistys, jonka juuret ovat Pohjalaisissa osakunnissa. Idea tanssikerhon perustamiselle on siis kolmen eri osakunnan yhteinen ajatus. Tanssikerho perustettiin 80-luvun alussa ja vuonna 2015 Tanssikerho rekisteröityi yhdistykseksi. Tanssikerho on olemassa osakuntia ja opiskelijoita varten, ja tekee yhteistyötä Pohjalaisten valtuuskunnan kanssa.</p>
<div class="center svelte-1aapjc2"><img class="logo svelte-1aapjc2" src="/img/logo/pvAlpha.png" alt="Pohjalaisten Valtuuskunta"></div>
<p>Pohjalaisten valtuuskunta on yhteistyöelin seuraaville osakunnille:</p>
<ul><li><a href="http://vasa.nation.fi">Vasa Nation</a>(VN)</li>
  <li><a href="https://pohjoispohjalaiset.fi">Pohjois-Pohjalainen osakunta</a>(PPO)</li>
  <li><a href="https://epo.osakunta.fi">Etelä-Pohjalainen osakunta</a>(EPO)</li></ul>
<p>Osakunnat ovat Helsingin yliopistossa toimivia poikkitieteellisiä opiskelijayhdistyksiä, jotka perinteisesti keräävät jäseniään syntymäpaikkansa mukaan, ja joissa seudun kulttuuri ja tunnelma näkyvät. Jäseniksi voivat liittyä kuitenkin kaikki korkeakouluopiskelijat syntymäpaikastaan riippumatta. Osakunta on loistava paikka luoda poikkitieteellisiä opiskelijatuttavuuksia.</p>
<div class="logos svelte-1aapjc2"><div class="normal-width svelte-1aapjc2"><a href="http://vasa.nation.fi" src="Vasa Nation"><img class="normal-width svelte-1aapjc2" src="/img/logo/vn.png" alt="Vasa Nation osakunnan vaakuna" width="220" height="220"></a>
    <caption class="svelte-1aapjc2">Vasa Nation</caption></div>
  <div class="normal-width svelte-1aapjc2"><a href="https://pohjoispohjalaiset.fi" src="Pohjois-Pohjalainen osakunta"><img class="normal-width svelte-1aapjc2" src="/img/logo/ppo.png" alt="Pohjois-Pohjalaisen osakunnan vaakuna" width="220" height="220"></a>
    <caption class="svelte-1aapjc2">Pohjois-Pohjalainen osakunta</caption></div>
  <div class="special-width svelte-1aapjc2"><a href="https://epo.osakunta.fi" src="Etelä-Pohjalainen osakunta"><img class="special-width svelte-1aapjc2" src="/img/logo/epoOriginal.png" alt="Etelä-Pohjalaisen osakunnan vaakuna" width="250" height="220"></a>
    <caption class="svelte-1aapjc2">Etelä-Pohjalainen osakunta</caption></div></div>
<p>Osakunnat ovat ensimmäisiä opiskelijajärjestöjä Suomessa. Osakunnat ovat myös suuria: ne omistavat kiinteistöjä, jotka ovat opiskelijoiden käytettävissä. On osuvasti sanottu, että osakunta on opiskelijan olohuone keskellä Helsinkiä. Osakuntien tarkoitus on kehittää opiskelijoiden hyvinvointia mm. harrastusten kautta.</p>
<p>Tanssikerho suosittelee kaikkia tanssikerhon jäseniä liittymään osakuntiin! Mukavan opiskelijaelämän lisäksi osakunta tarjoaa opiskelijoille monia opiskelijaetuuksia. Osakuntalaiselle (VN, PPO, EPO) opiskelijalle tanssikerho tarjoaa kursseja alennettuun hintaan.</p>`;
});
export {
  Page as default
};
