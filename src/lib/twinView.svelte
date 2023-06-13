<script lang="ts">
	export let imageSrc;
	export let textContent;
</script>

<div class="twin-view">
	<div class="items1">
	</div>
	<div class="items2"></div>
</div>

<style lang="scss">

section {
  width: 752px;
  height: 609px;
}
.container-opiskelijat {
  display: flex;
  flex-direction: row;
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
