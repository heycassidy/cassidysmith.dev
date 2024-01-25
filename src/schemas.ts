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

export const blogSchema = () =>
  z.object({
    title: z.string(),
    published: z.boolean().default(false),
    publishedDate: z.string().transform((str) => new Date(str)),
    lastModified: z.string().transform((str) => new Date(str)),
    author: z.string(),
    previewText: z.string(),
  })
