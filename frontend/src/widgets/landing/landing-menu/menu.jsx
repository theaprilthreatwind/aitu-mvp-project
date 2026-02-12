import { data } from "@/shared";
import React from "react";

export function LandingMenu({ styles }) {
  return (
    <>
      <section className={styles.menu} id="menu">
        <div className={`${styles.container} ${styles.div}`}>
          <div className={`${styles.heading_section} ${styles.div}`}>
            <h1 className={`${styles.heading} ${styles.h1}`}>POPULAR DISHES</h1>
            <p className={styles.p}>
              Enjoy the most loved dishes, chosen by our customers every day.
            </p>
          </div>
          <div className={`${styles.dishes_container} ${styles.div}`}>
            {data[0].dishes.map((element) => (
              <div className={`${styles.card} ${styles.div}`} key={element.id}>
                <img
                  className={styles.img}
                  src={element.image}
                  alt={element.title}
                />
                <h3 className={styles.h3}>{element.title}</h3>
                <button className={styles.button}>{element.category}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
