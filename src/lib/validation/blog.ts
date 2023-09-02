import { z } from 'zod';

export const blogValidator = z.object({
  _id: z.string().optional(),
  title: z.string().default(''),
  ititle: z.string().default(''),
  tag: z.string().default(''),
  banner: z.string().default(''),
  body: z.string().default(''),
  userId: z.string(),
  user: z.object({
    name: z.string(),
    username: z.string()
  }).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  deleted: z.boolean().default(false).optional()
});

export type Blog = z.infer<typeof blogValidator>;
