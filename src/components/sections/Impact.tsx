"use client";

import { motion, Variants } from "framer-motion";
import styles from "./Impact.module.css";

const STATEMENT_1 = ["TEKNOLOGI", "BUKAN UNTUK", "MEMBUAT USAHA", "LEBIH RUMIT."];
const STATEMENT_2 = ["TAPI UNTUK", "MEMBUKA", "LEBIH BANYAK", "PELUANG."];

export default function Impact() {
  const lineVariants: Variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "tween", duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className={styles.section} id="impact">
      <div className={styles.content}>
        <motion.div 
          className={`${styles.statement} font-display`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {STATEMENT_1.map((line, i) => (
            <span key={i} className={styles.statementLine}>
              <motion.span style={{ display: 'block' }} variants={lineVariants}>
                {line}
              </motion.span>
            </span>
          ))}
        </motion.div>

        <motion.div 
          className={`${styles.statement} ${styles.statement2} font-display`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {STATEMENT_2.map((line, i) => (
            <span key={i} className={styles.statementLine}>
              <motion.span style={{ display: 'block' }} variants={lineVariants}>
                {line}
              </motion.span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
