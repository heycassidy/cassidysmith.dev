<script lang="ts">
  import DiceIcon from './DiceIcon.svelte'
  import { type Snippet } from 'svelte'
  import { generateCactus, clearCactus } from 'prickly-pear'
  let canvasElement: HTMLCanvasElement
  let imagePlaceholderWrapper: HTMLDivElement

  interface Props {
    placeholderCactus: Snippet
  }

  let { placeholderCactus }: Props = $props()

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
></canvas>

<div class="image-placeholder-wrapper" bind:this={imagePlaceholderWrapper}>
  {@render placeholderCactus()}
</div>

<div class="controls-row">
  <button class="regenerate-button" onclick={click}>
    <DiceIcon /> Grow a random cactus
  </button>
</div>

<style lang="scss">
  @use '../styles/mixins.scss';

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
    @include mixins.button;
    gap: var(--space-2);
    backdrop-filter: blur(8px);

    @media (hover) {
      &:global(:hover .dice) {
        animation: dice-spin infinite 0.4s linear;
      }
    }
  }

  @include mixins.color-mode(light) {
    .regenerate-button {
      --color-button-text: white;
      --color-button-background: color-mix(in srgb, black 40%, transparent);
      --color-button-hover-text: white;
      --color-button-hover-background: color-mix(
        in srgb,
        black 60%,
        transparent
      );
      --color-button-active-text: white;
      --color-button-active-background: color-mix(
        in srgb,
        black 20%,
        transparent
      );
      --color-focus-outline: black;
    }
  }
  @include mixins.color-mode(dark) {
    .regenerate-button {
      --color-button-text: color-mix(in srgb, white 80%, transparent);
      --color-button-background: color-mix(in srgb, black 40%, transparent);
      --color-button-hover-text: color-mix(in srgb, white 100%, transparent);
      --color-button-hover-background: color-mix(
        in srgb,
        black 60%,
        transparent
      );
      --color-button-active-text: color-mix(in srgb, white 40%, transparent);
      --color-button-active-background: color-mix(
        in srgb,
        black 20%,
        transparent
      );
      --color-focus-outline: white;
      box-shadow: 0 0 0 2px color-mix(in srgb, white 10%, transparent);

      &:hover {
        box-shadow: 0 0 0 2px color-mix(in srgb, white 20%, transparent);
      }
      &:active,
      &:hover:active {
        box-shadow: 0 0 0 2px color-mix(in srgb, white 10%, transparent);
      }
    }
    canvas {
      filter: hue-rotate(21deg) brightness(0.4) saturate(1.8);
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
