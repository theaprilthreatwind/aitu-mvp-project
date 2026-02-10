import { Suspense } from "react";
import "./globals.css";
import { LoadingSkeleton } from "@/shared";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<LoadingSkeleton />}>
          <>{children}</>
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
