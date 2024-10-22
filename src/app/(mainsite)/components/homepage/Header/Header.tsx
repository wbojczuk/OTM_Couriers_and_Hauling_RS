"use client"
import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
        <h1>OTM Couriers and <span className="underline">Haulers</span></h1>

        <p>OTM Couriers and Haulers, based in Lawrenceville, GA, provides reliable courier and junk removal services with a focus on efficiency and professionalism. We ensure timely deliveries and smooth, stress-free waste removal for our clients.</p>
        

        <Link href="/contact" className="main-link">Schedule Now</Link>

        <img src="/img/header-bg.webp" alt="" className="bg-img" />
        <div className="shader"></div>

    </header>
  )
}
