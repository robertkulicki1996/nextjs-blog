import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { locales } from "./locales";
import { openSans, playfairDisplay } from "./fonts";
import { Footer, Navbar, ResponsiveContainer } from "@/components";

import "./globals.css";

export const metadata: Metadata = {
  title: "Blog edukacyjny",
  description: "Aplikacja stworzona przy pomocy create next app",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  const slug = (await params)?.slug;

  // TODO: DIFFERENT NAVBAR HEADER FOR HOME AND POST DETAILS PAGE
  return (
    <html lang={locale}>
      <body
        className={`${openSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <header>
            <ResponsiveContainer>
              <Navbar slug={slug} />
            </ResponsiveContainer>
          </header>
          <main>{children}</main>
          <footer>
            <ResponsiveContainer
              topPadding={false}
              className="flex items-center justify-center"
            >
              <Footer />
            </ResponsiveContainer>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
