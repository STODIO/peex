import { Metadata } from 'next';
import '@/styles/style.scss';
import { Suit_Variable } from '@/app/font';
import Header from '@/components/header/header';
import ContentLayout from '@/components/layouts/content-layout/content-layout';
import Script from 'next/script';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
  title: '픽스',
  description:
    '모든 사람이 더 자유롭고 행복하게 콘텐츠를 경험하는 세상을 만듭니다.',
  metadataBase: new URL('https://peex.kr'),
  openGraph: {
    title: '픽스',
    description:
      '모든 사람이 더 자유롭고 행복하게 콘텐츠를 경험하는 세상을 만듭니다.',
  },
  alternates: {
    canonical: 'https://peex.kr',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr" className={Suit_Variable.className}>
      <body>
        <main>
          <Header />
          <ContentLayout>{children}</ContentLayout>
        </main>
        <Script
          src={
            '//dapi.kakao.com/v2/maps/sdk.js?appkey=df9a361218379a6132d6fdabc2169dfb&libraries=services,clusterer&autoload=false'
          }
          strategy={'beforeInteractive'}
        />
        <Footer />
      </body>
    </html>
  );
}
