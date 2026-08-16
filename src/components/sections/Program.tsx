"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Program.module.css";

const PROGRAMS = [
  {
    id: "brand",
    num: "01",
    title: "SENTRA BRAND",
    desc: "Bangun identitas usaha yang mudah dikenali.",
    viz: () => (
      <div className="flex flex-col gap-4 w-full h-full justify-center items-center opacity-80">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-white rounded-full"></div>
          <div className="w-32 h-16 bg-white rounded-sm"></div>
        </div>
        <div className="flex gap-4">
          <div className="w-24 h-8 bg-white opacity-50 rounded-sm"></div>
          <div className="w-24 h-8 bg-white opacity-50 rounded-sm"></div>
        </div>
      </div>
    )
  },
  {
    id: "web",
    num: "02",
    title: "SENTRA WEB",
    desc: "Bangun kehadiran digital yang mudah ditemukan.",
    viz: () => (
      <div className="w-full max-w-sm aspect-video border-2 border-white rounded-md flex flex-col overflow-hidden opacity-80">
        <div className="h-6 border-b-2 border-white flex items-center px-2 gap-1">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
        <div className="flex-1 p-4 flex flex-col gap-2">
          <div className="w-1/3 h-4 bg-white rounded-sm"></div>
          <div className="w-full h-12 bg-white opacity-20 rounded-sm mt-auto"></div>
        </div>
      </div>
    )
  },
  {
    id: "social",
    num: "03",
    title: "SENTRA SOCIAL",
    desc: "Bangun komunikasi yang konsisten dengan pelanggan.",
    viz: () => (
      <div className="grid grid-cols-3 gap-2 w-full max-w-xs opacity-80">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="aspect-square bg-white opacity-50 rounded-sm"></div>
        ))}
      </div>
    )
  },
  {
    id: "insight",
    num: "04",
    title: "SENTRA INSIGHT",
    desc: "Pahami performa digital untuk menentukan langkah berikutnya.",
    viz: () => (
      <div className="w-full h-48 flex items-end justify-between px-4 gap-2 opacity-80">
        {[40, 70, 45, 90, 60, 100].map((h, i) => (
          <motion.div 
            key={i} 
            className="w-full bg-white rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
      </div>
    )
  }
];

export default function Program() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section} id="program">
      <div className="container">
        <motion.div 
          className={styles.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          04 / PROGRAM SENTRA
        </motion.div>

        <motion.h2 
          className={`${styles.headline} font-display`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          EMPAT LANGKAH.<br/>
          SATU TUJUAN.
        </motion.h2>


        <div className={styles.interactiveSystem}>
          <div className={styles.navigation}>
            {PROGRAMS.map((prog, idx) => (
              <div 
                key={prog.id}
                className={`${styles.navItem} ${activeIndex === idx ? styles.active : ""}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className={styles.navIndicator}></div>
                <div className={styles.navItemContent}>
                  <div className={styles.navItemTitle}>
                    <span className={styles.navItemNum}>{prog.num}</span>
                    {prog.title}
                  </div>
                  <div className={styles.navItemDesc}>
                    {prog.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.visualization}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className={styles.vizContent}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.vizGraphic}>
                  {PROGRAMS[activeIndex].viz()}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.mobileAccordion}>
          {PROGRAMS.map((prog, idx) => (
            <div 
              key={prog.id}
              className={`${styles.accordionItem} ${activeIndex === idx ? styles.active : ""}`}
            >
              <div 
                className={styles.accordionHeader}
                onClick={() => setActiveIndex(idx === activeIndex ? -1 : idx)}
              >
                <span className={styles.accordionNum}>{prog.num}</span>
                <h3 className={styles.accordionTitle}>{prog.title}</h3>
              </div>
              <div className={styles.accordionBody}>
                <p className={styles.accordionDesc}>{prog.desc}</p>
                <div className={styles.accordionViz}>
                  {prog.viz()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
