import { defineCollection } from 'astro:content'
import { blogSchema, photoSchema } from '../schemas'

const photographyCollection = defineCollection({
  type: 'content',
  schema: photoSchema,
})

const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema,
})

export const collections = {
  photos: photographyCollection,
  blog: blogCollection,
}
