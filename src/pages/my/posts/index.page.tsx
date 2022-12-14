import { GetServerSidePropsResult } from "next";
import Link from "next/link";
import { composeGssp, withUser } from "@/lib/next";
import { NotFoundGsspError } from "@/lib/next/error/gssp";
import { getMyPosts } from "@/services/getMyPosts";
import { Posts } from "@/services/type";

type Props = { posts: Posts };

const Page = ({ posts }: Props) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <section key={post.id}>
          <h2>
            <Link href={`/my/posts/${post.id}`}>{post.title}</Link>
          </h2>
        </section>
      ))}
    </div>
  );
};

export const getServerSideProps = composeGssp(
  withUser,
  async (): Promise<GetServerSidePropsResult<Props>> => ({
    props: await getMyPosts().catch(() => {
      throw new NotFoundGsspError();
    }),
  })
);

export default Page;
