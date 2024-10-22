import Link from 'next/link';
import styles from './detailing.module.css';

export default function Detailing(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>About Us</h2>
        <p>OTM Couriers and Haulers, based in Lawrenceville, GA, offers fast and reliable courier and junk removal services. From delivering packages, including medical and office deliveries, to removing furniture, appliances, and yard waste, our skilled team ensures professional and efficient service every time. Whether handling deliveries or clearing clutter, OTM is here to help!</p>
        <Link className='main-link' href={`/contact`}>Schedule Now</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/aboutus.webp" alt="image of a van" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};