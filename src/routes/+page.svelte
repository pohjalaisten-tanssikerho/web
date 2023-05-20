<script lang="ts">
  import { onMount } from 'svelte';
  import dayjs from 'dayjs';
  import utc from 'dayjs/plugin/utc';
  import timezone from 'dayjs/plugin/timezone';

  dayjs.extend(utc);
  dayjs.extend(timezone);

  const timezoneName = 'Europe/Helsinki';
  let courses: any[] = [];
  let pastCourses: any[] = []

  async function loadCourses() {
    // Load course data
    const courseData = await fetch('https://raw.githubusercontent.com/pohjalaisten-tanssikerho/web-page/master/data/courses.json').then(res => res.json());
    courses = courseData.courses.filter((course) => dayjs.utc(course.date).tz(timezoneName).isAfter(dayjs()));
}

  onMount(() => {
    loadCourses();
  });
</script>
<div class="jumbotron">
  <h1>Pohjalaisten tanssikerho</h1>
  <em>Opetusta, bileitä ja ekskursioita. Pohjalaisten tanssikerho tuo opiskelijan elämään tanssin iloa.</em>
  <div class="sections">
    <section>
      <h2>Tiedotteet</h2>
    </section>
    <section>
      <h2>Seuraavat kurssit</h2>
      {#if courses.length > 0}
        <table>
          <thead>
            <tr>
              <th></th>
              {#each courses.slice(0, 3) as course}
                <th>{dayjs.utc(course.date).tz(timezoneName).format('ddd, MMM D, YYYY')}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each ['alkeet', 'alkeisjatko', 'jatko'] as courseType}
              <tr>
                <th>{courseType}</th>
                {#each courses.slice(0, 3) as course}
                  <td>{course[courseType.toLowerCase()]}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
        <p>Kurssit ovat ajantasalla.</p>
      {:else}
      <p>Viikottaiset kurssit ovat loppu tältä erää. Ensi kaudella taas lisää!</p>
      {/if}
    </section>
    <section>
      <h2>Tapahtumat</h2>
    </section>
  </div>
</div>
<h1>Paritanssin huumaa opiskelijoille</h1>

<section>
  <div class="container-opiskelijat">
    <div class="content-annikajuuso">
    <div class="text1">
        <p>Paritanssi on hauska, sosiaalinen ja liikunnallinen harrastus, jossa viihtyy jokainen. Tanssi on aina ollut osa kulttuuria ja historiaa, ja täten myös sivistystä. Jokainen törmää paritansseihin viimeistään elämänsä kohokohdissa, joista tunnetuimmat lienevät häiden valssit ja lukion vanhojen tanssit. Kansantanssijoihinkin saattaa törmätä Helsingin keskustassa ja välimeren lomakohteilla salsa on tuttu näky.</p>
        <p> Tanssiharrastus on erinomainen harrastus, koska siinä yhdistyy monia asioita mielenkiintoiseksi kokonaisuudeksi. Paritanssissa musiikki ja liike kietoutuvat yhteen samalla, kun kokemus jaetaan tanssiparin kanssa. Laji ja musiikki luovat tunnetilan: tangossa on draamaa, fuskussa leikillisyyttä, buggissa vauhtia, valssissa arvokkuutta, bachatassa herkkyyttä ja sensuaalisuutta jne. Varmasti jokaiselle löytyy oma suosikki!</p>
    </div>
    <div class="image-annikajuuso">
      <img src="/img/picture/desktop/annika-juuso.jpg" alt="annikajuuso">
    </div>
      </div>
</section>
<section>
      <div class="content-minttuilmari">
    <div class="text2">
      <p>Suomalainen lavatanssi on erittäin lajirikas. Saman illan aikana voi olla helpostikin kymmenen eri lajia. Lajien moninaisuus on rikkautta ja se tuo tanssiin mielenkiintoa sekä tunnetilojen vaihtelevuutta. Pohjalaisten tanssikerho opettaa kaikkia yleisimpiä tanssilajeja, joita suomalaisilla lavoilla tanssitaan. Tanssikerhossa opettavat ammattiopettajat monien vuosien kokemuksella. Opettajat ja Pohjalaisten tanssikerhon lämminhenkinen yhteisö auttavat ja ovat tukena tanssikulttuuriin tutustumisessa.</p>

      <p>Pohjalaisten tanssikerho järjestää opiskelijoille ja opiskelijamielisille lukukauden pituisia paritanssikursseja, joissa opetus tapahtuu viikottain. Näiden lisäksi kerho järjestää ekskursioita, tanssibileitä ja tiiviskursseja.
        
        Tervetuloa iloiseen joukkoomme! Nähdään tanssilattialla!</p>
    </div>
    <div class="image-minttu-ilmari">
      <img src="/img/picture/desktop/minttu-ilmari.jpg" alt="minttuilmari">
    </div>
      </div>
</section>

<h1>Tanssin opettajat</h1>
<div class="teachers">
  <div>
    <img src="/img/picture/desktop/kimmo-luukkonen.jpg" alt="Kimmo Luukkonen" width="380" height="460" />
    <h2>Kimmo Luukkonen</h2>
    <p>Kimmon tunneilla ei ole koskaan tylsää. Hän osaa keventää tunnelmaa vallattoman huumorinsa ja persoonansa avulla, mikä vapauttaa ja rentouttaa kehon tanssitunnelmaan. Tunneilla tanssii vapaammin ja paremmin kuin missään muualla.</p>
    <p><a href="kimmoluukkonen.wordpress.com">Kimmosta saa lisää tietoa</a> hänen omilta sivuiltaan.</p>
  </div>
  <div>
    <img src="img/picture/desktop/marianne-krause.jpg" alt="Marianne Krause" width="380" height="460" />
    <h2>Marianne Krause</h2>
    <p>Marianne on ilmiö. Usein hänen opetuksensa kuuluvat käytävillekin asti, joten jokainen voi olla varma, että takarivin oppilaatkin kuulevat. Marianne pitää oppilaansa hereillä, haastaa heitä ja etenee opetuksessaan määrätietoisesti. Hänen opetuksensa etenee pienin askelin; kuin asialla olisi taitava tarinan kertoja. Lopussa kaikki tanssin palaset loksahtavat yhteen ja oppilaat pääsevät tuntemaan ylpeyttä omasta etenemisestään ja oppimisestaan. Marianne vie “ahaa” elämyksen aivan uudelle tasolle.</p>
  </div>
</div>
<h1>Pohjalaisten valtuuskunta</h1>
<p>Pohjalaisten tanssikerho ry on itsenäinen voittoa tavoittelematon yhdistys, jonka juuret ovat Pohjalaisissa osakunnissa. Idea tanssikerhon perustamiselle on siis kolmen eri osakunnan yhteinen ajatus. Tanssikerho perustettiin 80-luvun alussa ja vuonna 2015 Tanssikerho rekisteröityi yhdistykseksi. Tanssikerho on olemassa osakuntia ja opiskelijoita varten, ja tekee yhteistyötä Pohjalaisten valtuuskunnan kanssa.</p>
<div class="center"><img class="logo" src="/img/logo/pvAlpha.png" alt="Pohjalaisten Valtuuskunta"></div>
<p>Pohjalaisten valtuuskunta on yhteistyöelin seuraaville osakunnille:</p>
<ul>
  <li><a href="http://vasa.nation.fi">Vasa Nation</a>(VN)</li>
  <li><a href="https://pohjoispohjalaiset.fi">Pohjois-Pohjalainen osakunta</a>(PPO)</li>
  <li><a href="https://epo.osakunta.fi">Etelä-Pohjalainen osakunta</a>(EPO)</li>
</ul>
<p>Osakunnat ovat Helsingin yliopistossa toimivia poikkitieteellisiä opiskelijayhdistyksiä, jotka perinteisesti keräävät jäseniään syntymäpaikkansa mukaan, ja joissa seudun kulttuuri ja tunnelma näkyvät. Jäseniksi voivat liittyä kuitenkin kaikki korkeakouluopiskelijat syntymäpaikastaan riippumatta. Osakunta on loistava paikka luoda poikkitieteellisiä opiskelijatuttavuuksia.</p>
<div class="logos">
  <div class="normal-width">
    <a href="http://vasa.nation.fi" src="Vasa Nation"><img class="normal-width" src="/img/logo/vn.png" alt="Vasa Nation osakunnan vaakuna" width="220" height="220" /></a>
    <caption>Vasa Nation</caption>
  </div>
  <div class="normal-width">
    <a href="https://pohjoispohjalaiset.fi" src="Pohjois-Pohjalainen osakunta"><img class="normal-width" src="/img/logo/ppo.png" alt="Pohjois-Pohjalaisen osakunnan vaakuna" width="220" height="220" /></a>
    <caption>Pohjois-Pohjalainen osakunta</caption>
  </div>
  <div class="special-width">
    <a href="https://epo.osakunta.fi" src="Etelä-Pohjalainen osakunta"><img class="special-width" src="/img/logo/epoOriginal.png" alt="Etelä-Pohjalaisen osakunnan vaakuna" width="250" height="220" /></a>
    <caption>Etelä-Pohjalainen osakunta</caption>
  </div>
</div>
<p>Osakunnat ovat ensimmäisiä opiskelijajärjestöjä Suomessa. Osakunnat ovat myös suuria: ne omistavat kiinteistöjä, jotka ovat opiskelijoiden käytettävissä. On osuvasti sanottu, että osakunta on opiskelijan olohuone keskellä Helsinkiä. Osakuntien tarkoitus on kehittää opiskelijoiden hyvinvointia mm. harrastusten kautta.</p>
<p>Tanssikerho suosittelee kaikkia tanssikerhon jäseniä liittymään osakuntiin! Mukavan opiskelijaelämän lisäksi osakunta tarjoaa opiskelijoille monia opiskelijaetuuksia. Osakuntalaiselle (VN, PPO, EPO) opiskelijalle tanssikerho tarjoaa kursseja alennettuun hintaan.</p>

<style lang="scss">
  .jumbotron {
    background-image: url(/img/picture/hanne-ilmari.jpg);
    background-size: cover;
    border-bottom: 3px solid var(--color-light-blue);
    & h1 {
      text-align: center;
      font-size: 2.5em;
      text-decoration: underline;
      text-decoration-thickness: 5px;
      text-decoration-color: orange;
      padding-top: 1em;
    }
    & h2 {
      max-width: 776px;
    }
    & p {
      max-width: 776px;
      font-size: 15px;
      line-height: 1.6em;
      color: #e9f3ff;
    }
    & em {
      display: block;
      text-align: center;
    }
    & .sections {
      display: flex;
      flex-wrap: wrap;
      gap: 1em;
      justify-content: center;
      padding: 3em 0;
      & section {
        position: relative;
        width: 300px;
        height: 400px;
        border: 2px solid var(--color-light-blue);
        border-radius: 6px;
        backdrop-filter: blur(6px);
        background: #022140AF;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 70%;
          border-radius: 4px;
        }
      }
    }
}


section {
  width: 752px;
  height: 609px;
}
.container-opiskelijat {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.content-annikajuuso,
.content-minttuilmari {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 603px;
    width: 748px;
    margin: 0 auto;
    border: 2px solid #0b3c5d;
    border-radius: 4px;
    margin-bottom:36px
}
.content-minttuilmari {
  flex-direction: row-reverse;
}
.text1,
.text2 {
  height: 605px;
  width: 605px;
  margin-bottom: 20px;
  border-right: 2px solid #0b3c5d;
}

.image-annikajuuso img,
.image-minttu-ilmari img {
  max-width: fit-content;
  height: 605px;
}

  .teachers {
    display: flex;
    flex-wrap: wrap;
    width: min(100% - 2rem, 890px);
    div {
      width: 380px;
      padding-top: 1.2em;
      h2 {
        text-align: center;
        padding: .5em 0;
      }
    }
    img {
      width: 380px;
      height: 460px;
    }
  }
  .center {
    text-align: center;
  }
  .logo {
    width: 240px;
    height: 240px;
  }
  .logos {
    display: flex;
    flex-wrap: wrap;
    width: min(100% - 2rem, 890px);
    div {
      margin: 2em auto 3.5em auto;
    }
    .normal-width {
      width: 220px;
      height: 220px;
    }
    .special-width {
      width: 250px;
      height: 220px;
    }
  }
  caption {
    display: block;
    font-size: .83em;
  }
</style>
