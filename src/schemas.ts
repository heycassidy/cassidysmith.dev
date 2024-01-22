import { z, type SchemaContext } from 'astro:content'

export const photoSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    published: z.boolean().default(false),
    position: z.number(),
    image: z.object({
      src: image(),
      description: z.string(),
    }),
  })
