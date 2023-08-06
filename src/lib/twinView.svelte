<script lang="ts">
	export let imageSrc;
	export let textContent;
	export let reverse = false;
</script>

<div class="twin-view">
	<div class="content">
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
</div>

<style lang="scss">
.twin-view {
	margin-bottom: 36px;
}

.content {
	display: flex;
	align-items: center;
	border: 2px solid #0b3c5d;
	border-radius: 4px;
	overflow: hidden;
}

.left {
    width: 373px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 16px 0;
    background: rgba(0, 0, 0, 0.47);
    overflow: auto;
    border-right: 2px solid #0b3c5d; /* Add a border to the right side */
}

.right {
	align-items: stretch;
    border-left: 2px solid #0b3c5d; /* Add a border to the left side */
}

/* Additional styling for text content and images if needed */
</style>

