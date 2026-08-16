"use client";

import { motion, Variants } from "framer-motion";
import styles from "./Tantangan.module.css";

const CHALLENGES = [
  { num: "01", text: "BELUM MEMILIKI WEBSITE" },
  { num: "02", text: "IDENTITAS DIGITAL BELUM KUAT" },
  { num: "03", text: "KONTEN BELUM KONSISTEN" },
  { num: "04", text: "BELUM MEMAHAMI PERFORMA DIGITAL" },
];

export default function Tantangan() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "tween", duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.section} id="tantangan">
      <div className="container">
        <motion.div 
          className={styles.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          02 / TANTANGAN
        </motion.div>

        <motion.h2 
          className={`${styles.headline} font-display`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          USAHA BAGUS<br/>
          BELUM TENTU<br/>
          <span className={styles.highlight}>MUDAH DITEMUKAN.</span>
        </motion.h2>

        <motion.div 
          className={styles.list}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {CHALLENGES.map((challenge, i) => (
            <motion.div 
              key={challenge.num} 
              className={styles.listItem}
              variants={itemVariants}
            >
              <div className={styles.listBackground}></div>
              <div className={styles.listContent}>
                <span className={styles.listNumber}>{challenge.num}</span>
                <span className={styles.listText}>{challenge.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
