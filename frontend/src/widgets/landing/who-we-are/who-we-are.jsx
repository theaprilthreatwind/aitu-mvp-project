import { data } from "@/shared";
import React from "react";

export function WhoWeAre({ styles }) {
  return (
    <>
      <section className={styles.who_are_we} id="who_are_we">
        <div className={`${styles.container} ${styles.div}`}>
          <div className={`${styles.text_banner} ${styles.div}`}>
            {data[0].who_we_are.slice(0, 2).map((element) => (
              <div className={`${styles.card} ${styles.div}`} key={element.id}>
                <h1
                  className={`${styles.heading} ${styles.h1}`}
                  style={{ fontWeight: "300" }}
                >
                  {element.number}
                </h1>
                <p className={styles.p}>{element.title}</p>
              </div>
            ))}
          </div>
          <div className={`${styles.image_banner} ${styles.div}`}>
            <img
              className={`${styles.gradient_bg} ${styles.img}`}
              src="center.svg"
              alt="gradientBg"
            />
            <img className={styles.img} src="whoweare.png" alt="food" />
          </div>
          <div className={`${styles.text_banner} ${styles.div}`}>
            {data[0].who_we_are.slice(2).map((element) => (
              <div className={`${styles.card} ${styles.div}`} key={element.id}>
                <h1
                  className={`${styles.heading} ${styles.h1}`}
                  style={{ fontWeight: "300" }}
                >
                  {element.number}
                </h1>
                <p className={styles.p}>{element.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
