import styles from './contact.module.scss';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export function Contact() {
  return (
    <div className="content_wrapper">
      <div className={styles.contact_content}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <FiMail size={16} />
          </div>
          <h2 className={styles.head}>메일</h2>
        </div>
        <p className={styles.content_text}>contact@peex.kr</p>
      </div>
      <div className={styles.contact_content}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <FiMapPin size={16} />
          </div>
          <h2 className={styles.head}>위치</h2>
        </div>
        <p className={styles.content_text}>서울 관악구 관악로12길 86 2층</p>
        <div className={styles.map_wrapper}>
          <Map
            center={{ lat: 37.47717981671865, lng: 126.95705597392093 }}
            style={{ width: '100%', height: '100%', border: '1px solid black' }}
          >
            <MapMarker
              position={{
                lat: 37.47717981671865,
                lng: 126.95705597392093,
              }}
            />
          </Map>
        </div>
      </div>
    </div>
  );
}
