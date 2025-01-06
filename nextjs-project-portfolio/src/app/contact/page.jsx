"use client"

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import Link from 'next/link'


const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const formData = new FormData(e.target); // Extrae los datos del formulario
    const data = Object.fromEntries(formData.entries()); // Convierte a objeto

    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Mensaje enviado correctamente');
    } else {
      alert('Hubo un error al enviar el mensaje');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Contacta conmigo!</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact2.png'
            fill={true}
            className={styles.image}
            alt='contact'
          />
        </div>
        <div >
          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder='Nombre' className={styles.input} required />
            <input type="email" name="email" placeholder='Email' className={styles.input} required />
            <textarea
              name="mensaje"
              className={styles.textArea}
              placeholder='Escribe tu mensaje'
              cols="30"
              rows="10"
              required
            ></textarea>
            <div className={styles.centeredButon}>
              <button className={styles.button} type="submit"  >Enviar</button>
            </div>
          </form>
        </div>
      </div>
    <Link href="https://storyset.com/business">Business illustrations by Storyset</Link>
    

    </div>
  )
}

export default Contact;
