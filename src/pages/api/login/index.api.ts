import { NextApiHandler } from "next";
import { postInputSchema } from "./schema";
import { PostResponse } from "./type";
import { User } from "@/lib/next";
import { getSession } from "@/lib/next-session";
import { MethodNotAllowedError } from "@/lib/next/error";

const handlePost: NextApiHandler<PostResponse> = async (req, res) => {
  const parsed = postInputSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).end();
    return;
  }
  const session = await getSession(req, res);
  // FIXME: get user
  const user: User = {
    name: parsed.data.name,
    email: "test@example.com",
  };
  session.user = user;
  res.status(200).json({ redirectUrl: session.redirectUrl || "/" });
};

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "POST":
      return handlePost(req, res);
    default:
      throw new MethodNotAllowedError();
  }
};

export default handler;
