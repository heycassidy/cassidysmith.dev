<!-- Thanks Adam Argyle!! https://web.dev/articles/building/a-theme-switch-component -->

<script>
  import { portal } from 'svelte-portal'
  let theme = $state(document.documentElement.getAttribute('data-theme'))

  let portalElement = document.querySelector('#theme-switcher-portal')

  function toggle(event) {
    const prevTheme = theme

    theme = prevTheme === 'dark' ? 'light' : 'dark'

    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }
</script>

{#if portalElement}
  <button
    class="theme-toggle"
    id="theme-toggle"
    title="Toggles light & dark"
    aria-label={theme}
    aria-live="polite"
    onclick={toggle}
    use:portal={'#theme-switcher-portal'}
  >
    <svg
      class="sun-and-moon"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 512 512"
    >
      <circle
        class="sun"
        cx="256"
        cy="256"
        r="100"
        mask="url(#moon-mask)"
        fill="currentColor"
      />

      <g class="sun-beams" fill="currentColor">
        <path d="M234 26h44v92h-44z" />
        <path d="M234 394h44v92h-44z" />
        <path d="m338.025 142.857 65.054-65.054 31.113 31.113-65.054 65.054z" />
        <path d="m77.815 403.074 65.054-65.054 31.113 31.113-65.054 65.054z" />
        <path d="M394 234h92v44h-92z" />
        <path d="M26 234h92v44H26z" />
        <path d="m338.029 369.14 31.112-31.113 65.054 65.054-31.112 31.112z" />
        <path d="m77.802 108.92 31.113-31.113 65.054 65.054-31.113 31.112z" />
      </g>

      <mask class="moon" id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="512" cy="212" r="128" fill="black" />
      </mask>
    </svg>
  </button>
{/if}

<style lang="scss">
  @use '../styles/mixins.scss';

  .theme-toggle {
    --size: 1.5rem;
    --icon-fill: var(--color-accent-one-525);
    --icon-fill-hover: var(--color-accent-one-600);

    color: var(--icon-fill);

    background: none;
    border: none;
    padding: 0;

    inline-size: var(--size);
    block-size: var(--size);
    aspect-ratio: 1;
    border-radius: 50%;

    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    outline-offset: 5px;

    @media (hover: none) {
      --size: 2rem;
    }

    & > svg {
      inline-size: 100%;
      block-size: 100%;
      stroke-linecap: round;
    }

    &:focus-visible {
      @include mixins.focus-outline;
    }
  }

  .sun-and-moon {
    & > :is(:global(.moon, .sun, .sun-beams)) {
      transform-origin: center center;
    }

    & > :is(:global(.moon, .sun)) {
      fill: var(--icon-fill);

      @at-root .theme-toggle:is(:global(:hover, :focus-visible)) > & {
        fill: var(--icon-fill-hover);
      }
    }

    & > .sun-beams {
      fill: var(--icon-fill);

      @at-root .theme-toggle:is(:global(:hover, :focus-visible)) & {
        fill: var(--icon-fill-hover);
      }
    }

    @at-root :global(:root[data-theme='dark']) & {
      --icon-fill: var(--color-primary-350);
      --icon-fill-hover: var(--color-primary-275);

      & > .sun {
        transform: scale(1.75);
      }

      & > .sun-beams {
        opacity: 0;
      }

      & > .moon > circle {
        transform: translateX(-147px);

        @supports (cx: 1) {
          transform: translateX(0);
          cx: 372;
        }
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      & > .sun {
        transition: transform 0.5s cubic-bezier(0.5, 1.25, 0.75, 1.25);
      }
      & > .sun-beams {
        transition:
          transform 0.5s cubic-bezier(0.5, 1.5, 0.75, 1.25),
          opacity 0.5s cubic-bezier(0.25, 0, 0.3, 1);
      }
      & .moon > circle {
        transform: translateX(-7px);
        transition: transform 0.25s cubic-bezier(0, 0, 0, 1);

        @supports (cx: 1) {
          transform: translateX(0);
          cx: 512;
          transition: cx 0.25s cubic-bezier(0, 0, 0, 1);
        }
      }
      @at-root :global(:root[data-theme='dark']) & {
        & > .sun {
          transform: scale(1.75);
          transition-timing-function: cubic-bezier(0.25, 0, 0.3, 1);
          transition-duration: 0.25s;
        }
        & > .sun-beams {
          transform: rotateZ(-25deg);
          transition-duration: 0.15s;
        }
        & > .moon > circle {
          transition-delay: 0.25s;
          transition-duration: 0.5s;
        }
      }
    }
  }
</style>
