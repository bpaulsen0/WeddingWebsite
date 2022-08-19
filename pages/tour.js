import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import * as React from 'react';
import styles from '../styles/tour.module.css'

export default function Tour() {
  return (
    <div className={styles.content}>
            <a className={styles.back} href='/'>⊲Back to Homepage</a>
            <h1 className={styles.title}>The Tour</h1>
        </div>
  );
}