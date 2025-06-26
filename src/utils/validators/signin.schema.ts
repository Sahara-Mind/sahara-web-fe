import { z } from "zod";
import { messages } from "@/config/messages";

// form zod validation schema
export const signInSchema = z.object({
  email: z.string().email({ message: messages.invalidEmail }),
  password: z.string().min(1, { message: messages.passwordRequired }),
});

// generate form types from zod validation schema
export type SignInSchema = z.infer<typeof signInSchema>;
