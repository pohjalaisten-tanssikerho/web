<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
  const { boards }: PageData = data
  const imgPrefexUrl: string = '/img/board/'
</script>

<h1 id="hallituksen-jäsenet">Hallituksen jäsenet</h1>

<div class="board">
  {#each boards as board }
    <div class="item">
      <img src="{ imgPrefexUrl }{ board.picture }" alt="{ board.firstname } { board.lastname }">
      <div class="role">{ board.role }</div>
      <div class="name">{ board.firstname } { board.lastname }</div>
      <div class="line"></div>
      <div class="email">{ board.email }</div>
    </div>
  {/each}
</div>

<h1 id="järjestötoiminta">Järjestötoiminta</h1>
<p>
	Pohjalaisten tanssikerho toimii täysin vapaaehtoisvoimin. Palvelun on siis tuottanut tanssikerhon
	jäsen tanssikerholaiselle. Yhdistyksen tavoite ei ole kerätä voittoa vaan tuottaa jäsenilleen
	hyötyä.
</p>
<p>
	Pohjalaisten tanssikerho on olemassa jäseniä varten, mutta ilman sitä pyörittävää hallitusta POT
	ei olisi olemassa. Pohjalaisten tanssikerhon hallitus on yhdistyksen päättävä elin, jonka jäsenet
	valitaan edellisen vuoden syyskokouksessa. Yhdistyksen säännöt ovat <a
		href="/ry/yhdistyksen-saannot/">luettavissa omalla sivulla</a
	>.
</p>
<h2 id="mukaan-hallitukseen">Mukaan hallitukseen?</h2>
<p>
	Hallituksessa toimiminen tuo vastuuta, mutta antaa mahdollisuuden vaikuttaa. Joskus työ voi olla
	raskasta, mutta sen aikaan saamat onnistumisen tunteet ovat sen arvoisia. Muut hallituksen jäsenet
	ovat auttamassa ja tukemassa. Asiat tehdään yhdessä. Hallituksessa oleminen on yksi
	mielenkiintoisimpia elämän kokemuksia, jota myös työnantajat arvostavat.
</p>
<p>
	Hieman henkilökohtaisemman tarinan voi lukea <a href="/blogi/vuosi-hallituksessa/"
		>Hennan kirjoittamassa blogissa</a
	>.
</p>
<p>Hyviä syitä liittyä hallitukseen:</p>
<ol>
	<li>merkintä CV:hen</li>
	<li>halu vaikuttaa tanssikerhon toimintaan</li>
	<li>halu auttaa</li>
	<li>kokemus ja uusiin ihmisiin tutustuminen</li>
</ol>
<p>
	Hallitus perehdyttää työtehtäviin, joten ei tarvitse pelätä, että kaikki on selvitettävä itse.
</p>
<h2 id="aktiivit">Aktiivit</h2>
<p>
	Hallitustoiminta tuo mukanaan vastuuta, mikä ei kaikille ehkä sovi. Aktiivit ovat joukko
	tanssikerhon jäseniä, jotka auttavat yhdistyksen toiminnassa. Käytännössä he tekevät samaa kuin
	hallitus ilman hallituksen vastuuta. Työtehtäviä on yllättävän paljon: tanssibileiden tarjoilu,
	soittolistat, siivous jne.
</p>
<p>
	Aktiiviksi voi ryhtyä milloin vain. Ota vain yhteyttä lähimpään hallituslaiseen ja kerro, että
	voit auttaa. Otamme mielellämme kaiken avun vastaan!
</p>
<h1 id="yhteystiedot">Yhteystiedot</h1>
<p>Hallituksen sähköposti: pohjalaistentanssikerho . ry (ät) gmail . com</p>
<p>
	Kirjepostin voi lähettää Pohjalaisen valtuuskunnan kautta lisäämällä kuoreen “TANSSIKERHO”.
	Pohjalaisen valtuuskunnan osoite:
</p>
<p>Töölönkatu 3 A, 00940 Helsinki, 5krs.</p>

<style lang="scss">
  .board {
    --border: 2px solid var(--color-gray-blue);
    display: flex;
    flex-wrap: wrap;
    gap: 1.4em;
    width: min(100% - 2rem, 1080px);
    .item {
      background-color: var(--color-night-blue);
      border-radius: 2px;
      border: var(--border);
      width: 228px;
      img {
        width: 224px;
        height: 233px;
        border-bottom: var(--border);
      }
    }
    .role, .email {
      font-size: .85em;
    }
    .role {
      padding-top: .35em;
    }
    .email{
      padding-top: .7em;
      padding-bottom: 1em;
    }
    .name {
      font-size: 1.1em;
      font-weight: bold;
      padding-top: .15em;
    }
    .role, .email, .name {
      text-align: center;
    }
    .line {
      height: 2px;
      width: 33%;
      background-color: var(--color-gray-blue);
    }
  }
</style>
