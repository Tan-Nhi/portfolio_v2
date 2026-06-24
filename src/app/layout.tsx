import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Nguyen Tan Nhi | Fullstack Web Developer",
  description:
    "Portfolio of Nguyen Tan Nhi - Fullstack Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
