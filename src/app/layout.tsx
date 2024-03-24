import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts/main-layout';
import '@/styles/style.scss';
import { Suit_Variable } from '@/app/font';
import Header from '@/components/header/header';

// export const metadata: Metadata = {
//   title: "title",
//   description: "database",
//   metadataBase: new URL(process.env.BASE_URL as string),
//   openGraph: {
//     title: "title",
//     description: "descsription",
//   },
//   alternates: {
//     canonical: "https://url",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr" className={Suit_Variable.className}>
      <body>
        <Header />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
