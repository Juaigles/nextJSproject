"use client"
import Image from 'next/image';
import React from 'react';
import styles from "./imageGallery.module.css";
import { useState } from 'react';
import Link from 'next/link';


const ImageGallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar la imagen actual
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <button className={`${styles.prevButton} ${images[currentIndex].cat ? styles.prevButtonApp : ""}`} onClick={handlePrev}>
                        &lt;
                    </button>

                    <Image
                        src={images[currentIndex].src ? images[currentIndex].src : setCurrentIndex(0)}
                        alt={images[currentIndex].alt}
                        width={800}
                        height={500}
                        className={images[currentIndex].cat ? styles.imageApp : styles.image}
                        priority
                    />
                    <button className={`${styles.nextButton} ${images[currentIndex].cat ? styles.nextButtonApp : ""}`} onClick={handleNext}>
                        &gt;
                    </button>
                </div>
                <h3>{images[currentIndex].text}</h3>
                {
                    images[currentIndex].button ?
                        <div className={styles.center}>

                            <div className={styles.button}>
                                <Link href="/document/[documentId]" as={`/document/${images[currentIndex].button}`} passHref download>
                                    Descargar
                                </Link>
                            </div>

                        </div> : ""
                }

            </div>
        </div>
    );
};

export default ImageGallery;