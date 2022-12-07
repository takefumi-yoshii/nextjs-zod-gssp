import { GetResponse } from "./type";
import { defaultHeaders, handleResolve, host } from "@/services";

export const path = (id: string) => host(`/my/posts/${id}`);

export function getMyPost(id: number): Promise<GetResponse> {
  return fetch(path(`${id}`), {
    headers: { ...defaultHeaders },
  })
    .then((res) => res.json())
    .catch(handleResolve);
}
