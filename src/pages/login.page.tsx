import { useRouter } from "next/router";
import { postInputSchema } from "./api/login/schema";
import { handleSubmit } from "@/lib/form";
import { validate } from "@/lib/zod/validate";
import { login } from "@/pages/api/login/client";

const Page = () => {
  const router = useRouter();
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        validate(data, postInputSchema);
        const { redirectUrl } = await login(data);
        router.push(redirectUrl);
      })}
    >
      <input name="name" type="text" placeholder="your name" />
      <button>login</button>
    </form>
  );
};

export default Page;
