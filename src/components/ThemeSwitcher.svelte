<!-- Thanks Adam Argyle! https://web.dev/articles/building/a-theme-switch-component -->
<script lang="ts">
  import { css } from '@styled-system/css'
  import focusRing from '@recipes/focusRing'
  let theme = $state(document.documentElement.getAttribute('data-color-mode'))

  function toggle() {
    const prevTheme = theme

    theme = prevTheme === 'dark' ? 'light' : 'dark'

    document.documentElement.setAttribute('data-color-mode', theme)
    localStorage.setItem('theme', theme)
  }
</script>

<button
  id="theme-toggle"
  title="Toggles light & dark"
  aria-label={theme}
  aria-live="polite"
  onclick={toggle}
  class={[
    css({
      '--size': 'sizes.6',
      _noHover: {
        '--size': 'sizes.8',
      },

      _light: {
        '--icon-fill': 'colors.orange.525',
        '&:hover, &:focus-visible': {
          '--icon-fill': 'colors.orange.650',
        },
      },

      _dark: {
        '--icon-fill': 'colors.gold.400',
        '&:hover, &:focus-visible': {
          '--icon-fill': 'colors.gold.275',
        },

        '& [data-sun]': {
          transform: 'scale(1.75)',
        },
        '& [data-sun-beams]': {
          opacity: '0',
        },
        '& [data-moon] > circle': {
          transform: 'translateX(0)',
          cx: '372',
        },
      },

      _motionSafe: {
        _light: {
          '& [data-sun]': {
            transition: 'transform 0.5s cubic-bezier(0.5, 1.25, 0.75, 1.25)',
          },
          '& [data-sun-beams]': {
            transition: `
              transform 0.5s cubic-bezier(0.5, 1.5, 0.75, 1.25),
              opacity 0.5s cubic-bezier(0.25, 0, 0.3, 1)
            `,
          },
          '& [data-moon] > circle': {
            transform: 'translateX(0)',
            cx: '512',
            transition: 'cx 0.25s cubic-bezier(0, 0, 0, 1)',
          },
        },

        _dark: {
          '& [data-sun]': {
            transform: 'scale(1.75)',
            transitionTimingFunction: 'cubic-bezier(0.25, 0, 0.3, 1)',
            transitionDuration: '0.25s',
          },
          '& [data-sun-beams]': {
            transform: 'rotateZ(-25deg)',
            transitionDuration: '0.15s',
          },
          '& [data-moon] > circle': {
            transitionDelay: '0.25s',
            transitionDuration: '0.5s',
          },
        },
      },

      color: 'var(--icon-fill)',
      inlineSize: 'var(--size)',
      blockSize: 'var(--size)',
      aspectRatio: '1',
      borderRadius: '50%',
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'transparent',

      '& [data-sun], & [data-moon], & [data-sun-beams]': {
        transformOrigin: 'center center',
      },
    }),

    focusRing(),
  ].join(' ')}
>
  <svg
    data-sun-and-moon
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 512 512"
    class={css({
      inlineSize: '100%',
      blockSize: '100%',
      strokeLinecap: 'round',
    })}
  >
    <!-- .sun -->
    <circle
      data-sun
      cx="256"
      cy="256"
      r="100"
      mask="url(#moon-mask)"
      fill="currentColor"
    />

    <!-- .sun-beams -->
    <g data-sun-beams fill="currentColor">
      <path d="M234 26h44v92h-44z" />
      <path d="M234 394h44v92h-44z" />
      <path d="m338.025 142.857 65.054-65.054 31.113 31.113-65.054 65.054z" />
      <path d="m77.815 403.074 65.054-65.054 31.113 31.113-65.054 65.054z" />
      <path d="M394 234h92v44h-92z" />
      <path d="M26 234h92v44H26z" />
      <path d="m338.029 369.14 31.112-31.113 65.054 65.054-31.112 31.112z" />
      <path d="m77.802 108.92 31.113-31.113 65.054 65.054-31.113 31.112z" />
    </g>

    <!-- .moon -->
    <mask data-moon id="moon-mask">
      <rect x="0" y="0" width="100%" height="100%" fill="white" />
      <circle cx="512" cy="212" r="128" fill="black" />
    </mask>
  </svg>
</button>
