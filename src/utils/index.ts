import type { CollectionEntry, CollectionKey } from 'astro:content'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import relativeTime from 'dayjs/plugin/relativeTime'

export const entryIsPublished = (
  entry: CollectionEntry<'blog' | 'photos'>
): boolean => import.meta.env.DEV || entry.data.published

export const entryHasTag =
  (tag: CollectionEntry<'tags'>) =>
  (entry: CollectionEntry<'blog'>): boolean =>
    entry.data.tags.some((entryTag) => entryTag.id === tag.id)

export const tagIsActive = (tag: CollectionEntry<'tags'>): boolean =>
  import.meta.env.DEV || tag.data.active

export const sortByPosition = (
  entryA: CollectionEntry<CollectionKey>,
  entryB: CollectionEntry<CollectionKey>
): number => {
  if ('position' in entryA.data && 'position' in entryB.data) {
    return entryA.data.position - entryB.data.position
  }
  return 0
}

export const sortByPublishedAt = (
  entryA: CollectionEntry<CollectionKey>,
  entryB: CollectionEntry<CollectionKey>
): number => {
  dayjs.extend(utc)

  if ('publishedAt' in entryA.data && 'publishedAt' in entryB.data) {
    return (
      dayjs(entryA.data.publishedAt).valueOf() -
      dayjs(entryB.data.publishedAt).valueOf()
    )
  }

  return 0
}

export const friendlyUTCDate = (date: Date): string => {
  dayjs.extend(utc)

  return dayjs(date).utc().format('MMMM D, YYYY')
}

// Doesn't work in SSG !!
export const relativeDateTime = (date: Date): string => {
  dayjs.extend(relativeTime)

  return dayjs(date).fromNow()
}

export const isSameDay = (dateA: Date, dateB: Date): boolean => {
  dayjs.extend(utc)

  return dayjs(dateA).isSame(dayjs(dateB), 'day')
}

export const isRelativeURL = (url: string): boolean => {
  try {
    // Attempt to create a URL object with the given URL
    const parsedURL = new URL(url)

    // If the protocol is present (e.g., http, https), it's an absolute URL
    return parsedURL.protocol === null
  } catch (error) {
    // If creating the URL object throws an error, it's likely a relative URL
    return true
  }
}

export const isExternalURL = (url: string, domain: string): boolean => {
  // If the URL is relative, it's considered internal
  if (isRelativeURL(url)) {
    return false
  }

  // Remove any trailing slashes from the domain
  const normalizedDomain = domain.endsWith('/') ? domain.slice(0, -1) : domain

  try {
    // Create URL objects for both the given URL and the domain
    const urlObj = new URL(url)
    const domainObj = new URL(normalizedDomain)

    // Compare the hostnames of the URL and the domain
    return urlObj.hostname !== domainObj.hostname
  } catch (error) {
    // If creating the URL objects throws an error, consider the URL as external
    return true
  }
}
