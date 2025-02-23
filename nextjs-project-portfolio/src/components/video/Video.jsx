import React from 'react'
import styles from './video.module.css'

const Video = ({src, poster}) => {
  return (
    <div className={styles.component}>

        <h2>Video showcase del proyecto</h2>
        
    <video className={styles.video}
      width={800}
      height={400}
      controls
      poster={poster}>
      <source src={src} type='video/mp4' />
      Tu navegador no soporta la reproducción de vídeos.
    </video>
  </div>
  )
}

export default Video