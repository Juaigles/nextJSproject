import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.home}>

    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Juan María Iglesias Mateos</h1>
        <p className={styles.desc}>Desarrollador web fullstack.</p>
        <Button url="/portfolio" text="Ver portafolio"/>
       

      </div>
      <div className={styles.item}>

        <Image src="/hero.png" width={1080} height={720} alt='Hero Image' className={styles.img} />
      </div>
    </div>

    </div>
  );
}
