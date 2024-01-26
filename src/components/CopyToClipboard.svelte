<script>
  import { onDestroy } from 'svelte'
  export let textToCopy = ''

  let copied = false
  let resetTimeout

  function copy() {
    navigator.clipboard.writeText(textToCopy)
    copied = true
    resetTimeout = setTimeout(reset, 5000)
  }

  function reset() {
    copied = false
    clearTimeout(resetTimeout)
  }

  onDestroy(() => {
    clearTimeout(resetTimeout)
  })
</script>

<button class="copy-button" on:click={copy}>
  {#if !copied}
    <slot name="initial">Copy</slot>
  {:else}
    <slot name="success">Copied</slot>
  {/if}
</button>

<style lang="scss">
  @import '../styles/mixins.scss';

  @include colorModeStyles(light) {
    .copy-button {
      --color-button-text: var(--color-tertiary-775);
      --color-button-background: var(--color-tertiary-275);
      --color-button-hover-text: var(--color-tertiary-950);
      --color-button-hover-background: var(--color-tertiary-350);
    }
  }

  .copy-button {
    @include button;

    :global(svg) {
      width: 0.9em;
      height: auto;
      flex-shrink: 0;
    }
  }
</style>
