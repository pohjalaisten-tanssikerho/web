<script>
  export let imgSrc = ''
</script>

<div class="twin-view">
  <div class="items"><slot></slot></div>
  <div class="items">{ imgSrc }</div>
</div>

<style>
  .twin-view {
    display: flex;
    justify-content: center;
    /* flex-direction: row-reverse; */  /* Tällä voi vaihtaa puolta! */
  }
  .items {
    background: red;
    width: 373px;
    height: calc(573px + 16px + 16px);
    border: 2px solid orange;
  }
</style>
