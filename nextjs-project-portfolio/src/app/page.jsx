import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Desarrollador web fullstack.</h1>
        <p className={styles.desc}>Avanzando poco a poco, y mejorando en el camino.</p>
        <Button url="/portfolio" text="See Our Works"/>
       

      </div>
      <div className={styles.item}>

        <Image src={Hero} alt='Hero Image' className={styles.img} />
      </div>
    </div>

  );
}
