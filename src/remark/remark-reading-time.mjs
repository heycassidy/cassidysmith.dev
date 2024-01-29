import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage, { wordsPerMinute: 300 })

    const readingTimeMinutes = Math.ceil(readingTime.minutes.toFixed(2))
    data.astro.frontmatter.readingTime = `Read in about ${readingTimeMinutes} ${
      readingTimeMinutes !== 1 ? 'minutes' : 'minute'
    }`
  }
}
