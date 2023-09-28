"use client"

import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Register = () => {
  const [err, setError] = useState(null);

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headersr: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
    } catch (err) {
      setError(true)
    }
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder='Usuario' className={styles.input} required />
        <input type="email" placeholder='Email' className={styles.input} required/>
        <input type="password" placeholder='Contraseña' className={styles.input} required/>
        <button className={styles.button}>Registrar</button>
      </form>
      {err && "Something went wrong!"}
      <Link href={"/dashboard/login"}>Logeate con una cuenta existente</Link>
    </div>
  )
}

export default Register