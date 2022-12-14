import { GetServerSidePropsResult } from "next";
import { composeGssp, withUser } from "@/lib/next";

type Props = { greet: string };

const Page = ({ greet }: Props) => {
  return <div>{greet}</div>;
};

export const getServerSideProps = composeGssp(
  withUser,
  async (ctx): Promise<GetServerSidePropsResult<Props>> => ({
    props: { greet: `Hi! ${ctx.user.name}` },
  })
);

export default Page;
