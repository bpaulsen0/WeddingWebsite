import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/lodging.module.css'
import * as React from 'react';

export default function Tour() {
  return (
    <div className={styles.content}>
            <a className={styles.back} href='/'>⊲Back to Homepage</a>
            <h1 className={styles.title}>The Lodging</h1>
            <a className={styles.point} href='https://www.wyndhamhotels.com/americinn/ashland-wisconsin/americinn-ashland/overview?CID=LC:AA::GGL:RIO:National:52038&iata=00093796' target='_blank' rel='noopener noreferrer'>AmericInn</a>
        </div>
  )
}

//https://www.wyndhamhotels.com/americinn/ashland-wisconsin/americinn-ashland/overview?CID=LC:AA::GGL:RIO:National:52038&iata=00093796