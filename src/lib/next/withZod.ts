import { z, ZodSchema } from "zod";
import { NotFoundGsspError } from "./error/gssp";
import { StrictCtx } from "./type";

export function withZod<T extends ZodSchema>(schema: T) {
  return function withZodMiddleware<Ctx extends StrictCtx>(ctx: Ctx) {
    const parsed = schema.safeParse(ctx);
    if (!parsed.success) throw new NotFoundGsspError();
    return { ...ctx, ...parsed.data } as z.infer<T> & Ctx;
  };
}

export { z };
