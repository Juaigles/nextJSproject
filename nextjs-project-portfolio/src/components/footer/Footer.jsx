import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div> ©2023 Juan María Iglesias. All rights reserved.</div>
            <div className={styles.social}>
                <Image src="/1.png" height={15} width={15} className={styles.icon} alt="Kiookai" />
                <Image src="/2.png" height={15} width={15} className={styles.icon} alt="Kiookai" />
                <Image src="/3.png" height={15} width={15} className={styles.icon} alt="Kiookai" />
                <Image src="/4.png" height={15} width={15} className={styles.icon} alt="Kiookai" />
            </div>
        </div>
    )
}

export default Footer