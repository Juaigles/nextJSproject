"use client";

import { notFound, useParams } from 'next/navigation';
import { items } from './data';
import styles from './page.module.css'
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import Link from 'next/link';


const getData = (cat, id) => {
  const data = items[cat]; // Obtiene la lista de la categoría
  if (!data) {
    console.log('no existe categoria');

    return notFound(); // Si no existe la categoría, devuelve un 404
  }

  const response = data.find((item) => item.id === parseInt(id)); // Busca el elemento por ID

  if (response) {
    return response; // Retorna el elemento si se encuentra
  }
  console.log("no existe id");

  return notFound(); // Si no se encuentra el elemento, devuelve un 404
};


const DetailPage = () => {
  const params = useParams(); // Captura los parámetros dinámicos
  const { category, id } = params;
  const data = getData(category, id)
  const features = Object.values(data.project_features);
  const images = Object.values(data.image);

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Detalles del proyecto:</h2>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.links}>

        {data.repo ? <Link href={data.repo} className={styles.link}>Ver repositorio GitHub</Link> : <h2>(En desarrollo)</h2>}
        {data.url ? <Link href={data.url} className={styles.link}>Visitar la web</Link> : null}
      </div>
      <p className={styles.desc}>{data.desc}</p>
      {console.log(images)}

      <ImageGallery images={images} />
      <h3 className={styles.subtitle}>Caracteristicas del proyecto:
      </h3>
      <ul className={styles.ul}>

        {features.map((feature, index) => (
          <li key={index} className={styles.li}>
            {feature}
          </li>
        ))}
      </ul>
      <h4 className={styles.subtitle}>Impacto del proyecto:</h4>
      <p className={styles.desc}>{data.considerations}</p>

    </div>
  );
};

export default DetailPage;
