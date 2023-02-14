<script lang="ts">
	//export let imgSrc = '/static/img/picture/mobile/hanne-juuso.jpg';
	/*import type {Image} from './$types'*/
</script>

<div class="twin-view">
	<div class="items">
		<p>
			Paritanssi on hauska, sosiaalinen ja liikunnallinen harrastus, jossa viihtyy jokainen. Tanssi
			on aina ollut osa kulttuuria ja historiaa, ja täten myös sivistystä. Jokainen törmää
			paritansseihin viimeistään elämänsä kohokohdissa, joista tunnetuimmat lienevät häiden valssit
			ja lukion vanhojen tanssit. Kansantanssijoihinkin saattaa törmätä Helsingin keskustassa ja
			välimeren lomakohteilla salsa on tuttu näky.
		</p>
		<p>
			Tanssiharrastus on erinomainen harrastus, koska siinä yhdistyy monia asioita
			mielenkiintoiseksi kokonaisuudeksi. Paritanssissa musiikki ja liike kietoutuvat yhteen
			samalla, kun kokemus jaetaan tanssiparin kanssa. Laji ja musiikki luovat tunnetilan: tangossa
			on draamaa, fuskussa leikillisyyttä, buggissa vauhtia, valssissa arvokkuutta, bachatassa
			herkkyyttä ja sensuaalisuutta jne. Varmasti jokaiselle löytyy oma suosikki!
		</p>
	</div>
	<div class="items"><img src="../img/picture/mobile/annika-juuso.jpg" alt="Hanne ja Juuso" /></div>
</div>

<style lang="scss">
	.twin-view {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		width: 813px;
		/* flex-direction: row-reverse; */ /* Tällä voi vaihtaa puolta! */
	}
	.items {
		width: 373px;
		height: 600px;
		background-color: var(--color-night-blue);
		border-radius: 2px;
		border: var(--border);
		img {
			width: 373px;
		}
	}
	/*@media only screen and (max-width: 1080px){
    .twin-view {
      flex-direction: column;
    }
  }*/
</style>
