import React from "react";
import { Navbar } from "../navbar/navbar";

export function HeroSection({ styles }) {
  return (
    <section className={styles.heroSection} id="heroSection">
      <Navbar />
      <div className={`${styles.container} ${styles.div}`}>
        <div className={`${styles.banner} ${styles.div}`}>
          <div className={`${styles.largeBox} ${styles.div}`}>
            <h1 className={`${styles.title} ${styles.h1}`}>Delicious</h1>
          </div>
          <div className={`${styles.combined_boxes} ${styles.div}`}>
            <div className={`${styles.imageBox} ${styles.div}`}>
              <img src="./hero1.png" alt="hero" className={styles.img} />
            </div>
            <div className={`${styles.textAndLogo} ${styles.div}`}>
              <div className={`${styles.textWithSvg} ${styles.div}`}>
                <h1 className={`${styles.title} ${styles.h1}`}>Food</h1>
                <h1
                  className={`${styles.title} ${styles.dishes_title} ${styles.h1}`}
                >
                  Dishes
                </h1>
                <img
                  src="./threelines.svg"
                  alt="threelines"
                  className={styles.img}
                />
              </div>
              <img
                className={`${styles.logo} ${styles.img}`}
                src="logo.svg"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.banner} ${styles.div}`}>
          <div className={`${styles.imageBox} ${styles.div}`}>
            <img src="hero2.png" alt="hero" className={styles.img} />
          </div>
          <h1 className={`${styles.title} ${styles.dishes_title} ${styles.h1}`}>
            Dishes
          </h1>
        </div>
      </div>
    </section>
  );
}
