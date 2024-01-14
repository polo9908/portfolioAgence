import React, { useState, useEffect } from 'react';
import styles from './../../styles/Slider.module.css'; // Assurez-vous que le chemin est correct

export default function ImageSlider({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % images.length);
        }, 3000); // Change l'image toutes les 3 secondes

        return () => clearInterval(interval); // Nettoie l'intervalle
    }, [images.length]);

    return (
        <div className={styles.ContainerSlide}>
            {images.map((url, index) => (
                <img
                    key={index}
                    src={`http://localhost:1337${url}`}
                    alt={`Slide ${index}`}
                    className={`${styles.Image} ${index === activeIndex ? styles.ImageActive : ''}`}
                />
            ))}
        </div>
    );
}
