import { PostInput, PostResponse } from "./type";
import { defaultHeaders, handleResolve } from "@/pages/api";

export const path = () => "/api/login";

export function login(input: PostInput): Promise<PostResponse> {
  return fetch(path(), {
    method: "POST",
    body: JSON.stringify(input),
    headers: { ...defaultHeaders },
  })
    .then((res) => res.json())
    .catch(handleResolve);
}
