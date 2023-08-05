<script>
  import { generateCactus } from 'prickly-pear'
  let canvasElement
  let imagePlaceholderWrapper

  async function click() {
    generateCactus(canvasElement, { color: '#31977b' })
    imagePlaceholderWrapper.setAttribute('hidden', '')
  }

</script>

<canvas class="prickly-pear" bind:this={canvasElement} />

<div class="image-placeholder-wrapper" bind:this={imagePlaceholderWrapper}>
  <slot name="placeholder-cactus"/>
</div>

<div class="controls-row">
  <button on:click={click}>Grow Random Prickly Pear</button>
</div>


<style lang="scss">
  .prickly-pear {
    position: absolute;
    left: 0;
    top: 0;
    width: 100% !important;
    height: 100% !important;


  }

  :global(.prickly-pear ~ astro-slot > img) {
    display: none;
  }

  .controls-row {
    z-index: 1;
    padding: var(--space-2);
    position: relative;
    bottom: 0;
  }
</style>