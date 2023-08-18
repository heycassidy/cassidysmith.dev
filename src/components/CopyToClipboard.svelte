<script>
  import { onDestroy } from 'svelte'
  import { ClipboardDocument, Check } from '@steeze-ui/heroicons'
  import { Icon } from '@steeze-ui/svelte-icon'

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
    <Icon src={ClipboardDocument} theme="mini" />
    {labelText}
  {:else}
    <Icon src={Check} theme="mini" />
    {successText}
  {/if}
</button>
