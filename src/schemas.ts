import { z } from 'astro:content'

export const photoSchema = ({ image }) =>
  z.object({
    title: z.string(),
    caption: z.string(),
    draft: z.boolean().default(true),
    sortOrder: z.number(),
    image: z.object({
      src: image(),
      description: z.string(),
    }),
  })
