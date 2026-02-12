import React from "react";

export function Footer({ styles }) {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.div}`}>
        <div className={`${styles.banner} ${styles.div}`}>
          <div className={`${styles.left} ${styles.div}`}>MDEat OS</div>

          <div className={`${styles.right} ${styles.div}`}>
            <p className={styles.p}>Kazakstan, Astana</p>
            <p className={styles.p}>Open: 9 AM - 8 PM </p>
          </div>
        </div>

        <div className={`${styles.banner} ${styles.div}`}>
          <div className={`${styles.left} ${styles.div}`}>
            <p className={styles.p}>
              Development By Daniyar, Miron, Beybarys, Alana
            </p>
            <p className={styles.p}>All Rights Reserved By MDEat OS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
