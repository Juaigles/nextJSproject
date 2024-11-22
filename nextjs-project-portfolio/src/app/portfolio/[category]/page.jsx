"use client"

import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { items } from "./data.js";
import { notFound } from 'next/navigation';
import Link from 'next/link';

const getData = (cat) => {
  const data = items[cat]

  if (data) {
    return data
  }

  return notFound()
}

const Category = ({ params }) => {
  const data = getData(params.category)
  console.log(data)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map(item =>(
              <div className={styles.item} key={item.id}>
              <div className={styles.content}>
                <h1 className={styles.title}>{item.title}</h1>
                <div className={styles.links}>

                {item.repo? <Link href={item.repo} className={styles.link}>Ver repositorio GitHub</Link>: <h2>(En desarrollo)</h2>}
                {item.url? <Link href={item.url} className={styles.link}>Visitar la web</Link>: null}
                </div>
           
                <p className={styles.desc}>{item.desc}</p>
             
            <Button url={`/portfolio/${item.category}/${item.id}`} text="Ver más"/>
     
           
              </div>
              <div className={styles.imgContainer}>
      
                <Image
                  className={styles.img}
                  fill={true}
                  src={item.image}
                  alt=''
                />
              </div>
      
            </div>
      ))}



    </div>
  )
}

export default Category