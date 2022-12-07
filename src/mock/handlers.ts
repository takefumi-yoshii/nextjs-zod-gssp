import { mockGetMyPost } from "@/services/getMyPost/mock";
import { mockGetMyPosts } from "@/services/getMyPosts/mock";

export const handlers = [mockGetMyPosts(), mockGetMyPost()];
