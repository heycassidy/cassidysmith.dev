import { defineCollection } from 'astro:content'
import { blogSchema, tagSchema, photoSchema } from './schemas'
import { glob } from 'astro/loaders'

const photographyCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/photos' }),
  schema: photoSchema,
})

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/blog' }),
  schema: blogSchema,
})

const tagCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/tags' }),
  schema: tagSchema,
})

export const collections = {
  photos: photographyCollection,
  blog: blogCollection,
  tags: tagCollection,
}
