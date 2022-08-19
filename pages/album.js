import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/album.module.css'
import * as React from 'react';

export default function Album() {
    return (
        <div className={styles.content}>
            <a className={styles.back} href='/'>⊲Back to Homepage</a>
            <h1 className={styles.title}>Our Family</h1>
            <img className={styles.famr} src="/album/benlaurakids.jpg"></img>
            <img className={styles.famr} src="/album/bikes.jpg"></img>
            <img className={styles.famr} src="/album/boat.jpg"></img>
            <img className={styles.famr} src="/album/boatkatka.jpg"></img>
            <img className={styles.famr} src="/album/cherylchristmas.jpg"></img>
            <img className={styles.famr} src="/album/cutetia.jpg"></img>
            <img className={styles.famr} src="/album/easter.jpg"></img>
            <img className={styles.famr} src="/album/eng1.jpg"></img>
            <img className={styles.famr} src="/album/eng2.jpg"></img>
            <img className={styles.famr} src="/album/fam1.jpg"></img>
            <img className={styles.famr} src="/album/fam2.jpg"></img>
            <img className={styles.famr} src="/album/lawnmower.jpg"></img>
            <img className={styles.famr} src="/album/littletia2.jpg"></img>
            <img className={styles.famr} src="/album/littlewiezoreks.jpg"></img>
            <img className={styles.famr} src="/album/Me_and_Tia.jpg"></img>
            <img className={styles.famr} src="/album/meske.jpg"></img>
            <img className={styles.famr} src="/album/paulsens.jpg"></img>
            <img className={styles.famr} src="/album/pigroast.jpeg"></img>
            <img className={styles.famr} src="/album/prom.jpg"></img>
            <img className={styles.famr} src="/album/snowboard.jpg"></img>
            <img className={styles.famr} src="/album/sweeties.jpg"></img>
            <img className={styles.famr} src="/album/tia-and-athena.jpg"></img>
            <img className={styles.famr} src="/album/tiagrad.jpg"></img>
            <img className={styles.famr} src="/album/Tianna.jpg"></img>
            <img className={styles.famr} src="/album/waterslide.jpg"></img>
            <img className={styles.famr} src="/album/wichmans.jpg"></img>
            <img className={styles.famr} src="/album/Wiezorek_Family.jpg"></img>
            <img className={styles.famr} src="/album/wiezoreks.jpg"></img>
            <img className={styles.famr} src="/album/wiezoreks2.jpg"></img>
            <img className={styles.famr} src="/album/wiezoreks3.jpg"></img>
            <img className={styles.famr} src="/album/zorro_presents.jpg"></img>
            <img className={styles.famr} src="/album/zorro_window.jpg"></img>
            <img className={styles.famr} src="/album/Zorro.jpg"></img>
        </div>
    )
}

{/**
"https://nextjs.org"
"https://nextjs.org/docs"
"https://nextjs.org/learn"
"https://github.com/vercel/next.js/tree/canary/examples"
"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
*/}