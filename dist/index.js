"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    username: zod_1.z.string().min(1, { message: "Must contain at least 1 character" }),
    email: zod_1.z.string().email({ message: "Must be a valid email address" }),
    password: zod_1.z
        .string()
        .min(8, { message: "Must contain at least 8 characters" }),
    refreshToken: zod_1.z.string().optional(),
    firstname: zod_1.z.string().optional(),
    lastname: zod_1.z.string().optional(),
});
exports.updateUserSchema = exports.createUserSchema.partial();
exports.RegisterUserSchema = exports.createUserSchema.omit({ refreshToken: true });
