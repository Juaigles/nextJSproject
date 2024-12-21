
import Image from 'next/image'

import styles from './projectCards.module.css'
import LogoHook from "../../hooks/LogoHook/LogoHook.jsx"
import ObserverAnimations from '@/components/observerAnimation/OberserverAnimations';
import Link from 'next/link'


const ProjectCard = ({ props }) => {
    const data = props
    return (
               <ObserverAnimations key={data.id} animationType='jump-in'>

        <Link className={styles.card} href={`/portfolio/${data.category}/${data.id}`} >
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
            </div>
        </Link>
                    </ObserverAnimations>
    )
}

export default ProjectCard