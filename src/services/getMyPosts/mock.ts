import { rest } from "msw";
import { posts } from "../stub";
import { GetResponse } from "./type";
import { path } from ".";

export const mockGetMyPosts = () => {
  return rest.get<{}, { postId: string }, GetResponse>(
    path(),
    async (_, res, ctx) => {
      return res(ctx.json({ posts }));
    }
  );
};
