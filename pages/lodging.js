import Head from 'next/head'
import styles from '../styles/lodging.module.css'
import * as React from 'react';

export default function lodging() {
  return (
    <div>
      <Head>
        <title>Sleep Tight</title>
        <link rel="icon" href="/oie_png.png" />
      </Head>
      <a className={styles.back} href='/'>⊲Back to Homepage</a>
      <div className={styles.content}>
        <h1 className={styles.title}>Places to Rest Your Head</h1>
        {/* AmericInn */}
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/AmericInn+by+Wyndham+Ashland/@46.6100792,-90.8483867,15.25z/data=!4m8!3m7!1s0x52a9110cda18fda9:0xf0c066fc1e3619ff!5m2!4m1!1i2!8m2!3d46.6100477!4d-90.8443359?hl=en&authuser=0"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/lodging/americinn.jpg"></img>
             <div className={styles.middle}>
              <h2>AmericInn &raquo;</h2>
              <p>Overlooking Lake Superior, this casual hotel is less than a half-mile from Ashland Breakwater Lighthouse, 
                2 miles from the Ashland Mural Walk and 16 miles from Houghton Falls State Natural Area. Straightforward 
                rooms and suites offer free Wi-Fi, flat-screen TVs and minifridges, as well as coffeemakers. Some have 
                balconies, microwaves and/or pull-out sofas. Complimentary perks include breakfast and parking. Other 
                amenities consist of an exercise room, a sauna and an indoor pool with waterslides, plus a hot tub, a 
                game room, and meeting and event space. There's also a restaurant/bar and guest laundry facilities.</p>
            </div>
          </a>
        </div>
        {/* Quality Inn */}
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/Quality+Inn+Ashland+-+Lake+Superior/@46.5870746,-90.9375604,16z/data=!4m8!3m7!1s0x52a915de2cc84285:0x9a843c751ae50372!5m2!4m1!1i2!8m2!3d46.5870911!4d-90.9368495?hl=en&authuser=0"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
             <div className={styles.middle}>
              <h2>Quality Inn &raquo;</h2>
              <p>Flanked by Highway 2 and Chequamegon Bay, this casual hotel with a woodsy exterior is 20 miles from the 
                ferry terminal to Madeline Island, and 2 miles from both Prentice Park and the Northern Great Lakes Visitor 
                Center. The laid-back rooms come with free Wi-Fi and flat-screen TVs, as well as microwaves, minifridges, 
                tea and coffeemakers. Some have lake views, sofabeds and/or direct pool access. Room service is available. 
                Breakfast (fee) is available in an informal cafe. There's also a bar, and a rustic lounge with a stone fireplace. 
                Other amenities include a fitness center, a heated indoor pool and a hot tub.</p>
            </div>
            <img className={styles.img} src="/lodging/qualityinn.jpg"></img>
          </a>
        </div>
        {/* Hotel Chequamegon */}
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/Best+Western+The+Hotel+Chequamegon/@46.5938222,-90.8889285,15.25z/data=!4m8!3m7!1s0x0:0xea88f2511f684003!5m2!4m1!1i2!8m2!3d46.5928219!4d-90.8850217?hl=en&authuser=0"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/lodging/hotelchequamegon.webp"></img>
             <div className={styles.middle}>
              <h2>Hotel Chequamegon &raquo;</h2>
              <p>Overlooking Chequamegon Bay on Lake Superior, this polished hotel in a grand building is 3 minutes’ walk from 
                Ashland Historical Museum and 1 mile from Northland College. The warm, elegant rooms have free Wi-Fi, flat-screen 
                TVs and iPod docks, as well as microwaves, minifridges and coffeemakers. Upgraded rooms and suites come with lake 
                views, whirlpool tubs and/or pull-out sofas. Suites with kitchens are also available. Parking and hot breakfast 
                are complimentary. There’s a grill restaurant/bar with a terrace and lake views. Other amenities include an indoor 
                pool, a hot tub and an exercise room, as well as a business center.</p>
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

//https://www.wyndhamhotels.com/americinn/ashland-wisconsin/americinn-ashland/overview?CID=LC:AA::GGL:RIO:National:52038&iata=00093796