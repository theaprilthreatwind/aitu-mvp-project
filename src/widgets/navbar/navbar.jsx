"use client";

import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "@/shared";

export function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">MDEat OS</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <a href="/login" className="menuBtn">
            Login
          </a>
          <a href="/registration" className="menuBtn">
            singIn
          </a>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
}
