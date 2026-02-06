import { Suspense } from "react";
import "./globals.css";
import { Loading } from "@/shared";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <>{children}</>
      </body>
    </html>
  );
}
