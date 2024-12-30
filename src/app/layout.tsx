import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Navbar } from "~/app/_component/Navbar";

export const metadata: Metadata = {
  title: "Timothy's Portfolio",
  description: "Portfolio Website of Timothy Lin",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
      {children}
      </body>
    </html>
  );
}
