<script>
  import DiceIcon from './DiceIcon.svelte';
  import { generateCactus, clearCactus } from 'prickly-pear'
  let canvasElement
  let imagePlaceholderWrapper

  async function click() {
    clearCactus()
    generateCactus(canvasElement, { color: '#31977b' })
    imagePlaceholderWrapper.setAttribute('hidden', '')
  }

</script>

<canvas class="prickly-pear" bind:this={canvasElement} role="img" aria-label="Randomly generated illustration of a prickly pear cactus" />

<div class="image-placeholder-wrapper" bind:this={imagePlaceholderWrapper}>
  <slot name="placeholder-cactus"/>
</div>

<div class="controls-row">
  <button
    class="regenerate-button"
    on:click={click}
  >
    <DiceIcon /> Randomize Cactus
  </button>
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
    display: flex;
    align-items: center;
    gap: var(--space-2);
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

    @media (hover) {
      &:global(:hover .dice) {
        animation: dice-spin infinite 0.4s linear;
      }
    }
  }

  @keyframes dice-spin {
    0% {
      transform: rotate3d(1, 1, 1, 0deg);
    }
    100%  {
      transform: rotate3d(5, 10, 0, 360deg);
    }
  }
</style>