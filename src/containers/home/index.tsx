import Image from 'next/image';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={'content_wrapper'}>
      <span className={styles.about}>ABOUT</span>
      <h1 className={styles.head}>PEEX</h1>

      <div className={styles.content}>
        <h2 className={styles.content_head}>PEEX's VISON</h2>
        <p>
          전 세계가 하나의 콘텐츠를 동시에 즐길 수 있는 오늘날 인류에게 압도적인
          콘텐츠 경험을 제공함으로써 대체 불가능한 기업이 되고자 합니다. 이
          무한한 여정이 인류 경험 (People Experience) 개선으로 이어질 수 있도록
          정진할 것입니다.
        </p>
      </div>
      <div className={styles.content}>
        <h2 className={styles.content_head}>PEEX's VISON</h2>
        <p>
          전 세계가 하나의 콘텐츠를 동시에 즐길 수 있는 오늘날 인류에게 압도적인
          콘텐츠 경험을 제공함으로써 대체 불가능한 기업이 되고자 합니다. 이
          무한한 여정이 인류 경험 (People Experience) 개선으로 이어질 수 있도록
          정진할 것입니다.
        </p>
      </div>
      <div className={styles.content}>
        <h2 className={styles.content_head}>BACKED BY</h2>
        <div className={styles.vc_wrapper}>
          <div className={styles.vc_img}>
            <Image
              src={'/images/FastVentures_logo.webp'}
              alt={'peex-icon'}
              priority={true}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.vc_img}>
            <Image
              src={'/images/KIAC_logo.webp'}
              alt={'peex-icon'}
              priority={true}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.vc_img}>
            <Image
              src={'/images/TheVentures_logo.webp'}
              alt={'peex-icon'}
              priority={true}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
