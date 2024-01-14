import { z, defineCollection } from 'astro:content'
import { photoSchema } from '../schemas'

const photography = defineCollection({
  type: 'content',
  schema: photoSchema,
})

export const collections = {
  photography,
}
