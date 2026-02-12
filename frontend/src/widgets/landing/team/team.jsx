import { data } from "@/shared";
import React from "react";

export function Team({ styles }) {
  return (
    <section className={styles.team} id="team">
      <div className={`${styles.container} ${styles.div}`}>
        <div className={`${styles.heading_section} ${styles.div}`}>
          <h1 className={`${styles.heading} ${styles.h1}`}>OUR TEAM</h1>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className={`${styles.team_container} ${styles.div}`}>
          {data[0].team.map((element) => {
            return (
              <div className={`${styles.card} ${styles.div}`} key={element.id}>
                <img
                  className={styles.img}
                  src={element.image}
                  alt={element.name}
                />
                <h3 className={styles.h3}>{element.name}</h3>
                <p className={styles.p}>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
