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
  <button class="regenerate-button" on:click={click}>Randomize Cactus</button>
</div>


<style lang="scss">
  @import '../styles/mixins.scss';
  
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
    padding: calc(var(--fluid-bento-padding) / 2);
    position: relative;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .regenerate-button {
    line-height: 1;
    cursor: pointer;
    border-radius: calc(var(--fluid-bento-radius) - var(--fluid-bento-padding) / 4);
    border: none;
    padding: var(--space-2) var(--space-3);
    background-color: transparentize(black, $amount: 0.4);
    backdrop-filter: blur(8px);
    color: white;
    font-family: var(--font-syne);
    font-weight: 710;
    letter-spacing: 0.05ch;
    transition:
      color 0.2s,
      background-color 0.2s;

    &:hover {
      background-color: transparentize(black, $amount: 0.6);
    }
    &:active, &:hover:active {
      background-color: transparentize(black, $amount: 0.2);
    }
    &:focus {
      @include focus-outline(black);
    }
  }
</style>