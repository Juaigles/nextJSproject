import React from 'react'
import styles from './page.module.css'

const privaci_policy = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Política de Privacidad</h1>
                <div>
                    <h2>1. Información que recolectamos</h2>
                    <p>En este sitio web, recopilamos información personal únicamente cuando los usuarios interactúan con:</p>
                    <ul>
                        <li>El formulario de contacto (nombre, correo electrónico y mensaje).</li>
                        <li>Cualquier funcionalidad de comentarios o feedback, si aplica.</li>
                    </ul>
                    <p>También recolectamos datos técnicos como:</p>
                    <ul>
                        <li>Dirección IP.</li>
                        <li>Navegador y sistema operativo utilizados.</li>
                        <li>Información sobre las páginas visitadas (a través de herramientas de análisis como Google Analytics).</li>
                    </ul>
                </div>
                <div>
                    <h2>2. Uso de la información</h2>
                    <p>La información recopilada se utiliza para:</p>
                    <ul>
                        <li>Responder consultas enviadas a través del formulario de contacto.</li>
                        <li>Mejorar la experiencia del usuario mediante análisis de navegación.</li>
                    </ul>
                </div>
                <div>
                    <h2>3. Terceros</h2>
                    <p>Tu información no será compartida con terceros, excepto en los siguientes casos:</p>
                    <ul>
                       
                        <li>Requisitos legales (en caso de ser necesario).</li>
                    </ul>
                </div>
                <div>
                    <h2>4. Cookies</h2>
                    <p>Este sitio utiliza cookies para:</p>
                    <ul>
                        <li>Mejorar la experiencia del usuario.</li>
                        <li>Recoger datos anónimos para análisis estadísticos.</li>
                    </ul>
                    <p>Puedes desactivar las cookies en la configuración de tu navegador en cualquier momento.</p>
                </div>
                <div>
                    <h2>5. Seguridad</h2>
                    <p>Nos esforzamos por proteger la información personal almacenada en este sitio web mediante medidas de seguridad estándar. Sin embargo, no podemos garantizar una seguridad absoluta debido a la naturaleza de Internet.</p>
            
                </div>
                <div>
                    <h2>6. Tus derechos</h2>
                    <p>Tienes derecho a:</p>
                    <ul>
                        <li>Solicitar acceso a los datos que tenemos sobre ti.</li>
                        <li>Solicitar la eliminación de tus datos personales.</li>
                    </ul>
                    <p>Si deseas ejercer estos derechos, puedes contactarnos a través del correo electrónico: contacto@jotadev.info</p>
                </div>
                <div>
                    <h2>7. Contacto</h2>
                    <p>Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos tus datos, puedes contactarnos en: Correo electrónico: contacto@jotadev.info</p>
                 
                </div>
                <div>
                    <h2>8. Cambios en esta política</h2>
                    <p>Esta política de privacidad puede actualizarse periódicamente. Publicaremos cualquier cambio en esta página.</p>
                  <p>Última actualización: 30/11/2024</p>
                </div>
            </div>
        </div>
    )
}

export default privaci_policy