import { GetServerSidePropsResult } from "next";
import { GsspError } from "./error/gssp";
import { StrictCtx } from "./type";

type Ctx = StrictCtx;
type GsspResult = Promise<GetServerSidePropsResult<unknown>>;
type MaybePromise<T extends Ctx> = Promise<T> | T;

export function composeGssp<A extends Ctx>(
  ab: (a: A) => GsspResult
): (a: MaybePromise<A>) => GsspResult;

export function composeGssp<A extends Ctx, B extends Ctx>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => GsspResult
): (a: MaybePromise<B>) => GsspResult;

export function composeGssp<A extends Ctx, B extends Ctx, C extends Ctx>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => GsspResult
): (a: MaybePromise<C>) => GsspResult;

export function composeGssp<
  A extends Ctx,
  B extends Ctx,
  C extends Ctx,
  D extends Ctx
>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => GsspResult
): (a: MaybePromise<D>) => GsspResult;

export function composeGssp<
  A extends Ctx,
  B extends Ctx,
  C extends Ctx,
  D extends Ctx,
  E extends Ctx
>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>,
  ef: (e: E) => GsspResult
): (a: MaybePromise<E>) => GsspResult;

export function composeGssp<
  A extends Ctx,
  B extends Ctx,
  C extends Ctx,
  D extends Ctx,
  E extends Ctx,
  F extends Ctx
>(
  ab: (a: A) => MaybePromise<B>,
  bc: (b: B) => MaybePromise<C>,
  cd: (c: C) => MaybePromise<D>,
  de: (d: D) => MaybePromise<E>,
  ef: (e: E) => MaybePromise<F>,
  fg: (f: F) => GsspResult
): (a: MaybePromise<F>) => GsspResult;

export function composeGssp(...fns: Function[]) {
  return async function (ctx: unknown) {
    try {
      return await fns.reduce(
        (a, b) => a.then((c) => b(c)),
        Promise.resolve(ctx)
      );
    } catch (err) {
      if (err instanceof GsspError) {
        return err.toGsspResult();
      }
      throw err;
    }
  };
}
