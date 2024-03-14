import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email().min(1).max(100),
	message: z.string().min(1).max(10000)
});

export type FormSchema = typeof formSchema;
