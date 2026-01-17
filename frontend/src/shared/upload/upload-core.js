// src/shared/upload/core.js
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      // Logic to check user session goes here
      return { userId: "user_123" };
    })
    .onUploadComplete(async ({ metadata, file }) => {

      // Here is where you would save file.url to MongoDB
      return { uploadedBy: metadata.userId };
    }),
};
