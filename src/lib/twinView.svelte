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

</style>
