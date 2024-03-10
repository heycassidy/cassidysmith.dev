import { defineCollection } from 'astro:content'
import { blogSchema, tagSchema, photoSchema } from '../schemas'

const photographyCollection = defineCollection({
  type: 'content',
  schema: photoSchema,
})

const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema,
})

const tagCollection = defineCollection({
  type: 'content',
  schema: tagSchema,
})

export const collections = {
  photos: photographyCollection,
  blog: blogCollection,
  tags: tagCollection,
}
