import { z } from 'zod';

export const userValidator = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string(),
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
});

export type User = z.infer<typeof userValidator>;
