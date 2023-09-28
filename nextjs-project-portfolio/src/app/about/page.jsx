import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
    title: "Kiookai Dev about page",
    description: "This is my About page",
  };

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                    className={styles.img}
                    src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true}
                    alt=''
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Juan María Iglesias Mateos</h1>
                    <h2 className={styles.imgDesc}>Desarrollador web fullstack</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>¿Quién Soy?</h1>
                    <p className={styles.desc}>¡Hola! Mi nombre es Juan María, y soy desarrollador web fullstack. He pasado varios años formandome en este mundo que me apasiona, y gracias a ello, a dia de hoy estoy más cerca de convertirme en el profesional que deseo.
                        <br />
                        <br />
                        Mi formación en materia de desarrollo web, ha sido a cargo de la escuela de programación CODE4JOBS. En la cual, durante mi progreso en el curso he podido aprender a desenvolverme en difenrentes tecnologias web.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>¿Qué capacidades tengo?</h1>
                    <p>
                            Gracias a mi formación, he podido adquirir habilidad y conocimiento, en diferentes tecnologias del desarrollo web. Con la finalidad de transformar mi conocimiento junto a las herramientas, en una aplicacción Web moderna, responsiva y actual.
                        
                     
                        <br />
                        <br /> - Páginas web dinámicas con React y Nextjs
                        <br />
                        <br /> - Manejo de servidores en Express
                        <br />
                        <br /> - Gestión e implementación de bases de datos con MongoDB
                        </p>
                        <Button url="/contact" text="Contactar"/>

                </div>
            </div>
        </div>
    )
}

export default About