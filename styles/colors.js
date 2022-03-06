import chroma from "chroma-js"


// https://app.atmos.style/
const atmosColors = {

  // Primary
  primary: {
    0: '#fcfcfd',
    100: '#f7f5ff',
    175: '#ede8ff',
    275: '#ddd5f8',
    350: '#b8afdc',
    425: '#988ec5',
    525: '#746aa9',
    600: '#564d95',
    700: '#48417f',
    775: '#352f5f',
    875: '#231f3f',
    950: '#130e22',
  },

  // Secondary
  secondary: {
    0: '#f6fefb',
    100: '#d6fff0',
    175: '#a0fdde',
    275: '#6bf1c8',
    350: '#37cba3',
    425: '#009a78',
    525: '#018165',
    600: '#00614b',
    700: '#005340',
    775: '#013d2e',
    875: '#04281e',
    950: '#04140f',
  },

  // Info
  info: {
    0: '#fcfcfd',
    100: '#f6f6f9',
    175: '#eae9ff',
    275: '#d8d6fe',
    350: '#aeaeff',
    425: '#777fe9',
    525: '#5868de',
    600: '#394eb7',
    700: '#2b3c91',
    775: '#223076',
    875: '#181f4e',
    950: '#0d0e2b',
  },

  // AccentOne
  accentOne: {
    0: '#fefcfb',
    100: '#fff3ed',
    175: '#ffe5d8',
    275: '#ffceb5',
    350: '#ff9864',
    425: '#e05b12',
    525: '#c34800',
    600: '#953500',
    700: '#7e2c00',
    775: '#5c2201',
    875: '#3a1904',
    950: '#1b0e04',
  },

  // AccentTwo
  accentTwo: {
    0: '#fdfdf4',
    100: '#f9f9bc',
    175: '#ebf16a',
    275: '#d8e148',
    350: '#b3bb38',
    425: '#868c20',
    525: '#707619',
    600: '#555910',
    700: '#474b0c',
    775: '#353709',
    875: '#232409',
    950: '#121106',
  },

  // AccentThree
  accentThree: {
    0: '#fdfcfc',
    100: '#fcf4f6',
    175: '#f8e6eb',
    275: '#eed2da',
    350: '#d0aab6',
    425: '#a87a89',
    525: '#8e6673',
    600: '#6f4d58',
    700: '#5b4049',
    775: '#442f36',
    875: '#2d1f23',
    950: '#170e11',
  },

  // Success
  success: {
    0: '#f7fef9',
    100: '#d4ffe3',
    175: '#a1ffc4',
    275: '#5ef4a2',
    350: '#37cd81',
    425: '#009d5c',
    525: '#01824c',
    600: '#006338',
    700: '#00542f',
    775: '#013e21',
    875: '#042915',
    950: '#04140a',
  },

  // Warning
  warning: {
    0: '#fefcf5',
    100: '#fff6c9',
    175: '#ffeb71',
    275: '#eeda45',
    350: '#c6b529',
    425: '#958701',
    525: '#7d7200',
    600: '#5f5600',
    700: '#504800',
    775: '#3b3500',
    875: '#272303',
    950: '#141103',
  },

  // Danger
  danger: {
    0: '#fefcfb',
    100: '#fbf5f3',
    175: '#fce6de',
    275: '#ffcdbd',
    350: '#ff9778',
    425: '#ec4d29',
    525: '#da1e01',
    600: '#b11200',
    700: '#8c1904',
    775: '#6d1a07',
    875: '#401404',
    950: '#1d0c04',
  },

  // Neutral
  neutral: {
    0: '#fefcfb',
    100: '#f8f6f5',
    175: '#edeae9',
    275: '#dbd9d7',
    350: '#b7b3b1',
    425: '#908b89',
    525: '#7a7371',
    600: '#645a5c',
    700: '#4f464a',
    775: '#3b3239',
    875: '#262129',
    950: '#130f19',
  },
}

let palettes = {}

for (const colorFamily in atmosColors) {
  for (const colorValue in atmosColors[colorFamily]) {
    palettes[`${colorFamily}${colorValue}`] = chroma(atmosColors[colorFamily][colorValue])
  }
}

export { palettes }