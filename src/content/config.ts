import { z, defineCollection } from 'astro:content'
import { photoSchema } from '../schemas'

const photographyCollection = defineCollection({
  type: 'content',
  schema: photoSchema,
})

export const collections = {
  photos: photographyCollection,
}
