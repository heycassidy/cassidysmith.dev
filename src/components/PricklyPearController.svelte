<script>
  import DiceIcon from './DiceIcon.svelte'
  import { generateCactus, clearCactus } from 'prickly-pear'
  let canvasElement
  let imagePlaceholderWrapper

  async function click() {
    clearCactus()
    generateCactus(canvasElement, { color: '#31977b' })
    imagePlaceholderWrapper.setAttribute('hidden', '')
  }
</script>

<canvas
  class="prickly-pear"
  bind:this={canvasElement}
  aria-label="Randomly generated illustration of a prickly pear cactus"
/>

<div class="image-placeholder-wrapper" bind:this={imagePlaceholderWrapper}>
  <slot name="placeholder-cactus" />
</div>

<div class="controls-row">
  <button class="regenerate-button" on:click={click}>
    <DiceIcon /> Grow a random cactus
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
    padding: var(--fluid-bento-padding);
    position: relative;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .regenerate-button {
    @include button;

    gap: var(--space-2);
    backdrop-filter: blur(8px);

    color: white;
    background-color: transparentize(black, $amount: 0.4);

    &:hover {
      background-color: transparentize(black, $amount: 0.6);
    }
    &:active,
    &:hover:active {
      background-color: transparentize(black, $amount: 0.2);
    }
    &:focus-visible {
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
    100% {
      transform: rotate3d(5, 10, 0, 360deg);
    }
  }
</style>
