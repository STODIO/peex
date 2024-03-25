import { Metadata } from 'next';
import '@/styles/style.scss';
import { Suit_Variable } from '@/app/font';
import Header from '@/components/header/header';
import ContentLayout from '@/components/layouts/content-layout/content-layout';
import Script from 'next/script';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
  title: '(주)픽스',
  description:
    '픽스는 기술과 금융을 활용하여 웹툰 웹소설 산업의 비즈니스 모델을 혁신하는 기업입니다.',
  metadataBase: new URL('https://www.peex.kr'),
  openGraph: {
    title: '(주)픽스',
    description:
      '픽스는 기술과 금융을 활용하여 웹툰 웹소설 산업의 비즈니스 모델을 혁신하는 기업입니다.',
  },
  alternates: {
    canonical: 'https://www.peex.kr',
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
