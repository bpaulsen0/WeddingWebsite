import Head from 'next/head'
import styles from '../styles/schedule.module.css'
import * as React from 'react';

export default function lodging() {
  return (
    <div>
      <Head>
        <title>Where and When</title>
        <link rel="icon" href="/oie_png.png" />
      </Head>
      <a className={styles.back} href='/'>⊲Back to Homepage</a>
      <div className={styles.content}>
        <h1 className={styles.title}>Schedule</h1>
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/517+9th+Ave+W,+Ashland,+WI+54806/@46.5839694,-90.8906352,17z/data=!3m1!4b1!4m5!3m4!1s0x52a9141bebb1de99:0x59592d02cd2d8aa5!8m2!3d46.5839694!4d-90.8906352"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            
             <div className={styles.middle}>
              <h2>Ceremony : 2:00 pm at Saron Lutheran Church</h2>
              <p>The ceremony will be at the Saron Lutheran Church starting at 2 o'Clock. 
                Please arrive at 1:30pm so you can find a seat. 
                You will find the church at 517 9th Ave. West, Ashland WI 54806.</p> 
                <p>Click here to be directed to this destination on google maps.</p>
            </div><img className={styles.img} src="/church.jpg"></img>
          </a>
        </div>
        <h2>Reception</h2>
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/The+Local+Bar+%26+Grille/@46.5713374,-90.9167568,15z/data=!4m5!3m4!1s0x0:0x2e9409dda935516b!8m2!3d46.5713374!4d-90.9167568"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
             <div className={styles.middle}>
              <h2>Cocktail Hour : 3:30 pm at The Local Bar & Grille</h2>
              <p>Ben and Tia will be taking some time after the ceremony to take some pictures with the wedding party. 
                Please feel free to make your way to The Local Bar & Grille, where we will spend the rest of the night. 
                There will be drinks and snacks availible for you as you catch up. 
                Please feel free to take this time to stop back at your hotels and prepare yourself for a night of fun.</p> 
                <p>Again, please click here for directions.</p>
            </div>
            <img className={styles.img} src="/local.jpg"></img>
          </a>
        </div>
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/The+Local+Bar+%26+Grille/@46.5713374,-90.9167568,15z/data=!4m5!3m4!1s0x0:0x2e9409dda935516b!8m2!3d46.5713374!4d-90.9167568"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
             <div className={styles.middle}>
              <h2>Dinner Opens : 5:30 pm at The Local Bar & Grille</h2>
              <p>After pictures, the newly wed couple will meet you all at The Local for dinner. 
                We will kick off with a buffet style meal and end with some delicious cup cakes and other treats. 
                Please reach out with any allergies and dietary needs so we can make sure that everyone will have something to eat.</p>
                <p>When we have decided on a full menu to serve, you will be able to view it here.</p>
            </div>
            {/* <img className={styles.img} src="/local.jpg"></img> */}
          </a>
        </div>
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/The+Local+Bar+%26+Grille/@46.5713374,-90.9167568,15z/data=!4m5!3m4!1s0x0:0x2e9409dda935516b!8m2!3d46.5713374!4d-90.9167568"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
             <div className={styles.middle}>
              <h2>Speeches and Dancing : 7:00 pm at The Local Bar & Grille</h2>
              <p>After dinner we will have a few speeches from our wedding party and we'll kick off the dancing with a few special dances. 
                For those of you bringing kids, the music will be explicit after 9 o'Clock.</p>
              <p>If you have any music requests, please send them our way.</p>
            </div>
            {/* <img className={styles.img} src="/lodging/qualityinn.jpg"></img> */}
          </a>
        </div>
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/The+Local+Bar+%26+Grille/@46.5713374,-90.9167568,15z/data=!4m5!3m4!1s0x0:0x2e9409dda935516b!8m2!3d46.5713374!4d-90.9167568"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
             <div className={styles.middle}>
              <h2>End of Reception and Closing Time : 11:00 pm at The Local Bar & Grille</h2>
              <p>We are planning on wrapping up at 11 o'Clock. 
                Please make your arangements for getting home safely before the big day. 
                Unfortunately, Uber has yet to make it to Ashland.</p>
            </div>
            {/* <img className={styles.img} src="/lodging/qualityinn.jpg"></img> */}
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

//https://www.wyndhamhotels.com/americinn/ashland-wisconsin/americinn-ashland/overview?CID=LC:AA::GGL:RIO:National:52038&iata=00093796