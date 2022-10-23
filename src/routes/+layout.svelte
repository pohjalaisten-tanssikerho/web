<div class="container">
  <div class="container--header">
    <nav class="header-left"></nav>
    <nav class="header-middle"> 
      <a href="/">etusivu</a>
      <a href="/kurssit">kurssit</a>
      <a href="/tapahtumat">tapahtumat</a>
      <a href="/hallitus">hallitus</a>
      <a href="/blogi">blogi</a>
    </nav>
    <nav class="header-right"></nav>
  </div>

  <main>
    <slot></slot>
  </main>

  <footer class="container--footer">
    <section>
      <h3>Pohjalaisten tanssikerho ry</h3>
      <nav class="footer-left">
        <a href="/ry/yhdistyksen-saannot">Yhdistyksen säännöt</a>
        <a href="/ry/liity-aktiiviksi">Liity aktiiviksi</a>
        <a href="/ry/kannatusjasenyys">Kannatusjäsenyys</a>
      </nav>
    </section>
      <section>
      <h3>Yhteystiedot ja some</h3>
      <nav class="footer-middle">
        <a href="some/facebook">Facebook</a>
        <a href="some/whatsapp">WhatsApp</a>
        <a href="some/sahkopostilista">Sähköpostilista</a>
        <a>pohjalaistentanssikerho.ry(ät)gmail.com</a>
      </nav>
    </section>
      <section>
      <h3>Osoite</h3>
      <nav class="footer-right">
        <span>Töölönkatu 3 A, 00910 Helsinki, 5krs.</span>
        <a href="#">Avaa Reittioppaalla</a>
        <a href="#">Avaa Google Mapsilla</a>
      </nav>
    </section>
  </footer>
</div>

<style lang="scss" global>

/* CSS Targeting navigation header "ETUSIVU" (Hannu) / not working sos
nav header-middle > a { 

} */


  a {
    transition: .3s;
    text-decoration: none;
    color: var(--color-white);
  }
  a:hover {
    color: var(--color-orange);
  }
  h1 {
    text-align: center;
    font-size: 2.5em;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: orange;
    padding-top: 1em;
  }
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100vh;
    & .container--header {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      border-top: 3px solid var(--color-light-blue);
      border-bottom: 3px solid var(--color-light-blue);
      padding: .9em;
      background: var(--color-night-blue);
      & .header-middle {
        text-transform: uppercase;
        a {
          text-decoration: none;
          color: var(--color-white);
          transition: .3s;
          margin: 0 .9em;
          font-size: .9em;
          &:hover {
            color: var(--color-orange);
          }
        }
      }
    }
    & footer.container--footer {
      flex: 1;
      background-color: var(--color-night-blue);
      border-top: 3px solid var(--color-light-blue);
      display: flex;
      justify-content: center;
      gap: 1em;
      padding-top: 1.7em;
      & section {
        & nav {
          display: flex;
          flex-wrap: nowrap;
          flex-direction: column;
        }
      }
      & nav {
      }
    }
  }
  main {
    padding-bottom: 1.7em;
    & * {
      width: 640px;
      margin: 0 auto;

    }
    & p {
      margin-top: .2em;
      margin-bottom: .6em;
      font-size: .95em;
    }
    & ol {
      padding-left: 3em;
      margin-bottom: .8em;
      font-size: .95em;
      & li {
        margin-bottom: .3em;
      }
    }
    & h1 {
      width: unset;
      padding-bottom: .8em;
    }
    & .jumbotron, .sections {
      width: unset;
    }
  }
</style>
