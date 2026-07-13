import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

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
      <body >
        <LanguageProvider>
          {children}
        </LanguageProvider>

      </body>
    </html>
  );
}
