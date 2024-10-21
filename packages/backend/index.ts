import type { Serve } from "bun";
import { file, serve } from "bun";

const server: Serve = {
  port: 3000,
  fetch: async (req: Request) => {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response("Hello World");
    }

    // Serve static files from the public folder
    if (url.pathname.startsWith("/public")) {
      // sleep to simulate slow response
      console.log("Sleeping for 5 seconds");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log("Done sleeping");
      const publicFile = file(`./${url.pathname}`);
      if (publicFile) {
        return new Response(publicFile);
      }
    }

    return new Response("Not Found", { status: 404 });
  },
};

console.log(`Server running at http://localhost:${server.port}`);

export default server;
