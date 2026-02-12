"use client";

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "@/shared";
import Link from "next/link";

export function Navbar({ styles }) {
  // const [show, setShow] = useState(false);
  // return (
  //   <>
  //     <nav className={styles.nav}>
  //       <div className={`${styles.logo} ${styles.div}`}>MDEat OS</div>
  //       <div
  //         className={
  //           show
  //             ? `${styles.navLinks} ${styles.showmenu} ${styles.div}`
  //             : `${styles.navLinks} ${styles.div}`
  //         }
  //       >
  //         <div className={`${styles.links} ${styles.div}`}>
  //           {data[0].navbarLinks.map((element) => (
  //             <ScrollLink
  //               to={element.link}
  //               spy={true}
  //               smooth={true}
  //               duration={500}
  //               key={element.id}
  //               className={styles.a}
  //             >
  //               {element.title}
  //             </ScrollLink>
  //           ))}
  //         </div>
  //         <Link href="/register" className={`${styles.menuBtn} ${styles.a}`}>
  //           singIn
  //         </Link>
  //       </div>
  //       <div
  //         className={`${styles.hamburger} ${styles.div}`}
  //         onClick={() => setShow(!show)}
  //       >
  //         <GiHamburgerMenu className={styles.svg} />
  //       </div>
  //     </nav>
  //   </>
  // );
}
