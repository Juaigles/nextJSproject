import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
  title: "Kiookai Dev Contact Information",
  description: "This is contact information page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Contacta conmigo!</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            fill={true}
            className={styles.image}
            alt='contact'
          />
        </div>
        <div className={styles.form}>
          <input type="text" placeholder='Nombre' className={styles.input} />
          <input type="text" placeholder='Email' className={styles.input} />
          <textarea className={styles.textArea} placeholder='Escribe tu mensaje' cols="30" rows="10"></textarea>
          <div className={styles.centeredButon}>

            <Button url='#' text="Enviar" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact