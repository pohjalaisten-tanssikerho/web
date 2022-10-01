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

<style lang="scss">
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
      height: 3em;
      background: var(--color-night-blue);
      & .header-middle {
        text-transform: uppercase;
        a {
          text-decoration: none;
          color: var(--color-white);
          transition: .3s;
          margin: .9em;
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
</style>
