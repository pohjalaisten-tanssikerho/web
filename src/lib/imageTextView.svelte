<!-- component for teachers div: it places image on top and text to bottom -->
<script>
	export let imageSrc;
	export let textContent;
  export let heading = "Default heading";
</script>

	<div class="content">
		<div class="top">
			<img src="{imageSrc}" alt="Image">
		</div>
    <div class="middle">
      <h2>{heading}</h2>
    </div>
		<div class="bottom">
			<p>{textContent}</p>
		</div>
	</div>

<style>
	  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
    .top {
      padding-top: 1.2em;
    }
    .top img {
      width: 360px;
      height: 460px;
      border: 2px solid #0b3c5d;
    }
    .middle {
      margin-top: 1.2em;
    }
    .bottom {
      width: 380px;
    }
</style>