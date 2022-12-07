if (typeof window === "undefined") {
  (async () => {
    const { server } = await import("./server");
    server.listen({ onUnhandledRequest: "bypass" });
  })();
}
export {};
