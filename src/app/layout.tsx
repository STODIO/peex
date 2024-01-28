import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "title",
  description: "database",
  metadataBase: new URL(process.env.BASE_URL as string),
  openGraph: {
    title: "title",
    description: "descsription",
  },
  alternates: {
    canonical: "https://url",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
