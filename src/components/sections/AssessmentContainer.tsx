"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./AssessmentContainer.module.css";
import { QUESTIONS, calculateScore, type AssessmentResult } from "@/lib/assessment/scoring";

type Phase = "intro" | "question" | "result";

export default function AssessmentContainer() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const startAssessment = () => {
    setPhase("question");
    setCurrentIndex(0);
    setAnswers({});
  };

  const handleAnswer = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentIndex < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentIndex(c => c + 1), 300);
    } else {

      setTimeout(() => {
        const scores = {
          q1: newAnswers.q1 || 0,
          q2: newAnswers.q2 || 0,
          q3: newAnswers.q3 || 0,
          q4: newAnswers.q4 || 0,
          q5: newAnswers.q5 || 0,
        };
        setResult(calculateScore(scores));
        setPhase("result");
      }, 400);
    }
  };

  const resetAssessment = () => {
    setPhase("intro");
  };

  return (
    <section id="assessment" className={styles.container}>
      <AnimatePresence mode="wait">
        {phase === "intro" && (
          <motion.div
            key="intro"
            className={styles.introScreen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <h2 className={`${styles.introHeadline} font-display`}>
                SEBERAPA SIAP<br/>USAHAMU<br/>UNTUK DIGITAL?
              </h2>
              <button onClick={startAssessment} className={styles.introBtn}>
                MULAI CEK <ArrowUpRight size={24} />
              </button>
            </div>
          </motion.div>
        )}

        {phase === "question" && (
          <motion.div
            key="question"
            className={styles.questionScreen}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.questionContent}>
              <div className={styles.progress}>
                0{currentIndex + 1} / 0{QUESTIONS.length}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={styles.questionTitle}>
                    {QUESTIONS[currentIndex].title}
                  </h3>
                  
                  <div className={styles.optionsList}>
                    {QUESTIONS[currentIndex].options.map((opt, i) => {
                      const isSelected = answers[QUESTIONS[currentIndex].id] === opt.value;
                      const letter = String.fromCharCode(65 + i);
                      return (
                        <button
                          key={i}
                          className={`${styles.optionBtn} ${isSelected ? styles.selected : ""}`}
                          onClick={() => handleAnswer(QUESTIONS[currentIndex].id, opt.value)}
                        >
                          <span className={styles.optionLetter}>{letter}</span>
                          <span className={styles.optionLabel}>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {phase === "result" && result && (
          <motion.div
            key="result"
            className={styles.resultScreen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.resultContent}>
              <div className={styles.scoreHeader}>
                <div className={styles.scoreValue}>
                  
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {result.total}
                  </motion.span>
                </div>
                <div className={styles.scoreDivider}>/100</div>
              </div>
              
              <div className={styles.statusLabel}>STATUS</div>
              <div className={styles.statusValue}>{result.status}</div>

              <div className={styles.dimensions}>
                {[
                  { label: "IDENTITAS BRAND", value: result.dimensions.brand },
                  { label: "KEHADIRAN DIGITAL", value: result.dimensions.digital },
                  { label: "MEDIA SOSIAL", value: result.dimensions.social },
                  { label: "INSIGHT BISNIS", value: result.dimensions.insight },
                ].map((dim, i) => (
                  <div key={dim.label} className={styles.dimensionItem}>
                    <div className={styles.dimensionHeader}>
                      <span>{dim.label}</span>
                      <span>{dim.value}%</span>
                    </div>
                    <div className={styles.dimensionTrack}>
                      <motion.div 
                        className={styles.dimensionFill}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: dim.value / 100 }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.recommendations}>
                <div className={styles.recommendationsTitle}>LANGKAH BERIKUTNYA.</div>
                <div className={styles.recommendationList}>
                  {result.recommendations.map((rec, i) => (
                    <div key={i} className={styles.recommendationItem}>
                      <span className={styles.recommendationNum}>0{i + 1}</span>
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={resetAssessment} className={styles.resetBtn}>
                ULANGI ASSESMEN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
