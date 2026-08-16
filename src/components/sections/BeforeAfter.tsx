"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./BeforeAfter.module.css";
import SafeImage from "../ui/SafeImage";

const DATA = {
  before: [
    { title: "IDENTITAS", text: "Identitas belum konsisten." },
    { title: "KEHADIRAN", text: "Belum memiliki website." },
    { title: "KOMUNIKASI", text: "Konten tidak terencana." },
    { title: "INSIGHT", text: "Performa belum dievaluasi." },
  ],
  after: [
    { title: "IDENTITAS", text: "Identitas lebih terarah." },
    { title: "KEHADIRAN", text: "Memiliki kehadiran digital." },
    { title: "KOMUNIKASI", text: "Komunikasi lebih konsisten." },
    { title: "INSIGHT", text: "Mulai memahami performa." },
  ]
};

export default function BeforeAfter() {
  const [mode, setMode] = useState<"before" | "after">("before");

  return (
    <section className={`${styles.section} ${mode === "before" ? styles.beforeMode : styles.afterMode}`}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={`${styles.headline} font-display`}>
            <span className={`${styles.headlineLine} ${mode === "before" ? styles.active : ""}`}>SEBELUM.</span>
            <span className={`${styles.headlineLine} ${mode === "after" ? styles.active : ""}`}>SESUDAH.</span>
          </h2>

          <div className={styles.toggleContainer}>
            <button
              className={`${styles.toggleBtn} ${mode === "before" ? styles.active : ""}`}
              onClick={() => setMode("before")}
            >
              SEBELUM
            </button>
            <span className={styles.divider}>|</span>
            <button
              className={`${styles.toggleBtn} ${mode === "after" ? styles.active : ""}`}
              onClick={() => setMode("after")}
            >
              SESUDAH
            </button>
          </div>
        </div>

        <div className={styles.splitLayout}>
          <div className={styles.list}>
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className={styles.listInner}
              >
                {DATA[mode].map((item, i) => (
                  <div key={i} className={styles.listItem}>
                    <div className={styles.listTitle}>{item.title}</div>
                    <div className={styles.listText}>{item.text}</div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.imageCol}>
            <AnimatePresence mode="wait">
              {mode === "before" ? (
                <motion.div
                  key="before"
                  className={styles.imageWrapper}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <SafeImage
                    src="https://inalabs.id/umkm/bu-rini-usaha.webp"
                    fill
                    alt="Bu Rini menjalankan usaha kopi sebelum transformasi digital"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  className={styles.imageWrapper}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <SafeImage
                    src="https://inalabs.id/umkm/bu-rini-after.webp"
                    fill
                    alt="Usaha Bu Rini setelah proses transformasi digital"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
