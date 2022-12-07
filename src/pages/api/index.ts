export const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export async function handleResolve(res: Response) {
  const data = res.json();
  if (!res.ok) throw data;
  return data;
}
