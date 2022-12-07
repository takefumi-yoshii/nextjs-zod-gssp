import { GetServerSidePropsContext } from "next";

export type StrictCtx = Omit<GetServerSidePropsContext, "query" | "params">;
