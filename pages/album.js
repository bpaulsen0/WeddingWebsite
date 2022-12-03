import Head from 'next/head'
import styles from '../styles/album.module.css'
import * as React from 'react';

export default function Album() {
    return (
        <div className={styles.content}>
            <Head>
                <title>Who Got Us Here</title>
                <link rel="icon" href="/oie_png.png" />
            </Head>
            <a className={styles.back} href='/'>⊲Back to Homepage</a>
            <h1 className={styles.title}>Our Family</h1>
            <div className={styles.masonry}>
                <img className={styles.item} src="/album/eng1.jpg"></img>
                <img className={styles.item} src="/album/littlewiezoreks.jpg"></img>
                <img className={styles.item} src="/album/IMG_0961.jpeg"></img>
                <img className={styles.item} src="/album/littletia2.jpg"></img>
                <img className={styles.item} src="/album/Me_and_Tia.jpg"></img>
                <img className={styles.item} src="/album/tia-and-athena.jpg"></img>
                <img className={styles.item} src="/album/Jeep.jpeg"></img>
                <img className={styles.item} src="/album/Sean Wedding Goofy Pic.jpeg"></img>
                <img className={styles.item} src="/album/fam2.jpg"></img>
                <img className={styles.item} src="/album/benlaurakids.jpg"></img>
                <img className={styles.item} src="/album/zorro_presents.jpg"></img>
                <img className={styles.item} src="/album/sweeties.jpg"></img>
                <img className={styles.item} src="/album/zorro_window.jpg"></img>
                <img className={styles.item} src="/album/paulsen_christmas.jpeg"></img>
                <img className={styles.item} src="/album/cutetia.jpg"></img>
                <img className={styles.item} src="/album/Photo Library - 1796.jpeg"></img>
                <img className={styles.item} src="/album/Photo Library - 1726.jpeg"></img>
                <img className={styles.item} src="/album/boatkatka.jpg"></img>
                <img className={styles.item} src="/album/tiagrad.jpg"></img>
                <img className={styles.item} src="/album/IMG_20180523_191533088.jpeg"></img>
                <img className={styles.item} src="/album/bikes.jpg"></img>
                <img className={styles.item} src="/album/Camping with Cousins1.jpeg"></img>
                <img className={styles.item} src="/album/Summer 2010 Cousins.jpeg"></img>
                <img className={styles.item} src="/album/Wiezorek_Family.jpg"></img>
                <img className={styles.item} src="/album/meske.jpg"></img>
                <img className={styles.item} src="/album/Andy_Family.jpeg"></img>
                <img className={styles.item} src="/album/Leaves.jpeg"></img>
                <img className={styles.item} src="/album/Summer2010.jpeg"></img>
                <img className={styles.item} src="/album/BenToys.jpeg"></img>
                <img className={styles.item} src="/album/BP-6162-(ZF-9837-80013-2-005).jpeg"></img>
                <img className={styles.item} src="/album/IMG_0508 (1).jpeg"></img>
                <img className={styles.item} src="/album/fam1.jpg"></img>
                <img className={styles.item} src="/album/snowboard.jpg"></img>
                <img className={styles.item} src="/album/Ben Tia Sail.jpeg"></img>
                <img className={styles.item} src="/album/wichmans.jpg"></img>
                <img className={styles.item} src="/album/wiezoreks2.jpg"></img>
                <img className={styles.item} src="/album/Photo Library - 0472.jpeg"></img>
                <img className={styles.item} src="/album/Photo Library - 0144.jpeg"></img>
                <img className={styles.item} src="/album/prom.jpg"></img>
                <img className={styles.item} src="/album/lawnmower.jpg"></img>
                <img className={styles.item} src="/album/Tianna.jpg"></img>
                <img className={styles.item} src="/album/Photo Library - 0927.jpeg"></img>
                <img className={styles.item} src="/album/wiezoreks.jpg"></img>
                <img className={styles.item} src="/album/boat.jpg"></img>
                <img className={styles.item} src="/album/Photo Library - 0894.jpeg"></img>
                <img className={styles.item} src="/album/Photo Library - 1492.jpeg"></img>
                <img className={styles.item} src="/album/paulsens.jpg"></img>
                <img className={styles.item} src="/album/pigroast.jpeg"></img>
                <img className={styles.item} src="/album/IMG_20180627_175641401_HDR.jpeg"></img>
                <img className={styles.item} src="/album/waterslide.jpg"></img>
                <img className={styles.item} src="/album/wiezoreks3.jpg"></img>
                <img className={styles.item} src="/album/easter.jpg"></img>
                <img className={styles.item} src="/album/Photo Library - 086.jpeg"></img>
                <img className={styles.item} src="/album/BP-6126-2-(ZF-9837-80013-2-011).jpeg"></img>
                <img className={styles.item} src="/album/DSC07072.jpeg"></img>
                <img className={styles.item} src="/album/Zorro.jpg"></img>
                <img className={styles.item} src="/album/Photo Library - 1877.jpeg"></img>
                <img className={styles.item} src="/album/eng2.jpg"></img>
                <img className={styles.item} src="/album/cherylchristmas.jpg"></img>
                <img className={styles.item} src="/album/Lapointe Swim.jpeg"></img>
            </div>
            <footer className={styles.footer}><a className={styles.footerURL}>Thank you for being an amazing part of this adventure!</a></footer>
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