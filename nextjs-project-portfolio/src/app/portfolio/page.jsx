import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
  title: "Kiookai Dev Portfolio",
  description: "This my Portfolio",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Escoje una sección</h1>
      <div className={styles.items}>
   
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Páginas web</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Aplicaciones</span>
        </Link>
        { <Link href="/portfolio/games" className={styles.item}>
          <span className={styles.title}>Juegos</span>
        </Link> }
      </div>
    </div>
  )
}

export default Portfolio