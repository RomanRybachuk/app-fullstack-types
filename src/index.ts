import { z } from "zod";

export const CreateUserSchema = z.object({
  username: z.string().min(1, { message: "Must contain at least 1 character" }),
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Must contain at least 8 characters" }),
  refreshToken: z.string().optional(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
});

export const UpdateUserSchema = CreateUserSchema.partial();
export const RegisterUserSchema = CreateUserSchema.omit({ refreshToken: true });

export type CreateUserInput = z.infer<typeof UpdateUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
