/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import SolanaProvider from "@/components/SolanaProvider";
require("@solana/wallet-adapter-react-ui/styles.css");
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bundled",
  description: "Bundled - Invest in the future of the web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-900 text-white">
      <body className={clsx(inter.className, "h-full")}>
        <SolanaProvider>
          <MainLayout>{children}</MainLayout>
        </SolanaProvider>
      </body>
    </html>
  );
}
