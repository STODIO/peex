'use client';
import { ReactNode } from 'react';
import styles from './contentLayout.module.scss';
import { usePathname } from 'next/navigation';

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
      <div className={styles.left_content}></div>
      <div />
      <div className={styles.right_content}>{children}</div>
    </div>
  );
}
