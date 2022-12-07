import { z } from "zod";

export const positiveInt = [
  (v: string) => Number.isInteger(+v) && +v > 0,
  "Require positive int.",
] as const;

export const stringAsPositiveInt = z
  .string()
  .refine(...positiveInt)
  .transform((v) => +v);
