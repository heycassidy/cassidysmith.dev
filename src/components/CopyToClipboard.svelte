<script>
  import { onDestroy } from 'svelte'
  import Icon from '@iconify/svelte'

  export let textToCopy = ''
  export let labelText = 'Copy'
  export let successText = 'Copied!'
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
    <Icon icon="clarity:copy-to-clipboard-line" />
    {labelText}
  {:else}
    <Icon icon="clarity:check-line" />
    {successText}
  {/if}
</button>
