import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/notifications/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import Providers from "@/Providers/Provider";
import QueryProvider from "@/Providers/Query";
import { Notifications } from "@mantine/notifications";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Tumirayi",
  description: "Drown Delivery Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MantineProvider>
            <Notifications />
            <QueryProvider>{children}</QueryProvider>
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
