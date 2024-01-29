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
    subtitle: z.string().optional(),
    published: z.boolean().default(false),
    publishedDate: z.date(),
    lastModified: z.date(),
    author: z.string(),
    previewText: z.string(),
    readingTime: z.string().optional(),
  })
