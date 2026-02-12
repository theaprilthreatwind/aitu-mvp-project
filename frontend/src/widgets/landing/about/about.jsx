import Link from "next/link";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

export function About({ styles }) {
  return (
    <>
      <section className={styles.about} id="about">
        <div className={`${styles.container} ${styles.div}`}>
          <div className={`${styles.banner} ${styles.div}`}>
            <div className={`${styles.top} ${styles.div}`}>
              <h1 className={`${styles.heading} ${styles.h1}`}>ABOUT US</h1>
              <p className={styles.p}>
                The only thing we're serious about is food.
              </p>
            </div>
            <p className={`${styles.mid} ${styles.p}`}>
              Welcome to MDEat OS, where delicious food meets technology. Our
              platform makes ordering easy, fast, and personalized. Explore our
              menu, place orders online, and enjoy a modern dining experience
              designed for your convenience. Also you can offer your product and
              recomend it here. Join us and discover the future of dining with
              MDEat OS!
            </p>
            <Link href={"/"} className={styles.a}>
              Explore Menu{" "}
              <span className={styles.span}>
                <HiOutlineArrowRight className={styles.svg} />
              </span>
            </Link>
          </div>
          <div className={`${styles.banner} ${styles.div}`}>
            <img src="about.png" alt="about" className={styles.img} />
          </div>
        </div>
      </section>
    </>
  );
}
