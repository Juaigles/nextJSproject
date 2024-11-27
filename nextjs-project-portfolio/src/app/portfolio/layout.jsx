import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <div>

    <Link href="/portfolio">
        <h1 className={styles.mainTitle}>Mis trabajos</h1>
    </Link>
        {children}
    </div>
  )
}

export default Layout