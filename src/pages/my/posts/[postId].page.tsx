import { GetServerSidePropsResult } from "next";
import Link from "next/link";
import { composeGssp, withZod, withLogin, z } from "@/lib/next";
import { NotFoundGsspError } from "@/lib/next/error/gssp";
import { asPositiveInt } from "@/lib/zod/effects";
import { getMyPost } from "@/services/getMyPost";

type Props = { title: string; body: string };

const Page = ({ title, body }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <hr />
      <Link href="/my/posts">back</Link>
    </div>
  );
};

export const getServerSideProps = composeGssp(
  withLogin,
  withZod(z.object({ params: z.object({ postId: asPositiveInt }) })),
  async (ctx): Promise<GetServerSidePropsResult<Props>> => ({
    props: await getMyPost(ctx.params.postId).catch(() => {
      throw new NotFoundGsspError();
    }),
  })
);

export default Page;
