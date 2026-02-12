import { data } from "@/shared";
import React from "react";
export function Qualities({ styles }) {
  return (
    <>
      <section className={styles.qualities} id="qualities">
        <div className={`${styles.container} ${styles.div}`}>
          {data[0].ourQualities.map((element) => {
            return (
              <div className={`${styles.card} ${styles.div}`} key={element.id}>
                <img
                  className={styles.img}
                  src={element.image}
                  alt={element.title}
                />
                <p className={`${styles.title} ${styles.p}`}>{element.title}</p>
                <p className={`${styles.description} ${styles.p}`}>
                  {element.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
