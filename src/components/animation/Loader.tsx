"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

interface LoaderProps {
  onReveal: () => void;
  onComplete: () => void;
  reducedMotion: boolean;
}

export default function Loader({ onReveal, onComplete, reducedMotion }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fallbackTimer = setTimeout(() => {
      onReveal();
      onComplete();
    }, 3000);

    if (reducedMotion) {
      const shortTimer = setTimeout(() => {
        onReveal();
        setTimeout(onComplete, 200);
      }, 400);
      return () => {
        document.body.style.overflow = "";
        clearTimeout(fallbackTimer);
        clearTimeout(shortTimer);
      };
    }

    let startTimestamp: number;
    let animationFrameId: number;
    const duration = 1200;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - (1 - progressRatio) * (1 - progressRatio);
      setProgress(Math.floor(easeProgress * 100));
      
      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(step);
      }
    };
    
    const counterTimer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(step);
    }, 300);

    const revealTimer = setTimeout(() => onReveal(), 1640);
    const completeTimer = setTimeout(() => onComplete(), 2200);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(fallbackTimer);
      clearTimeout(counterTimer);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [onReveal, onComplete, reducedMotion]);

  if (reducedMotion) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.blackBackground} />
      </div>
    );
  }

  const wordmarkVariants: Variants = {
    hidden: { y: "120%" },
    visible: { 
      y: 0,
      transition: { type: "tween" as const, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.6 }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { type: "tween" as const, duration: 1.2, delay: 0.3, ease: "easeOut" }
    }
  };



  return (
    <div className={styles.loaderContainer}>
      <motion.div 
        className={styles.blackBackground}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.64, duration: 0 }}
      />
      
      <motion.div 
        className={styles.blueWipe}
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: [0, 1, 1, 0],
          transformOrigin: ["left", "left", "right", "right"]
        }}
        transition={{ 
          times: [0, 0.3, 0.5, 1],
          duration: 0.8,
          delay: 1.4,
          ease: "easeInOut"
        }}
      />

      <motion.div 
        className={styles.content}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.6, duration: 0.1 }}
      >
        <div className={styles.topLabel}>
          SENTRA / DIGITAL TRANSFORMATION
        </div>

        <div className={styles.centerWrapper}>
          <div className={`${styles.wordmark} font-display`}>
            <motion.span 
              className={styles.wordmarkText}
              variants={wordmarkVariants}
              initial="hidden"
              animate="visible"
            >
              SENTRA.
            </motion.span>
          </div>
          <motion.div className={styles.descriptor} variants={fadeVariants} initial="hidden" animate="visible">
            PLATFORM TRANSFORMASI DIGITAL<br/>UNTUK UMKM INDONESIA
          </motion.div>
        </div>

        <div className={styles.bottomArea}>
          <div className={styles.progressNumber}>
            <span>{progress.toString().padStart(2, '0')}</span>
            <span className={styles.progressTarget}>100</span>
          </div>
          <div className={styles.progressLineContainer}>
            <motion.div 
              className={styles.progressLine}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
