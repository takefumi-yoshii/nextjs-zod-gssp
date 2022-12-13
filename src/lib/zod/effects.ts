import { z } from "zod";

export const positiveInt = [
  (v: number) => Number.isInteger(v) && v > 0,
  "Require positive int.",
] as const;

export const asPositiveInt = z.coerce.number().refine(...positiveInt);
