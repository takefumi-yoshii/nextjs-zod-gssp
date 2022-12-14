import { z } from "zod";
import { UnauthorizedGsspError } from "./error/gssp";
import { StrictCtx } from "./type";
import { getSession } from "@/lib/next-session";

export const userSchema = z.object({
  name: z.string(),
  email: z.string(),
});

export type User = z.infer<typeof userSchema>;

export async function withUser<Ctx extends StrictCtx>(ctx: Ctx) {
  const sess = await getSession(ctx.req, ctx.res);
  const parsed = userSchema.safeParse(sess.user);
  if (!parsed.success) {
    sess.redirectUrl = ctx.resolvedUrl;
    throw new UnauthorizedGsspError();
  }
  return { ...ctx, user: parsed.data };
}

export { z };
