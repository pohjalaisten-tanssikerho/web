<script lang="ts">
	export let imageSrc;
	export let textContent;
	export let reverse = false;
</script>

<div class="twin-view">
	<div class="content-container">
		<div class="text-container">
			<p>{textContent}</p>
		</div>
		<div class="image-container">
			<img src="{imageSrc}" alt=" " />
		</div>
	</div>
</div>

<style lang="scss">
.twin-view {
	border: 2px solid #0b3c5d; /* Add a border to the wrapper */
	border-radius: 4px;
	margin: 0 auto;
	margin-bottom: 36px;
	overflow: auto;
	width: 100%;
}

.content-container {
	display: flex;
	align-items: stretch;
	width: 100%;
}

.text-container {
    align-self: stretch;
	flex: 1;
	padding: 16px 0;
	background: rgba(0, 0, 0, 0.47);
	border-right: 2px solid #0b3c5d; /* Add a border to the right side */
	box-sizing: border-box;
}

.image-container {
    align-self: stretch;
	flex: 1;
	box-sizing: border-box;
}

/* Additional styling for text content and images if needed */
</style>
