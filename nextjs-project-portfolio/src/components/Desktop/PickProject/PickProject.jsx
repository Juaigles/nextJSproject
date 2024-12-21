import React from 'react'
import LogoHook from '../../hooks/LogoHook/LogoHook'
import styles from './pickProject.module.css'

import Image from 'next/image'
import Button from '@/components/Button/Button'



const PickProject = ({ props }) => {

    const data = props
    return (


        <div className={styles.card}>
            <div className={styles.img}>
                <Image src={data.image} layout="fill" objectFit="cover" alt={data.title} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.description}>{data.desc}</p>
                <div className={styles.tecs}>
                    {
                        data.tecs?.map((tec, index) => (
                            <div key={index} className={styles.tec}>
                                <LogoHook nameLogo={tec} />
                            </div>
                        ))
                    }
                </div>
                <div className={styles.buttonDiv}>
                <Button text="VER MÁS" url={`/portfolio/${data.category}/${data.id}`}  />

                </div>
            </div>

        </div>

    )
}

export default PickProject