import { z } from 'zod';

export const userValidator = z.object({
  _id: z.string(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  banner: z.string().nullable().optional(),
  avatar: z.string().nullable().optional(),
  gender: z.string().default('Male'),
  status: z.string().default('Single'),
  description: z.string().default(''),
  country: z.string(),
  city: z.string(),
  birthday: z.object({
    yy: z.number(),
    mm: z.number(),
    dd: z.number(),
  }),
  education: z
    .object({
      university: z.string().optional(),
      from: z.string(),
      to: z.string(),
      description: z.string(),
    })
    .nullable()
    .optional(),
  experience: z
    .object({
      company: z.string().optional(),
      position: z.string(),
      from: z.string(),
      to: z.string(),
      location: z.string(),
      description: z.string(),
    })
    .nullable()
    .optional(),
  interests: z.array(z.string()).nullable().default([]),
  setting: z.object({
    is_enable_friend_request: z.boolean().default(true),
    is_enable_private_message: z.boolean().default(true),
    is_enable_tagging: z.boolean().default(true),
    is_enable_private_profile: z.boolean().default(true),
    is_activate_account: z.boolean().default(true),
    is_remove_ads: z.boolean().default(true),
  }),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  deleted: z.boolean().default(false).optional(),
});

export type User = z.infer<typeof userValidator>;
