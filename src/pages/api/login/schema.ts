import { z } from "zod";

export const postInputSchema = z.object({ name: z.string() });
