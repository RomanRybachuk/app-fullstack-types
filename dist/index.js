"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserSchema = exports.UpdateUserSchema = exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
exports.CreateUserSchema = zod_1.z.object({
    username: zod_1.z.string().min(1, { message: "Must contain at least 1 character" }),
    email: zod_1.z.string().email({ message: "Must be a valid email address" }),
    password: zod_1.z
        .string()
        .min(8, { message: "Must contain at least 8 characters" }),
    refreshToken: zod_1.z.string().optional(),
    firstname: zod_1.z.string().optional(),
    lastname: zod_1.z.string().optional(),
});
exports.UpdateUserSchema = exports.CreateUserSchema.partial();
exports.RegisterUserSchema = exports.CreateUserSchema.omit({ refreshToken: true });
