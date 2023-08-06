<script lang="ts">
	export let imageSrc;
	export let textContent;
	export let reverse = false;
</script>

<div class="twin-view">
	<div class="content">
		<div class="left">
			<p>{textContent}</p>
		</div>
		<div class="right">
			<img src="{imageSrc}" alt="Image" />
		</div>
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
	flex: 1;
	align-self: stretch;
	width: 50%;
	background: rgba(0, 0, 0, 0.47);
	border-right: 1px solid #0b3c5d;
}

.right {
	flex: 1;
	align-self: stretch;
	width: 50%;
	border-left: 1px solid #0b3c5d;
}

/* Additional styling for text content and images if needed */
</style>
