<div class="jumbotron">
  <h1>Pohjalaisten tanssikerho</h1>
  <em>Opetusta, bileitä ja ekskursioita. Pohjalaisten tanssikerho tuo opiskelijan elämään tanssin iloa.</em>
  <div class="sections">
    <section>
      <h2>Tiedotteet</h2>
    </section>
    <section>
      <h2>Seuraavat kurssit</h2>
    </section>
    <section>
      <h2>Tapahtumat</h2>
    </section>
  </div>
</div>
<div>
  // main content
</div>


<style lang="scss">
  h1 {
    padding-bottom: 0;
  }
  .jumbotron {
    background-image: url(img/picture/hanne-ilmari.jpg);
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
</style>
