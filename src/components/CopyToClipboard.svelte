<script>
  import { onDestroy } from 'svelte'
  export let textToCopy = ''
  let className
  export { className as class }

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

<button class={`${className}`} on:click={copy}>
  {#if !copied}
    <slot name="initial">Copy</slot>
  {:else}
    <slot name="success">Copied</slot>
  {/if}
</button>
