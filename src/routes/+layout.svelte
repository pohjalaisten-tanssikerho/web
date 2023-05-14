<script lang="ts">
  let isMenuOpen = false
  const toggleMenu = () => isMenuOpen = !isMenuOpen
</script>

<div class="container">
  <div class="headers">
    <nav class="header-left">
      <span class="menu-toggler" on:click={toggleMenu} >Menu</span>
    </nav>
    <nav class="header-middle {isMenuOpen ? 'open' : ''}"> 
      <span>
        <h4><a href="/">Etusivu</a></h4>
      </span>
      <span>
        <h4><a href="/kurssit">Kurssit</a></h4>
        <div>
          <ol>
            <li><a href="/kurssit/yleista-kursseista">Yleistä kursseista</a></li>
            <li><a href="/kurssit/kurssiaikataulut-ja-lajit">Kurssiaikataulut ja lajit</a></li>
            <li><a href="/kurssit/ilmoittautuminen">Ilmoittautuminen</a></li>
            <li><a href="/kurssit/hinnasto-ja-maksaminen">Hinnasto ja maksaminen</a></li>
          </ol>
          <h4>Kurssit</h4>
          <ol>
            <li> 
              <a href="/kurssit/alkeiskurssi">Alkeiskurssi</a>
            </li>
            <li>
            <a href="/kurssit/alkeisjatko">Alkeisjatko</a>
          </li>
          <li>
            <a href="/kurssit/jatkokurssi">Jatkokurssi</a>
          </ol>
        </div>
      </span>
      <span>
        <h4><a href="/tapahtumat">Tapahtumat</a></h4>
      </span>
      <span>
        <h4><a href="/hallitus">Hallitus</a></h4>
      </span>
      <span>
        <h4><a href="/blogit">Blogi</a></h4>
        <div>
          <ol>
            <li><a href="/blogit/kisaaminen">Kisaaminen</li>
            <li><a href="/blogit/lavaetiketti">Lavaetiketti</li>
            <li><a href="/blogit/tanssilajit">Tanssilajit</li>
            <li><a href="/blogit/kisaaminen">Kisaaminen</li>
            <li><a href="/blogit/vuosi-hallituksessa">Vuosi hallituksessa</li>
          </ol>
        </div>
      </span>
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
        <a href="dummy">pohjalaistentanssikerho.ry(ät)gmail.com</a>
      </nav>
    </section>
      <section>
      <h3>Osoite</h3>
      <nav class="footer-right">
        <span>Töölönkatu 3 A, 00910 Helsinki, 5krs.</span>
        <a href="dummy">Avaa Reittioppaalla</a>
        <a href="dummy">Avaa Google Mapsilla</a>
      </nav>
    </section>
  </footer>
</div>

<style lang="scss" global>
  :root {
    --border-values: 3px solid var(--color-light-blue);
  }
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
    nav.header-middle {
      z-index: 1;
    }
    nav.header-middle span > h4::before {
      content: " ";
      width: 18px;
      height: 18px;
      position: absolute;
      background-color: #05386b;
      transform: scaleX(0.7) rotate(45deg);
      left: 0.1875em;
      z-index: -1;
    }
    footer.container--footer {
      flex: 1;
      background-color: var(--color-night-blue);
      border-top: var(--border-values);
      display: flex;
      justify-content: center;
      gap: 1em;
      padding-top: 1.7em;
      section {
        position: relative;
        padding: 0 1em 1em 0;
        h3 {
          padding: 0 0 .5em .7em;
        }
        h3::before {
          content: " ";
          width: 0.9375em;
          height: 0.9375em;
          position: absolute;
          background-color: #fb9039;
          transform: scaleX(0.7) rotate(45deg);
          left: -.5em;
          top: .25em;       
        }
        nav {
          display: flex;
          flex-wrap: nowrap;
          flex-direction: column;
          font-size: .9em;
          a {
            padding-bottom: var(--list-padding-bottom);
          }
        }
      }
    }
  }
  main {
    padding-bottom: 1.7em;
    * {
      width: min(100% - 2rem, 640px);
      margin: 0 auto;
    }
    p {
      margin-top: .2em;
      margin-bottom: .6em;
      font-size: .95em;
    }
    a {
      color: var(--color-bright-blue);
      text-shadow: 2px 2px var(--color-gray-blue);
      font-size: .95em;
    }
    strong {
      color: var(--color-orange);
      font-size: .95em;
    }
    pre {
      margin-bottom: 1em;
      border: dotted 1px #A9A9A9;
      background-color: rgba(0,0,0,.47);
    }
    ul {
      position: relative;
      list-style-type: none;
      padding-left: .2em;
      transform: translateX(.3em);
    }
    ul li:after {
      position: absolute;
      content: "";
      background-color: var(--color-orange);
      width: .65em;
      height: .65em;
      left: 0;
      transform: translateY(.5em) scaleX(0.7) rotate(45deg);
    }
    ol {
      padding-left: 3em;
      margin-bottom: .8em;
      font-size: .95em;
      li {
        margin-bottom: .3em;
      }
    }
    h1 {
      width: unset;
      padding-bottom: .3em;
    }
    h2 {
      font-size: 1.8em;
      text-decoration: underline 3px var(--color-orange);
    }
    .jumbotron, .sections {
      width: unset;
    }
    .footnote {
      font-size: .8em;
      margin-bottom: 1em;
    }
  }
  // navigation max-width
  @media only screen and (min-width: 580px) {
    div.headers {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      border-top: var(--border-values);
      border-bottom: var(--border-values);
      background: var(--color-night-blue);
      nav.header-left {
        span {
          display: none;
        }
      }
      nav.header-middle {
        text-transform: uppercase;
        display: block;
        a {
          text-decoration: none;
          color: var(--color-white);
          transition: .3s;
          // margin: 0 1.4em;
          // font-size: .9em;
          &:hover {
            color: var(--color-orange);
          }
        }
        span {
          position: relative;
          h4 {
            display: inline-block;
            font-weight: normal;
            text-decoration: none;
            font-size: .9em;
            margin: 0 1em;
            padding: 1em 0;
          }
          h4:hover ~ div {
            visibility: visible;
            opacity: 1;
          }
          div:hover {
            visibility: visible;
            opacity: 1;
          }
          div {
            position: absolute;
            visibility: hidden;
            opacity: 0;
            background: var(--color-night-blue);
            left: -.7em;
            padding: .7em;
            border: var(--border-values);
            border-top: none;
            width: max-content;
            z-index: 1;
            transition: visibility .3s, opacity .3s ease-in-out;
            h4 {
              color: var(--color-orange);
              margin: 0;
              padding: .6em 0 .3em 0;
              font-weight: bold;
            }
            ol li {
              display: block;
              text-transform: none;
              padding-bottom: .2em;
              a {
                margin: 0;
                font-size: .9em;
              }
            }
          }
        }
      }
    }
  }
  /* navigation min-width */
  @media only screen and (max-width: 579px) {
    div.headers {
      nav.header-left {
        font-size: .9em;
        padding: 1em;
        border-top: var(--border-values);
        border-bottom: var(--border-values);
        background-color: var(--color-night-blue);
        .menu-toggler {
          cursor: pointer;
        }
      }
      nav.header-middle {
        position: absolute;
        display: none;
        z-index: 1;
        padding: 1em;
        border-right: var(--border-values);
        border-bottom: var(--border-values);
        background-color: var(--color-night-blue);
        span {    
          h4 {
            color: var(--color-orange);
          }
          div {
            ol {
              list-style-type: none;
              font-size: .95em;
            }
          }
        }
      }
      nav.header-middle.open {
        display: block;
      }
    }
  }
</style>
