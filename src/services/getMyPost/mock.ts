import { rest } from "msw";
import { posts } from "../stub";
import { GetResponse } from "./type";
import { path } from ".";

export const mockGetMyPost = () => {
  return rest.get<{}, { postId: string }, GetResponse>(
    path(":postId"),
    async (req, res, ctx) => {
      const postId = req.params.postId;
      const item = posts.find((post) => post.id === +postId);
      if (!item) {
        return res(ctx.status(404));
      }
      return res(ctx.json(item));
    }
  );
};
