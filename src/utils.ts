import type { CollectionEntry, CollectionKey } from 'astro:content'

export const publishedEntries = (
  entry: CollectionEntry<CollectionKey>
): boolean => import.meta.env.DEV || entry.data.published

export const sortByPosition = (
  entryA: CollectionEntry<CollectionKey>,
  entryB: CollectionEntry<CollectionKey>
): number => {
  if ('position' in entryA.data && 'position' in entryB.data) {
    return entryA.data.position - entryB.data.position
  }
  return 0
}
