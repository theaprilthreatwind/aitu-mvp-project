import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "@/shared"; // Double check this path points to your core.js

// This creates the actual GET and POST endpoints that the library is looking for
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,

  // Optional: If you want to use a different token for production vs local
  config: { uploadthingToken: process.env.UPLOADTHING_TOKEN },
});