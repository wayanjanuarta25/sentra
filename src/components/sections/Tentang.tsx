"use client";

import { motion } from "framer-motion";
import styles from "./Tentang.module.css";
import SafeImage from "../ui/SafeImage";

const PRINCIPLES = [
  { num: "01", text: "SEDERHANA" },
  { num: "02", text: "RELEVAN" },
  { num: "03", text: "BERTUMBUH" },
];

export default function Tentang() {
  return (
    <section className={styles.section} id="tentang">
      <div className={`container ${styles.content}`}>
        <div className={styles.leftCol}>
          <motion.div 
            className={styles.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            03 / TENTANG SENTRA
          </motion.div>

          <motion.h2 
            className={`${styles.headline} font-display`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            DIGITALISASI<br/>
            <span className={styles.highlight}>TIDAK HARUS RUMIT.</span>
          </motion.h2>

          <motion.p 
            className={styles.supporting}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            SENTRA hadir sebagai platform yang membantu UMKM memahami posisi digital mereka dan menentukan langkah transformasi yang lebih sederhana, relevan, dan terarah.
          </motion.p>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.principles}>
            {PRINCIPLES.map((principle, i) => (
              <motion.div 
                key={principle.num} 
                className={styles.principle}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className={styles.principleNum}>{principle.num}</div>
                <div className={styles.principleText}>{principle.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.wideImageContainer}>
        <motion.div
          className={styles.wideImageInner}
          initial={{ scale: 1.03 }}
          whileInView={{ scale: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <SafeImage 
            src="http://inalabs.id/umkm/warung-bu-rini-wide.webp"
            fill
            alt="Suasana usaha kopi lokal Indonesia"
            sizes="(max-width: 768px) 100vw, 90vw"
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
