import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Sean Lai's Portfolio",
  description: "Creator, Developer, and Aspiring Entrepreneur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased max-w-[100vw]`}
      >
        {children}
      </body>
    </html>
  );
}
