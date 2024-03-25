import styles from './business.module.scss';

const Business = () => {
  return (
    <div className={'content_wrapper'}>
      <div className={styles.content_wrapper}>
        <h2 className={styles.content_head}>IP 매입</h2>
        <p className={styles.content_text}>
          서울 관악구 낙성대로 2 낙성벤처창업센터
        </p>
      </div>
    </div>
  );
};

export default Business;
