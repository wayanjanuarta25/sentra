"use client";

import { motion } from "framer-motion";
import styles from "./Dokumentasi.module.css";
import SafeImage from "../ui/SafeImage";

export default function Dokumentasi() {
  return (
    <section className={styles.section} id="dokumentasi">
      <div className="container">
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          08 / DOKUMENTASI
        </motion.div>

        <motion.h2
          className={`${styles.headline} font-display`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          SIMULASI<br />
          TRANSFORMASI<br />
          UMKM.
        </motion.h2>

        <div className={styles.editorialFlow}>
          <div className={styles.editorialRow}>
            <motion.div
              className={`${styles.imageWrapper} ${styles.portraitLarge}`}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.simulasiLabel}>SIMULASI</div>
              <SafeImage
                src="https://inalabs.id/umkm/bu-rini-usaha.webp"
                fill
                alt="Bu Rini menjalankan usaha kopi sebelum transformasi digital"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.sequenceNum}>01</div>
              <h3 className={`${styles.storyTitle} font-display`}>KONDISI AWAL</h3>
              <p className={styles.storyText}>Usaha Kopi Bu Rini memiliki potensi besar namun belum dikelola dengan identitas yang konsisten.</p>
            </motion.div>
          </div>

          <div className={`${styles.editorialRow} ${styles.reverseRow}`}>
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.sequenceNum}>02</div>
              <h3 className={`${styles.storyTitle} font-display`}>IDENTITAS</h3>
              <p className={styles.storyText}>Membangun sistem visual yang kuat untuk merepresentasikan kualitas produk kepada pelanggan yang lebih luas.</p>
            </motion.div>
            <motion.div
              className={`${styles.imageWrapper} ${styles.squareSmall}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <SafeImage
                src="https://inalabs.id/umkm/kopi-product.webp"
                fill
                alt="Produk kopi lokal dengan identitas visual yang lebih konsisten"
                sizes="(max-width: 768px) 100vw, 30vw"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>

          <div className={styles.fullWidthRow}>
            <div className={styles.sequenceNumCentered}>03 / KEHADIRAN DIGITAL</div>
            <motion.div
              className={`${styles.imageWrapper} ${styles.portraitWide}`}
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <SafeImage
                src="https://inalabs.id/umkm/bu-rini-digital.webp"
                fill
                alt="Pemilik UMKM menggunakan perangkat digital untuk mengelola usahanya"
                sizes="(max-width: 768px) 100vw, 80vw"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>

          <div className={styles.editorialRow}>
            <motion.div
              className={`${styles.imageWrapper} ${styles.squareDetail}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <SafeImage
                src="https://inalabs.id/umkm/warung-detail.webp"
                fill
                alt="Detail penerapan identitas visual pada usaha kopi lokal"
                sizes="(max-width: 768px) 100vw, 30vw"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.sequenceNum}>04</div>
              <h3 className={`${styles.storyTitle} font-display`}>PENERAPAN</h3>
              <p className={styles.storyText}>Detail penerapan pada elemen fisik warung memastikan identitas visual tidak hanya berhenti di layar digital.</p>
            </motion.div>
          </div>

          <div className={`${styles.editorialRow} ${styles.reverseRow} ${styles.finalRow}`}>
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.sequenceNum}>05</div>
              <h3 className={`${styles.storyTitle} font-display`}>LANGKAH BERIKUTNYA</h3>
              <p className={styles.storyText}>Mulai dengan evaluasi dan terus bertumbuh. Masa depan digital siap dikelola.</p>
            </motion.div>
            <motion.div
              className={`${styles.imageWrapper} ${styles.portraitLarge}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <SafeImage
                src="https://inalabs.id/umkm/bu-rini-after.webp"
                fill
                alt="Bu Rini dan usaha kopinya setelah simulasi transformasi"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
