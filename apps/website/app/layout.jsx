import { Footer } from "../partials/Footer";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col size-full min-h-screen">
        {children}
        <Footer className="mt-auto" />
      </body>
    </html>
  );
}
