/* Types */
import type { Metadata } from "next";

/* Style */
import "@bitshop/buyer/app/globals.css";

/* Lib */
import { notFound } from "next/navigation";
import appMetadata from "@bitshop/buyer/lib/metadata";
import { locales } from "@bitshop/buyer/lib/intl";

/* Layout */

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = appMetadata;

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  console.log("LOCALE:", locale);
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
