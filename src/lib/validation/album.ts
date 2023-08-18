import { z } from 'zod';

export const albumValidator = z.object({
  _id: z.string().optional(),
  userId: z.string(),
  title: z.string().default('Untitled'),
  description: z.string().default(''),
  images: z.array(
    z.object({
      title: z.string().default(''),
      image: z.string(),
      description: z.string().default(''),
      createdAt: z.string(),
    })
  ).default([]),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  deleted: z.boolean().default(false).optional()
});

export type Album = z.infer<typeof albumValidator>;
