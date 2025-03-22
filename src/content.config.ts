import { defineCollection } from 'astro:content'
import { blogSchema, tagSchema, photoSchema } from './schemas'
import { glob, file } from 'astro/loaders'

const photos = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/photos' }),
  schema: photoSchema,
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/blog' }),
  schema: blogSchema,
})

const tags = defineCollection({
  // loader: glob({ pattern: '**/*.md', base: './src/data/tags' }),
  loader: file('src/data/tags.json'),
  schema: tagSchema,
})

export const collections = { photos, blog, tags }
