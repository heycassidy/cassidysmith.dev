<script lang="ts">
  import { css, cx } from '@styled-system/css'
  import button from '@recipes/button'
  import focusRing from '@recipes/focusRing'
  import DiceIcon from './DiceIcon.svelte'
  import type { Snippet } from 'svelte'
  import { generateCactus, clearCactus } from 'prickly-pear'
  let canvasElement: HTMLCanvasElement
  let imagePlaceholderWrapper: HTMLDivElement

  interface Props {
    placeholderCactus: Snippet
  }

  let { placeholderCactus }: Props = $props()

  async function click() {
    clearCactus()
    generateCactus(canvasElement, { color: '#687d27' })
    imagePlaceholderWrapper.setAttribute('hidden', '')
  }
</script>

<canvas
  class={css({
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100% !important',
    height: 'auto !important',
    aspectRatio: '1',
  })}
  bind:this={canvasElement}
  aria-label="Randomly generated illustration of a prickly pear cactus"
></canvas>

<div bind:this={imagePlaceholderWrapper}>
  {@render placeholderCactus()}
</div>

<div
  class={css({
    zIndex: 1,
    padding: 'bento.padding',
    position: 'relative',
    bottom: '0',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  })}
>
  <button
    class={[
      css({
        '&&': {
          gap: '2',
        },
        _hover: {
          '& .dice': {
            animation: 'diceSpin infinite 0.4s linear',
          },
        },
      }),
      button({ material: 'dark-glass' }),
      focusRing(),
    ].join(' ')}
    onclick={click}
  >
    <DiceIcon /><span>Grow a random cactus</span>
  </button>
</div>
