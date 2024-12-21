"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./animations.module.css";

const ObserverAnimations = ({ children, threshold = 0.1, animationType = "fadeUp" }) => {
    const ref = useRef();
    const [refInView, inView] = useInView({
        triggerOnce: true, // Permitir múltiples observaciones
        threshold,
    });

    useEffect(() => {
        if (ref.current) {
            ref.current.classList.add(styles.animated);

            if (inView) {

                ref.current.classList.add(styles[animationType]);
                ref.current.classList.remove(styles.animated); // Quitar la clase inicial
                
            }

        }

    }, [inView, animationType]);

    return <div ref={(el) => { ref.current = el; refInView(el); }}>{children}</div>;
};

export default ObserverAnimations;
