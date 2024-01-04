import "../globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

export const metadata: Metadata = {
  title: "Manual",
  description: "Health Platform for men",
};
const inter = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <div className="w-full ">{children}</div>
      </body>
    </html>
  );
}
