import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontComfortaa } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased ",
          fontComfortaa.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen dark:bg-[#092230]">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-20 px-6 flex-grow  md:pt-8">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <div className="flex gap-1 flex-col items-center">
                  <div className="flex gap-1">
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">NextUI</p>
                    <span>and</span>
                    <p className="text-primary">NextJS</p>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-default-600">Made by</span>
                    <p className="text-primary">Rifqi</p>
                  </div>
                </div>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
