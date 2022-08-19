import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/food.module.css'
import * as React from 'react';

export default function Tour() {
  return (
    <div className={styles.content}>
            <a className={styles.back} href='/'>⊲Back to Homepage</a>
            <h1 className={styles.title}>The Food</h1>
        </div>
  )
}