"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import SafeImage from "../ui/SafeImage";
import styles from "./Perjalanan.module.css";

const STAGES = [
  { num: "01", text: "EVALUASI" },
  { num: "02", text: "IDENTITAS" },
  { num: "03", text: "KEHADIRAN DIGITAL" },
  { num: "04", text: "KOMUNIKASI" },
  { num: "05", text: "EVALUASI BERKELANJUTAN" },
];

export default function Perjalanan() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className={styles.section} id="transformasi" ref={containerRef}>
      <div className="container">
        <motion.h2
          className={`${styles.headline} font-display`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          DARI<br />
          &ldquo;BELUM&rdquo;<br />
          MENJADI<br />
          &ldquo;SIAP&rdquo;.
        </motion.h2>

        <div className={styles.journeyContainer}>
          <div className={styles.track}>
            <motion.div
              className={styles.trackFill}
              style={{ "--progress": scale } as any}
            />
          </div>

          <div className={styles.stages}>
            {STAGES.map((stage, i) => (
              <React.Fragment key={stage.num}>
                <motion.div
                  className={styles.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={styles.stageMarker}>{stage.num}</div>
                  <div className={styles.stageTitle}>{stage.text}</div>
                </motion.div>

                {stage.num === "02" && (
                  <motion.div
                    className={styles.processImageWrapper}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <SafeImage
                      src="https://inalabs.id/umkm/kopi-process.webp"
                      fill
                      alt="Proses menyiapkan produk kopi usaha lokal"
                      sizes="(max-width: 768px) 100vw, 30vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
