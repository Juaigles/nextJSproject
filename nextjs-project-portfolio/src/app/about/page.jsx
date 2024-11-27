import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import Link from 'next/link';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import { image } from './data';

export const metadata = {
    title: "Kiookai Dev about page",
    description: "This is my About page",
};

const imageArray = Object.values(image)

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
                    <h3 className={styles.imgDesc}>Desarrollador web fullstack</h3>
                </div>
            </div>

            <section className={styles.textContainer} id="about">
                <div className={styles.aboutMe}>



                    <div className={styles.mainText}>
                        <h1 className={styles.title}>¡Hola! Soy Juan María Iglesias Mateos</h1>
                        <h2 className={styles.subtitle}>Desarrollador web curioso, autodidacta y listo para nuevos desafíos</h2>
                        <div className={styles.text}>

                            <p>
                                Desde que tengo memoria, siempre he sido una persona curiosa y apasionada por aprender cosas nuevas y superar nuevos retos. Esa curiosidad me ha llevado a explorar y dominar diferentes áreas de manera autodidacta: desde aprender a tocar instrumentos musicales hasta estudiar idiomas como el inglés y el japonés, y, finalmente, adentrarme en el mundo de la programación.
                            </p>

                            <p>
                                Aunque gran parte de mi conocimiento lo he adquirido por cuenta propia, entendí que para destacar en el mundo laboral era importante contar con una formación más estructurada. Por eso, decidí cursar un <strong>bootcamp intensivo de desarrollo web en Code4JOBS</strong>, donde perfeccioné mis habilidades en el stack <strong>MERN (MongoDB, Express.js, React.js, Node.js)</strong> y adquirí una base sólida para desarrollar aplicaciones completas, funcionales y escalables.
                            </p>

                            <p>
                                Hoy, con un equilibrio entre mi capacidad autodidacta y una formación orientada a las necesidades del mercado, estoy preparado para afrontar proyectos desafiantes y aportar soluciones creativas a equipos dinámicos. Lo que más me apasiona de la programacion es la posibilidad de transformar ideas en experiencias digitales que realmente importen.
                            </p>

                            <p>
                                Mi motivación principal es aprender, crecer y contribuir con proyectos que marquen la diferencia.
                            </p>
                        </div>
                    </div>
                    <div className={styles.photo}>
                        <Image src="/perfil.jpg" alt='perfil' width={300} height={400}></Image>
                    </div>
                </div>
                <div className={styles.skills}>
                    <div className={styles.centeredText}>

                        <h2 className={styles.cta}>¿Qué puedo ofrecer?</h2>
                    </div>

                    <ul className={styles.text}>
                        <li><strong>Desarrollo Frontend y Backend:</strong> Manejo del stack <strong>MERN (MongoDB, Express.js, React.js, Node.js)</strong> para crear aplicaciones completas, desde la lógica del servidor hasta interfaces de usuario dinámicas. Manejo del desarrollo de aplicaciones web en Next.js</li>
                        <li><strong>Desarrollo en remoto:</strong> Manejo de <strong>GIT</strong> para el control de versiones y trabajo en equipo.</li>
                        <li><strong>Proyectos reales:</strong> He desarrollado una web para servicios de VTC y taxi en Salamanca, además de mi propio portafolio, aplicando mis conocimientos en diseño, optimización y usabilidad.</li>
                        <li><strong>Idiomas:</strong> Hablo inglés con fluidez y tengo conocimientos básicos de japonés, lo que me permite trabajar con equipos internacionales y adaptarme a distintos contextos culturales.</li>
                        <li><strong>Enfoque autodidacta:</strong> Aunque no tengo formación universitaria, completé un <strong>bootcamp intensivo de desarrollo web en Code4JOBS</strong>, que me proporcionó una base sólida para trabajar con tecnologías modernas.</li>
                    </ul>

                </div>
                <div className={styles.filosophy}>


                    <h2>Mi filosofía de trabajo</h2>
                    <div className={styles.text}>

                        <p>
                            Creo en la importancia de la tecnología para resolver problemas reales y conectar a las personas. Me considero una persona <strong>proactiva, curiosa y orientada al detalle</strong>. Siempre busco nuevas oportunidades para aprender, mejorar y superar los desafíos del desarrollo web.
                        </p>
                        <p>
                            Además, valoro la <strong>comunicación abierta y el trabajo en equipo</strong>. Estoy convencido de que las mejores soluciones surgen de la colaboración y la creatividad conjunta.
                        </p>
                    </div>
                </div>

                <div className={styles.studiesContainer}>
                    <div className={styles.centeredText}>

                        <h2 className={styles.cta} >Mi formación y experiencia</h2>
                    </div>
                    <div className={styles.studies}>
                        <div className={styles.formacion} >
                            <div className={styles.studiesTitle}>
                                <h3>Formación</h3>

                            </div>
                            <ul>
                                <li>
                                    <strong>Bootcamp MERN - Code4JOBS</strong> <br />
                                    <small>Desarrollo Web Fullstack (React.js, Node.js, MongoDB, Express.js)</small>
                                </li>
                                <li>
                                    <strong>Autodidacta:</strong> Continuo aprendizaje de nuevas tecnologías a través de proyectos propios y recursos en línea.
                                </li>

                            </ul>

                        </div>
                        <div className={styles.experiencia}>
                            <div className={styles.studiesTitle}>

                                <h3>Experiencia</h3>
                            </div>
                            <ul>
                                <li>
                                    <strong>Web de VTC y Taxi en Salamanca:</strong>
                                    Desarrollo y diseño de una página funcional, con integración de formularios de contacto, optimización SEO y despliegue en Vercel.
                                </li>
                                <li>
                                    <strong>Portafolio personal:</strong>
                                    Creación de una plataforma que muestra mis proyectos y habilidades, diseñada para atraer a reclutadores y empresas. Desplegada en Vercel.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.documents}>
                    <div className={styles.centeredText}>
                        <h2 className={styles.cta}>Documentos</h2>

                    </div>
                    <div className={styles.download}>
                        <div className={styles.certifications}>
                        <h3 className={styles.centeredText}>Mis certificados:</h3>
                            <div className={styles.downloadField}>
                                <div className={styles.gallery}>
                                    <ImageGallery images={imageArray} />


                                </div>

                            </div>
                        </div>
                        <div className={styles.cv}>
                            <h3 className={styles.centeredText}>Mi Curriculum Vitae:</h3>
                            <div className={styles.downloadField}>
                                <div className={styles.gallery}>

                                    <Image className={styles.cvPhoto} src={image.cv} width={600} height={700} />

                                    <div className={styles.centeredText}>

                                        <div className={styles.button}>

                                            <Link href="/document/cv.pdf" download>Descargar</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaContainer}>
                    <div>
                        <div className={styles.centeredText}>
                            <h2 className={styles.cta}>¿Hablamos?</h2>
                        </div>
                        <div className={styles.finalText}>
                            <div className={styles.centeredp}>
                                <p>
                                    Si estás buscando un desarrollador web comprometido y creativo para tu próximo proyecto o equipo, no dudes en <a href="#contacto">contactarme</a>. ¡Estoy emocionado por conocer nuevas oportunidades y crear algo increíble juntos!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.centeredText} >
                        <Link href="/contact" className={styles.button}>Contactar</Link>
                     
                    </div>
                </div>

            </section>
        </div>
    )
}

export default About