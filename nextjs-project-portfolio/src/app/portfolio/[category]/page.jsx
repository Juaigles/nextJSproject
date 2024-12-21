"use client"

import React, { useEffect } from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { items } from "./data.js";
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProjectCard from '@/components/Mobile/ProjectCards/ProjectCard';
import PickProject from '@/components/Desktop/PickProject/PickProject';
import useBreakpoint from '@/components/hooks/useBreakpoint/useBreakpoint';

const getData = (cat) => {
  const data = items[cat]

  if (data) {
    return data
  }

  return notFound()
}

const Category = ({ params }) => {
  const isMobile = useBreakpoint(1060)
  const {category} = React.use(params)
  const data = getData(category)




  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      <div className={styles.projects}>

      {
        data.map(item => (
          isMobile ? (

              <ProjectCard key={item.id} props={item} />
          ) : (
            <PickProject key={item.id} props={item}/>
          )
          
          
          
          
        ))
      }
      </div>

    



{/*       
      {data.map(item => (
        <div className={styles.newitem} key={item.id}>
          <div className={styles.newTitleDiv}>
            <h2 className={styles.newTitle}>{item.title}</h2>
          </div>
          <div className={styles.centeredImg}>

            <div className={category == 'applications' ? styles.photoApp : styles.newImgContainer}>
              <Image
                className={styles.newimg}
                width={500}
                height={500}
                src={item.image}
                alt=''
              />
            </div>
          </div>
          <div className={styles.newBody}>
            <div className={styles.newcontent}>
              <div className={category == "applications" ? styles.desarrollo :styles.newlinks}>

                <div>{item.repo ? <Link href={item.repo} className={styles.link}>Ver repositorio GitHub</Link> : <h2>(En desarrollo)</h2>}</div>
                <div>              {item.url ? <Link href={item.url} className={styles.link}>Visitar la web</Link> : null}</div>
              </div>
              <div className={styles.prueba}>
                <div className={styles.descDiv}>
                  <p className={styles.newdesc}>{item.desc}</p>
                </div>
              </div>
                <div className={styles.centeredButton}>
                  <Button url={`/portfolio/${item.category}/${item.id}`} text="Ver más" />
              
              </div>
            </div>
          </div>

        </div>
      ))} */}



    </div>
  )
}

export default Category