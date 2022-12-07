import { GetResponse } from "./type";
import { defaultHeaders, handleResolve, host } from "@/services";

export const path = () => host(`/my/posts`);

export function getMyPosts(): Promise<GetResponse> {
  return fetch(path(), {
    headers: { ...defaultHeaders },
  })
    .then((res) => res.json())
    .catch(handleResolve);
}
