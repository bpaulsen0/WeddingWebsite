import Head from 'next/head'
import styles from '../styles/tour.module.css'
import * as React from 'react';

export default function Tour() {
  return (
    <div>
      <Head>
        <title>Our Story</title>
        <link rel="icon" href="/oie_png.png" />
      </Head>
      <a className={styles.back} href='/'>⊲Back to Homepage</a>
      <div className={styles.content}>
        <h1 className={styles.title}>The Tour</h1>
        {/* Black Cat */}
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/Black+Cat+Coffeehouse/@46.5882209,-90.8924748,16.21z/data=!4m5!3m4!1s0x52a9141db695bb0d:0x3d1dc50480469dc4!8m2!3d46.5877945!4d-90.8904107"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/tour/black-cat-coffeehouse.jpg"></img>
             <div className={styles.middle}>
              <h2>Black Cat Coffee &raquo;</h2>
              <p>Black Cat Coffee remains one of Tia's favorite spots to visit very time we make it back to Ashland to 
                visit our family. Here we spent hours together before we had started dating while we tried in vain to 
                complete a calculus problem that turned out to be impossible to solve. Over the five hours that we spent 
                trying to tackle our homework we shared many laughs and this is where our relationship began.</p>
            </div>
          </a>
        </div>
        {/* Cinema */}
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/Bay+Theater/@46.591085,-90.8919853,16.29z/data=!4m5!3m4!1s0x52a9141d451cf759:0x434401068429c7f5!8m2!3d46.5893083!4d-90.887912"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
             <div className={styles.middle}>
              <h2>Ashland Bay Cinema &raquo;</h2>
              <p>Here is where we finally had our first date. "We" (meaning Tia) decided that "Insidious: The Last Key" would 
                be a perfect movie for a first date. The movie was ok and the popcorn over-salted but to me, it was a perfect night.</p>
            </div>
            <img className={styles.img} src="/tour/bay-theater.jpg"></img>
          </a>
        </div>
        {/* Ashwabay */}
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/Mt+Ashwabay+Ski+and+Recreation+Area/@46.7763496,-90.8931916,13.58z/data=!4m5!3m4!1s0x52a91e86044109f9:0xb011f73ec5926153!8m2!3d46.7772179!4d-90.8945541"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/tour/ashwabay.jpg"></img>
             <div className={styles.middle}>
              <h2>Ashwabay Ski Hill &raquo;</h2>
              <p>Tia being on the Ski Team and me being on the Snowboarding Team, we spent hundreds of hours on this small ski 
                hill training and spending time with eachother. I have always said that the chair lift was the slowest lift but 
                when we were able to time our runs and ride up together, that lift was far too fast.</p>
            </div>
          </a>
        </div>
        {/* Houghton Point */}
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/Houghton+Point/@46.6985625,-90.8617169,15z/data=!3m1!4b1!4m5!3m4!1s0x52a91a4f033e8c03:0x1b589ab84558e2a8!8m2!3d46.6985487!4d-90.8529621"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
             <div className={styles.middle}>
              <h2>Houghton Point Hike &raquo;</h2>
              <p>Here we visited nearly every summer together being a great hiking destinations and a great spot to jump off of the rocks. 
                The water will be too cold for any swimming at the time of our wedding, but it is still a gorgeous hike and a great way to fill an afternoon.</p>
            </div>
            <img className={styles.img} src="/tour/black-cat-coffeehouse.jpg"></img>
          </a>
        </div>
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/Pebble+Beach/@47.1979396,-91.3762349,16.75z/data=!4m5!3m4!1s0x52af4bf2375fade3:0x2b41799fac242231!8m2!3d47.1979552!4d-91.3769744"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/eng2.jpg"></img>
             <div className={styles.middle}>
              <h2>Split Rock Lighthouse &raquo;</h2>
              <p>Here is where I was finally able to pop the question on the gorgeous pebble beach that we had previously visited and 
                had discussed being a perfect spot for a proposal. After finding the perfect ring and convincing her very subtly to 
                wear something nice, I was able to pull off the perfect surprise.</p>
            </div>
            
          </a>
        </div>
      </div>
    </div>
  );
}

// Black Cat        https://blackcatashland.com/
// Ashland Cinema   http://www.ashlandbaycinema.com/
// Houghton Point   https://www.google.com/maps/place/Houghton+Point/@46.6985625,-90.8617169,15z/data=!3m1!4b1!4m5!3m4!1s0x52a91a4f033e8c03:0x1b589ab84558e2a8!8m2!3d46.6985487!4d-90.8529621
// Ashwabay         https://www.google.com/maps/place/Mt+Ashwabay+Ski+and+Recreation+Area/@46.7763496,-90.8931916,13.58z/data=!4m5!3m4!1s0x52a91e86044109f9:0xb011f73ec5926153!8m2!3d46.7772179!4d-90.8945541
// 