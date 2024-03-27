import Image from 'next/image';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={'content_wrapper'}>
      <h1 className={styles.head}>PEEX</h1>

      <div className={styles.content}>
        <h2 className={styles.content_head}>PEEX'S VISION</h2>
        <p>
          픽스는 "인류의 콘텐츠 경험 개선"이라는 미션 아래
          <br />
          웹툰 웹소설 산업의 비즈니스 모델을 혁신하는 기업입니다.
          <br />
          <br />
          국내의 폭발적 성장과 글로벌 팽창을 동시에 이루어내고 있는 웹툰 웹소설
          산업에서, <br className="desktop" />
          기술과 금융을 활용하여 고객의 경험을 개선합니다.
        </p>
      </div>
      <div className={styles.content} style={{ marginTop: '80px' }}>
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
