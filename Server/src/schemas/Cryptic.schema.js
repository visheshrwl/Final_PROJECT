import {z} from "zod";

export const crypticInputSchema = z.object({
    answer: z.string().min(3).max(50),
});