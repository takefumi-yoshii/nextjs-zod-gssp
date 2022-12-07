import { GetServerSidePropsResult } from "next";
import { composeGssp, withLogin } from "@/lib/next";

type Props = { greet: string };

const Page = ({ greet }: Props) => {
  return <div>{greet}</div>;
};

export const getServerSideProps = composeGssp(
  withLogin,
  async (ctx): Promise<GetServerSidePropsResult<Props>> => ({
    props: { greet: `Hi! ${ctx.user.name}` },
  })
);

export default Page;
