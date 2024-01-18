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

<button class="button" on:click={copy}>
  {#if !copied}
    <slot name="initial">Copy</slot>
  {:else}
    <slot name="success">Copied</slot>
  {/if}
</button>

<style lang="scss">
  @import '../styles/mixins.scss';

  .button {
    @include button;

    color: var(--color-secondary-775);
    background-color: var(--color-neutral-275);
    &:hover {
      color: var(--color-secondary-600);
      background-color: var(--color-neutral-100);
    }
    &:active,
    &:hover:active {
      color: white;
      background-color: var(--color-accent-one-525);
    }
    :global(svg) {
      width: 0.9em;
      height: auto;
      flex-shrink: 0;
    }
  }
</style>
