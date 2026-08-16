"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import styles from "./Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className={styles.section} id="kontak">
      <div className={`container ${styles.content}`}>
        <motion.div 
          className={styles.leftCol}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.label}>10 / KONTAK</div>
          
          <h2 className={`${styles.headline} font-display`}>
            SIAP<br/>NAIK KELAS?
          </h2>
          
          <p className={styles.supporting}>
            Mulai dengan memahami kesiapan digital usahamu.
          </p>
          
          <Link href="#assessment" className={styles.cta}>
            CEK KESIAPAN DIGITAL <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <motion.div 
          className={styles.rightCol}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Nama</label>
              <input type="text" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Nama Usaha</label>
              <input type="text" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <label>WhatsApp</label>
              <input type="tel" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Pesan</label>
              <textarea className={styles.input} rows={2} required></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              {submitted ? "TERKIRIM!" : "KIRIM PESAN"}
            </button>
            <div className={styles.demoNote}>
              Demo formulir — pengiriman belum terhubung ke server.
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
