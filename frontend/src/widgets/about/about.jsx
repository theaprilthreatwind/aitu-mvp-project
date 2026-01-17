import Link from "next/link";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

export function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to MDEat OS, where delicious food meets technology. Our
              platform makes ordering easy, fast, and personalized. Explore our
              menu, place orders online, and enjoy a modern dining experience
              designed for your convenience. Also you can offer your product and
              recomend it here. Join us and discover the future of dining with
              MDEat OS!
            </p>
            <Link href={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
}
