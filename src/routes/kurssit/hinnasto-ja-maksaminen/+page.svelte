<script>
	export let prices;
  
	async function loadPrices() {
	  const response = await fetch('https://raw.githubusercontent.com/pohjalaisten-tanssikerho/web-page/master/data/prices.json');
	  const data = await response.json();
	  prices = Object.fromEntries(
		Object.entries(data).map(([category, values]) => [
		  category,
		  values.map((value) => ({ price: value.price, ref: value.ref })),
		])
	  );
	}
  
	loadPrices();
</script>



<h1 id="hinnasto-ja-maksaminen">Hinnasto ja maksaminen</h1>
<p>Maksu tapahtuu tilisiirrolla tilille:</p>
<pre>
  <code>
    Holvi FI51 7997 7998 0564 23
    BIC HOLVFIHH
  </code>
</pre>
<p>Muista käyttää viitettä!</p>
<h2 id="kausikurssien-hinnasto">Kausikurssien hinnasto</h2>
{#if prices}
<table class="price-table">
	<tbody>
	  <tr>
		<th colspan="2"></th>
		<th>Alkeet</th>
		<th>Alkeisjatko</th>
		<th>Jatko</th>
	  </tr>
	  {#each Object.entries(prices) as [category, values]}
		<tr>
		  <th rowspan="2">{category}</th>
		  <td class="dark-background">hinta</td>
		  {#each values as value}
			<td class="dark-background">{value.price}</td>
		  {/each}
		</tr>
		<tr>
		  <td>viite</td>
		  {#each values as value}
			<td>{value.ref}</td>
		  {/each}
		</tr>
	  {/each}
	</tbody>
  </table>
{:else}
  <p>Hintoja päivitetään. Yritä myöhemmin uudelleen.</p>
{/if}
<p>Ota talteen kuitti ja pidä se mukana kursseilla, kunnes maksut on tarkistettu.</p>
<div class="footnote">
	* Osakuntalaisuudella tarkoitetaan seuraavia osakunnan jäseniä: <a href="http://vasa.nation.fi"
		>Vasa Nation</a
	>
	(VN), <a href="http://pohjoispohjalaiset.fi">Pohjois-Pohjalanen osakunta</a> (PPO) ja
	<a href="http://epo.osakunta.fi">Etelä-Pohjalainen osakunta</a> (EPO). Lisäksi osakunnan jäsenen on
	oltava kirjoilla Helsingin yliopistossa, Aalto-yliopistossa tai muussa korkeakoulussa, jotta on oikeutettu
	alennettuun hintaan.
</div>
<div class="footnote">** Myös jatko-opiskelijat.</div>
