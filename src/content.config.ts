import { defineCollection } from 'astro:content'
import { blogSchema, tagSchema, photoSchema } from './schemas'
import { glob, file } from 'astro/loaders'

const photos = defineCollection({
  loader: file('src/data/photos.json'),
  schema: photoSchema,
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/blog' }),
  schema: blogSchema,
})

const tags = defineCollection({
  loader: file('src/data/tags.json'),
  schema: tagSchema,
})

export const collections = { photos, blog, tags }
