"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import styles from "./Hero.module.css";
import Link from "next/link";
import SafeImage from "../ui/SafeImage";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const textRevealVariants: Variants = {
    hidden: { y: "120%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const wipeVariants: Variants = {
    hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: { type: "tween", duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const imageRevealVariants: Variants = {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: {
      clipPath: "inset(0 0 0 0)",
      transition: { type: "tween", duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const fadeVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: "tween", duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.hero} id="hero">
      <motion.div
        className={`container ${styles.content}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.label} variants={fadeVariants}>
          PLATFORM TRANSFORMASI DIGITAL<br />UNTUK UMKM INDONESIA
        </motion.div>

        <h1 className={`${styles.headline} font-display`}>
          <span className={styles.headlineLine}>
            <motion.span style={{ display: 'block' }} variants={textRevealVariants}>
              USAHA LOKAL.
            </motion.span>
          </span>
          <span className={styles.headlineLine}>
            <motion.span style={{ display: 'block' }} className={styles.blueText} variants={wipeVariants}>
              NAIK KELAS
            </motion.span>
          </span>
          <span className={styles.headlineLine}>
            <motion.span style={{ display: 'block' }} variants={textRevealVariants}>
              SECARA DIGITAL.
            </motion.span>
          </span>
        </h1>

        <div className={styles.imageCol}>
          <div className={styles.decorations}>
            <div className={styles.gridLines}></div>
            <motion.div
              className={styles.digitalMark1}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
            <motion.div
              className={styles.digitalMark2}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 120, opacity: 0.1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            />
          </div>

          <motion.div
            className={styles.imageWrapper}
            variants={imageRevealVariants}
          >
            <SafeImage
              src="https://inalabs.id/umkm/hero-umkm.webp"
              fill
              priority
              alt="Pemilik UMKM lokal Indonesia di tempat usahanya"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 55vw, 38vw"
              style={{ objectFit: 'cover', objectPosition: '50% 40%' }}
            />
          </motion.div>
        </div>

        <motion.p className={styles.supporting} variants={fadeVariants}>
          SENTRA membantu usaha lokal memahami kesiapan digital, membangun identitas, memperkuat kehadiran online, dan menentukan langkah pertumbuhan yang lebih terarah.
        </motion.p>

        <motion.div className={styles.actions} variants={fadeVariants}>
          <Link href="#assessment" className={styles.primaryCta}>
            CEK KESIAPAN DIGITAL <ArrowUpRight size={18} />
          </Link>
          <Link href="#tentang" className={styles.secondaryCta}>
            JELAJAHI SENTRA <ArrowDown size={18} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
