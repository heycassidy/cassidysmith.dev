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
    // Subtitle shows only on blog post page
    subtitle: z.string(),
    // Preview text shows as subtitle on index page, but not blog post page
    previewText: z.string(),
    published: z.boolean().default(false),
    publishedAt: z.date(),
    modifiedAt: z.date(),
    author: z.string(),
    readingTime: z.string().optional(),
    tags: z.array(z.string()).optional(),
  })
