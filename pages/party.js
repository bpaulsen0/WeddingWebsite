import Head from 'next/head'
import styles from '../styles/party.module.css'
import * as React from 'react';

export default function lodging() {
  return (
    <div>
      <Head>
        <title>Meet the Party!</title>
        <link rel="icon" href="/oie_png.png" />
      </Head>
      <a className={styles.back} href='/'>⊲Back to Homepage</a>
      <div className={styles.content}>
        <h1 className={styles.title}>Our Wedding Party!</h1>
        <div className={styles.grid}>
          <a
            // href="https://www.google.com/maps/place/AmericInn+by+Wyndham+Ashland/@46.6100792,-90.8483867,15.25z/data=!4m8!3m7!1s0x52a9110cda18fda9:0xf0c066fc1e3619ff!5m2!4m1!1i2!8m2!3d46.6100477!4d-90.8443359?hl=en&authuser=0"
            // target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/DSC_9254-2.jpg"></img>
            <div className={styles.middle}>
              <h2>The Bride and Groom &raquo;</h2>
              <p>The lovely couple! We first met in high school and grew close while spending time together on the ski hill. 
                Now out of college, Ben works as a software engineer for TRC. 
                With one more semester, Tia plans on finishing her chemical engineering degree and persuing a career in that field.</p>
            </div>
            <img className={styles.img} src="/DSC_8993-2.jpg"></img>
          </a>
        </div>
        <div className={styles.grid}>
          <a
            // href="https://www.google.com/maps/place/AmericInn+by+Wyndham+Ashland/@46.6100792,-90.8483867,15.25z/data=!4m8!3m7!1s0x52a9110cda18fda9:0xf0c066fc1e3619ff!5m2!4m1!1i2!8m2!3d46.6100477!4d-90.8443359?hl=en&authuser=0"
            // target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/robandathena2.jpg"></img>
            <div className={styles.middle}>
              <h2>The Best Man and Maid of Honor &raquo;</h2>
              <p>Another lovely couple, Robert Francis and Athena Wiezorek have been the closest of friends to us for several years. 
                Athena and Tia being sisters have always been close. 
                Once Athena found Rob, he was introduced to us and has grown to be as close as family. 
                We all hope to be family, at least by marriage, in the coming years.</p>
            </div>
            <img className={styles.img} src="/robandathena.jpg"></img>
          </a>
        </div>
        <div className={styles.grid}>
          <a
            // href="https://www.google.com/maps/place/AmericInn+by+Wyndham+Ashland/@46.6100792,-90.8483867,15.25z/data=!4m8!3m7!1s0x52a9110cda18fda9:0xf0c066fc1e3619ff!5m2!4m1!1i2!8m2!3d46.6100477!4d-90.8443359?hl=en&authuser=0"
            // target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/donny.jpg"></img>
            <div className={styles.middle}>
              <h2>Donny Ekholm and Lani Vik &raquo;</h2>
              <p>Donny is a childhood friend of Ben's who was always ready for a late night playing Call of Duty and frozen pizza.
                After highschool, he was always ready for a fishing trip or a quick lunch to catch up.
                Lani is a close friend from high school, that bonded with Tia over our love for thrifting, adventuring, and DIY projects.
                Lani has always been there for Tia no matter what. She is the type of friend that would drop anything to help and comfort you.</p>
            </div>
            <img className={styles.img} src="/lani.jpg"></img>
          </a>
        </div>
        <div className={styles.grid}>
          <a
            // href="https://www.google.com/maps/place/AmericInn+by+Wyndham+Ashland/@46.6100792,-90.8483867,15.25z/data=!4m8!3m7!1s0x52a9110cda18fda9:0xf0c066fc1e3619ff!5m2!4m1!1i2!8m2!3d46.6100477!4d-90.8443359?hl=en&authuser=0"
            // target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/laura.jpg"></img>
            <div className={styles.middle}>
              <h2>Laura Paulsen and MaKayla Temple &raquo;</h2>
              <p>Laura is Ben's older sister who has always been a confidant and a supportive friend. 
                Always in the search for adventure, we can't wait to see what fun lies ahead whenever we're able to spend time with her.
                We first met Makayla when Tia joined a sorority and was made Makayla's "little". 
                Since then we are all constantly finding ourselves planning game nights and going dancing.</p>
            </div>
            <img className={styles.img} src="/makayla.jpg"></img>
          </a>
        </div>
        <div className={styles.grid}>
          <a
            // href="https://www.google.com/maps/place/AmericInn+by+Wyndham+Ashland/@46.6100792,-90.8483867,15.25z/data=!4m8!3m7!1s0x52a9110cda18fda9:0xf0c066fc1e3619ff!5m2!4m1!1i2!8m2!3d46.6100477!4d-90.8443359?hl=en&authuser=0"
            // target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/tiaparents.jpg"></img>
            <div className={styles.middle}>
              <h2>The Bride's Parents &raquo;</h2>
              <p>When Tia first brought Ben into her wonderful family, he was met with nothing but kindness and very good food (something about that being the key to a man's heart).
                Over the few years that we have been together, Dana and Ryan have done everything to make Ben feel like a second son and have made it known that that's exactly how they see him.
                Thank you for everything that you have done for the two of us!
              </p>
            </div>
            <img className={styles.img} src="/danaandryan2.jpg"></img>
          </a>
        </div>
        <div className={styles.grid}>
          <a
            // href="https://www.google.com/maps/place/AmericInn+by+Wyndham+Ashland/@46.6100792,-90.8483867,15.25z/data=!4m8!3m7!1s0x52a9110cda18fda9:0xf0c066fc1e3619ff!5m2!4m1!1i2!8m2!3d46.6100477!4d-90.8443359?hl=en&authuser=0"
            // target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/bryanandtheresa.jpg"></img>
            <div className={styles.middle}> 
              <h2>The Groom's Parents &raquo;</h2>
              <p>The first time Ben mentioned Tia to his family, the first thing Theresa said was I told you so, as she had told Ben to ask Tia out when they were freshman.
             They have always been more than welcoming and kind. They treat Tia like their second daughter and have truly made her feel a part of the family. 
             Even letting her live with them during the first "stay at home" order. We appericate everything you have done for us!</p>
            </div>
            <img className={styles.img} src="/bryanandtheresa2.jpg"></img>
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