import { z } from 'zod';

export const commentValidator = z.object({
  _id: z.string().optional(),
  userId: z.string(),
  blogId: z.string(),
  comment: z.string().default(''),
  user: z.object({
    name: z.string(),
    username: z.string(),
    avatar: z.string().optional()
  }).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  deleted: z.boolean().default(false).optional()
});

export type Comment = z.infer<typeof commentValidator>;
