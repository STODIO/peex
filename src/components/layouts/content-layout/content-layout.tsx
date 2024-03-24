'use client';
import { ReactNode } from 'react';
import styles from './contentLayout.module.scss';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface IContentLayoutProps {
  children: ReactNode;
}
export default function ContentLayout({ children }: IContentLayoutProps) {
  const pathname = usePathname();
  return (
    <div
      className={`${styles.content_wrapper} ${
        pathname === '/' ? styles.black : styles.white
      }`}
    >
      <section className={styles.left_content_wrapper}>
        <div className={styles.left_content}>
          {pathname === '/' ? (
            <Image
              src={'/images/icon.webp'}
              alt={'stodio-logo'}
              priority={true}
              fill
              style={{ objectFit: 'contain' }}
            />
          ) : pathname.includes('business') ? (
            <h1>BUSINESS</h1>
          ) : (
            <h1>CONTACT</h1>
          )}
        </div>
      </section>
      <section className={styles.right_content}>{children}</section>
    </div>
  );
}
