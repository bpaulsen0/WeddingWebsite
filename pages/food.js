import Head from 'next/head'
import * as React from 'react';
import styles from '../styles/food.module.css'

export default function food() {
  return (
    <div>
      <Head>
        <title>Find Something Tasty</title>
        <link rel="icon" href="/oie_png.png" />
      </Head>
      <a className={styles.back} href='/'>⊲Back to Homepage</a>
      <div className={styles.content}>
        <h1 className={styles.title}>Best Food Around</h1>
        {/* Deep Water */}
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/Deep+Water+Grille/@46.5877845,-90.8930998,17.75z/data=!4m12!1m6!3m5!1s0x0:0xe69ea80898da451f!2sAshland+Baking+Co!8m2!3d46.5878636!4d-90.8901366!3m4!1s0x0:0xafa27ddb09359f8c!8m2!3d46.5873054!4d-90.8922061"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/food/deepwater.jpg"></img>
            <div className={styles.middle}>
              <h2>Deep Water &raquo;</h2>
              <p>Family-friendly brewpub with rotating taps of craft beers, hearty comfort food, wine & cocktails. This is our favorite resturant when visiting Ashland. Be sure to try the waffle fries in the ranch, you won't regret it.</p>
            </div>
          </a>
        </div>
        {/* Cocos */}
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/Coco+-+Artisan+Bakery+%26+Good+Eats/@46.6711769,-90.896423,16.25z/data=!4m12!1m6!3m5!1s0x0:0xe69ea80898da451f!2sAshland+Baking+Co!8m2!3d46.5878636!4d-90.8901366!3m4!1s0x0:0x97f87f73ca5cc80!8m2!3d46.6708215!4d-90.8945033"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <div className={styles.middle}>
              <h2>Cafe Coco &raquo;</h2>
              <p>Pâtissier Noreen Ovadia Wills, infamous for her cakes, pastries and bread, opened a bakery in Washburn in early April 2009. ‘Grown Locally’ and ‘Made from Scratch’ are not just words at Coco but the culmination of a lifetime of eating, tasting, cooking and baking delivered to our customers with the love and respect that such carefully chosen recipes and ingredients deserve. Somewhere between Parisian Boulanger, metro-chic, and Grandma’s kitchen lies the heart and soul of Coco.</p>
            </div>
            <img className={styles.img} src="/food/cocos.jpg"></img>
          </a>
        </div>
        {/* ABC */}
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/Ashland+Baking+Co/@46.5878808,-90.8922945,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe69ea80898da451f!8m2!3d46.5878636!4d-90.8901366"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/food/abc.jpg"></img>
            <div className={styles.middle}>
              <h2>Ashland Baking Company &raquo;</h2>
              <p>In September 2001, Ashland Baking Company opened its doors with only a handful of employees, a small product line, and big dreams. Since then, the bakery has grown to not only serve our community with delicious baked goods, but also to deliver and ship to various restaurants, food cooperatives, and grocery stores as far away as Grand Marais. A truely amazing place to stop for a quick breakfast. We recomend the bagels, asiago anything, and the crossaits. It doesn't hurt that Black Cat Coffee is right across the road (wink wink).</p>
            </div>
          </a>
        </div>
        {/* Black Cat */}
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/Black+Cat+Coffeehouse/@46.588026,-90.8915429,17.5z/data=!4m12!1m6!3m5!1s0x0:0xe69ea80898da451f!2sAshland+Baking+Co!8m2!3d46.5878636!4d-90.8901366!3m4!1s0x52a9141db695bb0d:0x3d1dc50480469dc4!8m2!3d46.5877945!4d-90.8904107"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <div className={styles.middle}>
              <h2>Black Cat &raquo;</h2>
              <p>Since 1995, the Black Cat Coffeehouse has been serving organic, fair-trade and farm focused coffees. They currently offer Duluth Coffee Company-Duluth, MN They make a variety of syrups in house,  using organic sugar & natural  ingredients to add extra flavor to your cup.  Not a coffee drinker?  They offer Tea Source tea, smoothies made with real fruit, or a variety of natural bottled juices and spritzers to quench your thirst.</p>
            </div>
            <img className={styles.img} src="/tour/black-cat-coffeehouse.jpg"></img>
          </a>
        </div>
        {/* North Coast */}
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/North+Coast+Coffee/@46.6712141,-90.9049216,16.25z/data=!4m12!1m6!3m5!1s0x0:0xe69ea80898da451f!2sAshland+Baking+Co!8m2!3d46.5878636!4d-90.8901366!3m4!1s0x52a919de3fd87177:0xc88fabac88ca4955!8m2!3d46.6706241!4d-90.9007964"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <img className={styles.img} src="/food/north-coast-coffee.jpg"></img>
            <div className={styles.middle}>
              <h2>North Coast Coffee &raquo;</h2>
              <p>Recently bought by a family friend, this little coffee shop is always worth a visit. They have delicious coffee and tea but they also have a great selection of ice creams that could make anyone smile.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

// Deep Water:  https://www.deepwatergrille.com/                  https://www.google.com/maps/place/Deep+Water+Grille/@46.5877845,-90.8930998,17.75z/data=!4m12!1m6!3m5!1s0x0:0xe69ea80898da451f!2sAshland+Baking+Co!8m2!3d46.5878636!4d-90.8901366!3m4!1s0x0:0xafa27ddb09359f8c!8m2!3d46.5873054!4d-90.8922061
// Cocos:       https://coconorth.com/                            https://www.google.com/maps/place/Coco+-+Artisan+Bakery+%26+Good+Eats/@46.6711769,-90.896423,16.25z/data=!4m12!1m6!3m5!1s0x0:0xe69ea80898da451f!2sAshland+Baking+Co!8m2!3d46.5878636!4d-90.8901366!3m4!1s0x0:0x97f87f73ca5cc80!8m2!3d46.6708215!4d-90.8945033
// ABC:         http://www.ashlandbakingcompany.com/              https://www.google.com/maps/place/Ashland+Baking+Co/@46.5878808,-90.8922945,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe69ea80898da451f!8m2!3d46.5878636!4d-90.8901366
// Black Cat:   https://blackcatashland.com/                      https://www.google.com/maps/place/Black+Cat+Coffeehouse/@46.588026,-90.8915429,17.5z/data=!4m12!1m6!3m5!1s0x0:0xe69ea80898da451f!2sAshland+Baking+Co!8m2!3d46.5878636!4d-90.8901366!3m4!1s0x52a9141db695bb0d:0x3d1dc50480469dc4!8m2!3d46.5877945!4d-90.8904107
// North Coast: https://www.northcoastwashburn.com/               https://www.google.com/maps/place/North+Coast+Coffee/@46.6712141,-90.9049216,16.25z/data=!4m12!1m6!3m5!1s0x0:0xe69ea80898da451f!2sAshland+Baking+Co!8m2!3d46.5878636!4d-90.8901366!3m4!1s0x52a919de3fd87177:0xc88fabac88ca4955!8m2!3d46.6706241!4d-90.9007964
// Hugos:       https://www.hugospizzamenu.com/?utm_source=gbp    https://www.google.com/maps/place/Hugo's+Pizza/@46.5818598,-90.9069357,16.33z/data=!4m12!1m6!3m5!1s0x0:0xe69ea80898da451f!2sAshland+Baking+Co!8m2!3d46.5878636!4d-90.8901366!3m4!1s0x0:0xd197a87911ef7e17!8m2!3d46.580628!4d-90.906742