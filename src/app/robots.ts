import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
    },
    sitemap: 'https://peex.kr/sitemap.xml',
  };
}
