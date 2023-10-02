import { z } from "zod";

const phoneRegex = new RegExp(/^\+?[0-9]\d{1,14}$/);

export const infoSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(50),
    email: z.string().email(),
    phone: z.string().regex(phoneRegex, {
        message: "Phone number invalid",
    }),
});

export type InfoValues = z.infer<typeof infoSchema>;
