import { z, reference, type SchemaContext } from 'astro:content'

export const photoSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    published: z.boolean().default(false),
    imageAlt: z.string(),
    image: image(),
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
    tags: z.array(reference('tags')),
  })

export const tagSchema = () =>
  z.object({
    title: z.string(),
    active: z.boolean().default(false),
  })
