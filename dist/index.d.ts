import { z } from "zod";
export declare const CreateUserSchema: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    refreshToken: z.ZodOptional<z.ZodString>;
    firstname: z.ZodOptional<z.ZodString>;
    lastname: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
    refreshToken?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
}, {
    username: string;
    email: string;
    password: string;
    refreshToken?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
}>;
export declare const UpdateUserSchema: z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    refreshToken: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    firstname: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    lastname: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    username?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    refreshToken?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
}, {
    username?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    refreshToken?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
}>;
export declare const RegisterUserSchema: z.ZodObject<Omit<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    refreshToken: z.ZodOptional<z.ZodString>;
    firstname: z.ZodOptional<z.ZodString>;
    lastname: z.ZodOptional<z.ZodString>;
}, "refreshToken">, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
}, {
    username: string;
    email: string;
    password: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
}>;
export type CreateUserInput = z.infer<typeof UpdateUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
