import { z } from "zod";
import { messages } from "@/config/messages";

// form zod validation schema
export const signUpSchema = z.object({
  firstName: z.string().min(1, { message: messages.firstNameRequired }),
  lastName: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(1),
  confirmPassword: z.string().min(1),
  isAgreed: z.boolean(),
});

// generate form types from zod validation schema
export type SignUpSchema = z.infer<typeof signUpSchema>;
