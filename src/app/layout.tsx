import { Metadata } from 'next';
import '@/styles/style.scss';
import { Suit_Variable } from '@/app/font';
import Header from '@/components/header/header';
import ContentLayout from '@/components/layouts/content-layout/content-layout';

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
        <main>
          <ContentLayout>{children}</ContentLayout>
        </main>
      </body>
    </html>
  );
}
