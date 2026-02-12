"use client";

import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

export function Reservation({ styles }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);
  // const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone(0);
      setEmail("");
      setTime("");
      setDate("");
      // navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className={styles.reservation} id="reservation">
      <div className={`${styles.container} ${styles.div}`}>
        <div className={`${styles.banner} ${styles.div}`}>
          <img className={styles.img} src="/reservation.png" alt="res" />
        </div>
        <div className={`${styles.banner} ${styles.div}`}>
          <div className={`${styles.reservation_form_box} ${styles.div}`}>
            <h1 className={styles.h1}>MAKE A RESERVATION</h1>
            <p className={styles.p}>For Further Questions, Please Call</p>
            <form className={styles.form}>
              <div className={styles.div}>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.div}>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={styles.input}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.div}>
                <input
                  type="email"
                  placeholder="Email"
                  className={`${styles.email_tag} ${styles.input}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={styles.input}
                />
              </div>
              <button
                type="submit"
                onClick={handleReservation}
                className={styles.button}
              >
                RESERVE NOW{" "}
                <span className={styles.span}>
                  <HiOutlineArrowNarrowRight className={styles.svg} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
