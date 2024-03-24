'use client';
import Image from 'next/image';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header_wrapper}>
      <Link href={'/'}>
        <div className={styles.logo_wrapper}>
          <Image
            src={'/images/logo.webp'}
            alt={'stodio-logo'}
            priority={true}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Link>

      <div className={styles.tab_wrapper}>
        <Link href={'/'}>
          <span
            className={`${styles.tab} ${
              pathname === '/' ? styles.selected : ''
            }`}
          >
            ABOUT
          </span>
        </Link>
        <Link href={'/business'}>
          <span
            className={`${styles.tab} ${
              pathname.includes('business') ? styles.selected : ''
            }`}
          >
            BUSINESS
          </span>
        </Link>
        <Link href={'contact'}>
          <span
            className={`${styles.tab} ${
              pathname.includes('contact') ? styles.selected : ''
            }`}
          >
            CONTACT
          </span>
        </Link>
      </div>
      <div className={'desktop'} />
    </header>
  );
}
