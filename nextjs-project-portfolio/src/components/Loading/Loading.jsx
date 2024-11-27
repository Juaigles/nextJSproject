import React from 'react'
import styles from './loading.module.css'

export const Loading = () => {
    return (
        <div className={styles.content}>
            <div className={styles.loadingDiv}>
                <p className={styles.loading}></p>
                <p>Cargando...</p>
            </div>
        </div>
    )
}
