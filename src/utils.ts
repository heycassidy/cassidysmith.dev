import type { CollectionEntry, CollectionKey } from 'astro:content'

export const publishedEntries = (
  entry: CollectionEntry<CollectionKey>
): boolean => entry.data.published

export const sortByPosition = (
  entryA: CollectionEntry<CollectionKey>,
  entryB: CollectionEntry<CollectionKey>
): number => entryA.data.position - entryB.data.position
