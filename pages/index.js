import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const weddingdate = new Date("06/17/2023 14:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingdate.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d)
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h)
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m)
      const s = Math.floor((difference % (1000 * 60)) / (1000));
      setSeconds(s)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Ben and Tias Wedding!</title>
      </Head>
      <img className={styles.decl} src="/CornerDecoration.png"></img>
      <img className={styles.decr} src="/CornerDecoration.png"></img>
      <main className={styles.main}>
        <div className={styles.background}></div>
        <div className={styles.masonry}>
          <img className={styles.item} src="/album/bikes.jpg"></img>
          <img className={styles.item} src="/album/eng1.jpg"></img>
          <img className={styles.item} src="/album/Me_and_Tia.jpg"></img>
          <img className={styles.item} src="/album/eng2.jpg"></img>
          <img className={styles.item} src="/album/prom.jpg"></img>
          <img className={styles.item} src="/album/snowboard.jpg"></img>
          <img className={styles.item} src="/album/sweeties.jpg"></img>
        </div>

        <h1 className={styles.title}>
          Welcome to <a href='album'>Ben and Tia's</a> Wedding Website!
        </h1>
        <div className={styles.timer}>
          <h1>{days} days {hours} hours {minutes} minutes and {seconds} seconds until the big day!</h1>
        </div>
        <p className={styles.description}>
          Thank you for checking out our wedding website! If you are planning on attending, kindly fill out the survey where it says RSVP
        </p>
        <div className={styles.grid}>
          <a
            href="https://forms.gle/WxpvjU3EmtbboS7A6"
            className={styles.card}
          >
            <h2>RSVP! &raquo;</h2>
            <p>Tell us that you're going to show by filling out a quick survey on your phone.</p>
          </a>
          <a
            href="schedule"
            className={styles.card}
          >
            <h2>Schedule &raquo;</h2>
            <p>
              Be prepared by knowing when everything is happening!
            </p>
          </a>
          <a
            href="registry"
            className={styles.card}
          >
            <h2>Gift Registry &raquo;</h2>
            <p>
              If you wish to bring a gift, we have registered here.
            </p>
          </a>
          <a
            href="tour"
            className={styles.card}
          >
            <h2>Take the Tour &raquo;</h2>
            <p>
              Try out a few of our favorite spots where we shared our first few dates.
            </p>
          </a>
          <a href="lodging" className={styles.card}>
            <h2>Where to Stay &raquo;</h2>
            <p>We've blocked off a few rooms for your convinence at the AmericInn</p>
          </a>
          <a href="food" className={styles.card}>
            <h2>Where to Eat &raquo;</h2>
            <p>Try some of our favorite places around town to eat.</p>
          </a>
        </div>
        
      </main>
      <footer className={styles.footer}>
        <a
          className={styles.footerURL}
          href="https://www.amazon.com/wedding/share/benandtiasweddingregistry"
        >
          ⥽Amazon Gift Registry⥼
        </a>
        <a
          className={styles.footerURL}
          href="https://www.target.com/gift-registry/gift/ben-and-tias-wedding"
        >
          ⥽Target Gift Registry⥼
        </a>
      </footer>
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