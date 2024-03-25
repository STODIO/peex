import styles from './business.module.scss';

const Business = () => {
  return (
    <div className={'content_wrapper'}>
      <div className={styles.content_wrapper}>
        <h2 className={styles.content_head}>스토디오</h2>
        <p className={styles.content_text}>
          스토디오(STODIO)는 소설, 웹소설, 웹툰 스토리, 게임 스토리를 스튜디오
          체제로 제작하는 <br /> 스토리 스튜디오입니다.
        </p>
        <p className={styles.content_text} style={{ marginTop: '16px' }}>
          그동안 창작자들의 스토리 제작 경험은 대단히 비효율적이었습니다. <br />
          스토디오는 프로듀서 중심 스튜디오 체제에 데이터 분석, AI, 웹 기술을
          더함으로써, <br />
          창작자에게 압도적인 스토리 창작 환경을 제공하고 있습니다.
        </p>
      </div>
      <div className={styles.content_wrapper}>
        <h2 className={styles.content_head}>IP 비즈니스</h2>
        <p className={styles.content_text}>
          픽스는 금융과 기술을 활용하여 원천 콘텐츠 IP 시장을 혁신하고 있습니다.
        </p>
        <p className={styles.content_text} style={{ marginTop: '16px' }}>
          그동안 원천 콘텐츠 IP 시장은 IP를 소수만 소유하는 구조였습니다.
          <br /> 픽스는 IP 유동화와 펀드 등의 금융적, 기술적 접근을 통해 IP 소유
          주체를 더욱 넓혀 나가고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default Business;
