import { useEffect, useRef } from 'react';
import * as React from 'react';
import styles from '../styles/tour.module.css'

export default function Tour() {
  return (
    <div className={styles.content}>
            <a className={styles.back} href='/'>⊲Back to Homepage</a>
            <h1 className={styles.title}>The Tour</h1>
            <a className={styles.point} href='https://blackcatashland.com/' target='_blank' rel='noopener noreferrer'>Black Cat</a>
            <a className={styles.point} href='http://www.ashlandbaycinema.com/' target='_blank' rel='noopener noreferrer'>Cinema</a>
            <a className={styles.point} href='https://www.google.com/maps/place/Houghton+Point/@46.6985625,-90.8617169,15z/data=!3m1!4b1!4m5!3m4!1s0x52a91a4f033e8c03:0x1b589ab84558e2a8!8m2!3d46.6985487!4d-90.8529621' target='_blank' rel='noopener noreferrer'>houghton</a>
            <a className={styles.point} href='https://www.google.com/maps/place/Mt+Ashwabay+Ski+and+Recreation+Area/@46.7763496,-90.8931916,13.58z/data=!4m5!3m4!1s0x52a91e86044109f9:0xb011f73ec5926153!8m2!3d46.7772179!4d-90.8945541' target='_blank' rel='noopener noreferrer'>ashwabay</a>
        </div>
  );
}

// Black Cat        https://blackcatashland.com/
// Ashland Cinema   http://www.ashlandbaycinema.com/
// Houghton Point   https://www.google.com/maps/place/Houghton+Point/@46.6985625,-90.8617169,15z/data=!3m1!4b1!4m5!3m4!1s0x52a91a4f033e8c03:0x1b589ab84558e2a8!8m2!3d46.6985487!4d-90.8529621
// Ashwabay         https://www.google.com/maps/place/Mt+Ashwabay+Ski+and+Recreation+Area/@46.7763496,-90.8931916,13.58z/data=!4m5!3m4!1s0x52a91e86044109f9:0xb011f73ec5926153!8m2!3d46.7772179!4d-90.8945541
// 