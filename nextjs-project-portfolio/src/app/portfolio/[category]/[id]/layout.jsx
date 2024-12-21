"use client"
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const Layout = ({children}) => {
    const params = useParams()
   const {category,id} = params
   console.log("params",params)
   console.log("param layouut",category)
  return (
    <div>

    <Link href={`/portfolio/${category}s`}>
        <h1 className={styles.mainSubTitle}>Volver atrás</h1>
    </Link>
        {children}
    </div>
  )
}

export default Layout