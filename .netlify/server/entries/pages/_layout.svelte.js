import { c as create_ssr_component, e as escape } from "../../chunks/index2.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--border-values:3px solid var(--color-light-blue)}a{transition:0.3s;text-decoration:none;color:var(--color-white)}a:hover{color:var(--color-orange)}h1{text-align:center;font-size:2.5em;text-decoration:underline;text-decoration-thickness:5px;text-decoration-color:orange;padding-top:1em}.container{display:flex;flex-direction:column;flex-wrap:nowrap;height:100vh}.container nav.header-middle{z-index:1}.container nav.header-middle span>h4::before{content:" ";width:18px;height:18px;position:absolute;background-color:#05386b;transform:scaleX(0.7) rotate(45deg);left:0.1875em;z-index:-1}.container footer.container--footer{flex:1;background-color:var(--color-night-blue);border-top:var(--border-values);display:flex;justify-content:center;gap:1em;padding-top:1.7em}.container footer.container--footer section{position:relative;padding:0 1em 1em 0}.container footer.container--footer section h3{padding:0 0 0.5em 0.7em}.container footer.container--footer section h3::before{content:" ";width:0.9375em;height:0.9375em;position:absolute;background-color:#fb9039;transform:scaleX(0.7) rotate(45deg);left:-0.5em;top:0.25em}.container footer.container--footer section nav{display:flex;flex-wrap:nowrap;flex-direction:column;font-size:0.9em}.container footer.container--footer section nav a{padding-bottom:var(--list-padding-bottom)}main{padding-bottom:1.7em}main *{width:min(100% - 2rem, 640px);margin:0 auto}main p{margin-top:0.2em;margin-bottom:0.6em;font-size:0.95em}main a{color:var(--color-bright-blue);text-shadow:2px 2px var(--color-gray-blue);font-size:0.95em}main strong{color:var(--color-orange);font-size:0.95em}main pre{margin-bottom:1em;border:dotted 1px #A9A9A9;background-color:rgba(0, 0, 0, 0.47)}main ul{position:relative;list-style-type:none;padding-left:0.2em;transform:translateX(0.3em)}main ul li:after{position:absolute;content:"";background-color:var(--color-orange);width:0.65em;height:0.65em;left:0;transform:translateY(0.5em) scaleX(0.7) rotate(45deg)}main ol{padding-left:3em;margin-bottom:0.8em;font-size:0.95em}main ol li{margin-bottom:0.3em}main h1{width:unset;padding-bottom:0.3em}main h2{font-size:1.8em;text-decoration:underline 3px var(--color-orange)}main .jumbotron,main .sections{width:unset}main .footnote{font-size:0.8em;margin-bottom:1em}@media only screen and (min-width: 580px){div.headers{display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center;border-top:var(--border-values);border-bottom:var(--border-values);background:var(--color-night-blue)}div.headers nav.header-left span{display:none}div.headers nav.header-middle{text-transform:uppercase;display:block}div.headers nav.header-middle a{text-decoration:none;color:var(--color-white);transition:0.3s}div.headers nav.header-middle a:hover{color:var(--color-orange)}div.headers nav.header-middle span{position:relative}div.headers nav.header-middle span h4{display:inline-block;font-weight:normal;text-decoration:none;font-size:0.9em;margin:0 1em;padding:1em 0}div.headers nav.header-middle span h4:hover~div{visibility:visible;opacity:1}div.headers nav.header-middle span div:hover{visibility:visible;opacity:1}div.headers nav.header-middle span div{position:absolute;visibility:hidden;opacity:0;background:var(--color-night-blue);left:-0.7em;padding:0.7em;border:var(--border-values);border-top:none;width:max-content;z-index:1;transition:visibility 0.3s, opacity 0.3s ease-in-out}div.headers nav.header-middle span div h4{color:var(--color-orange);margin:0;padding:0.6em 0 0.3em 0;font-weight:bold}div.headers nav.header-middle span div ol li{display:block;text-transform:none;padding-bottom:0.2em}div.headers nav.header-middle span div ol li a{margin:0;font-size:0.9em}}@media only screen and (max-width: 579px){div.headers nav.header-left{font-size:0.9em;padding:1em;border-top:var(--border-values);border-bottom:var(--border-values);background-color:var(--color-night-blue)}div.headers nav.header-left .menu-toggler{cursor:pointer}div.headers nav.header-middle{position:absolute;display:none;z-index:1;padding:1em;border-right:var(--border-values);border-bottom:var(--border-values);background-color:var(--color-night-blue)}div.headers nav.header-middle span h4{color:var(--color-orange)}div.headers nav.header-middle span div ol{list-style-type:none;font-size:0.95em}div.headers nav.header-middle.open{display:block}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container"><div class="headers"><nav class="header-left"><span class="menu-toggler">Menu</span></nav>
    <nav class="${"header-middle " + escape("", true)}"><span><h4><a href="/">Etusivu</a></h4></span>
      <span><h4><a href="/kurssit">Kurssit</a></h4>
        <div><ol><li><a href="/kurssit/yleista-kursseista">Yleistä kursseista</a></li>
            <li><a href="/kurssit/kurssiaikataulut-ja-lajit">Kurssiaikataulut ja lajit</a></li>
            <li><a href="/kurssit/ilmoittautuminen">Ilmoittautuminen</a></li>
            <li><a href="/kurssit/hinnasto-ja-maksaminen">Hinnasto ja maksaminen</a></li></ol>
          <h4>Kurssit</h4>
          <ol><li><a href="/kurssit/alkeiskurssi">Alkeiskurssi</a></li>
            <li><a href="/kurssit/alkeisjatko">Alkeisjatko</a></li>
          <li><a href="/kurssit/jatkokurssi">Jatkokurssi</a></li>
             </ol></div></span>
      <span><h4><a href="/tapahtumat">Tapahtumat</a></h4></span>
      <span><h4><a href="/hallitus">Hallitus</a></h4></span>
      <span><h4><a href="/blogit">Blogi</a></h4>
        <div><ol><li><a href="/blogit/kisaaminen">Kisaaminen</a></li>
            <li><a href="/blogit/lavaetiketti">Lavaetiketti</a></li>
            <li><a href="/blogit/tanssilajit">Tanssilajit</a></li>
            <li><a href="/blogit/kisaaminen">Kisaaminen</a></li>
            <li><a href="/blogit/vuosi-hallituksessa">Vuosi hallituksessa</a></li></ol></div></span></nav>
    <nav class="header-right"></nav></div>

  <main>${slots.default ? slots.default({}) : ``}</main>

  <footer class="container--footer"><section><h3>Pohjalaisten tanssikerho ry</h3>
      <nav class="footer-left"><a href="/ry/yhdistyksen-saannot">Yhdistyksen säännöt</a>
        <a href="/ry/liity-aktiiviksi">Liity aktiiviksi</a>
        <a href="/ry/kannatusjasenyys">Kannatusjäsenyys</a></nav></section>
      <section><h3>Yhteystiedot ja some</h3>
      <nav class="footer-middle"><a href="some/facebook">Facebook</a>
        <a href="some/whatsapp">WhatsApp</a>
        <a href="some/sahkopostilista">Sähköpostilista</a>
        <a href="dummy">pohjalaistentanssikerho.ry(ät)gmail.com</a></nav></section>
      <section><h3>Osoite</h3>
      <nav class="footer-right"><span>Töölönkatu 3 A, 00910 Helsinki, 5krs.</span>
        <a href="dummy">Avaa Reittioppaalla</a>
        <a href="dummy">Avaa Google Mapsilla</a></nav></section></footer>
</div>`;
});
export {
  Layout as default
};
