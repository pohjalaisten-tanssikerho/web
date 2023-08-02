<script lang="ts">
	export let imageSrc;
	export let textContent;
	export let reverse = false;
</script>

<div class="twin-view">
	{#if reverse}
	  <div class="right">
		<img src="{imageSrc}" alt="Image" />
	  </div>
	  <div class="left">
		<p>{textContent}</p>
	  </div>
	{:else}
	  <div class="left">
		<p>{textContent}</p>
	  </div>
	  <div class="right">
		<img src="{imageSrc}" alt="Image" />
	  </div>
	{/if}
  </div>

<style lang="scss">
.twin-view {
	display: flex;
	flex-direction: row;
	width: 752px;
	height: 609px;
	align-items: flex-start;

}

.left {
	flex: 1;
	height: 605px;
	width: 605px;
	margin-bottom: 20px;
	white-space: pre-wrap;
	font-size: 15px;
	line-height: 1.6em;
	color: #e9f3ff;
	padding: 16px 0;
	background: rgba(0,0,0,.47);
	overflow: auto;
	margin-bottom: 36px;
}

.right {
	flex: 1;
}

@media only screen and (max-width: 768px){
 /*for mobile phones */
 .twin-view {
	display: flex;
	flex-direction: column;
 }
}

.twin-view img {
	height: 398px;
	width: 398px;

}

</style>