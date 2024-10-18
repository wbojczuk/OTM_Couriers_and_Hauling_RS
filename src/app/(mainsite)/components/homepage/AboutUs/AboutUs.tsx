"use client"
import { CSSProperties } from "react"
import styles from "./aboutus.module.css"
import Link from "next/link"

export default function AboutUs() {
  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
          <h4>About Us</h4>
            <h1>About OTM Couriers <br /> <span className="underline">and Haulers</span></h1>

            <p>OTM Couriers and Haulers, based in Lawrenceville, GA, is your trusted partner for efficient courier and junk removal services. Whether it's delivering small or large packages, handling medical or office deliveries, or clearing out unwanted furniture, appliances, and yard waste, we’ve got you covered. Our skilled and experienced team is committed to providing fast, friendly, and reliable service. At OTM, we understand the importance of timeliness and professionalism, helping our clients manage their delivery and waste removal needs with ease. Leave your trash in the past—OTM is coming in fast!</p>

            <Link className="main-link" href="/contact">Schedule Now</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/about.png" alt="image of worker" className={styles.mainImg} />
            <div className={styles.imgStyle}></div>
          </div>
        </div>
    </section>
  )
}
