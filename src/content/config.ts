import { z, defineCollection } from 'astro:content'
import { photoSchema } from '../schemas'

const photos = defineCollection({
  type: 'content',
  schema: photoSchema,
})

export const collections = {
  photos: photos,
}
