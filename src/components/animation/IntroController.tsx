"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";

interface IntroControllerProps {
  children: React.ReactNode;
}

export default function IntroController({ children }: IntroControllerProps) {
  const [stage, setStage] = useState<"initial" | "loading" | "wiping" | "done">("initial");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReducedMotion);

    if (sessionStorage.getItem("sentra_intro_played")) {
      setStage("done");
    } else {
      setStage("loading");
    }
  }, []);

  const handleReveal = () => {
    setStage("wiping");
    sessionStorage.setItem("sentra_intro_played", "true");
  };

  const handleComplete = () => {
    setStage("done");
  };

  return (
    <>
      <AnimatePresence>
        {stage !== "done" && (
          <Loader 
            key="loader"
            onReveal={handleReveal} 
            onComplete={handleComplete} 
            reducedMotion={reducedMotion}
          />
        )}
      </AnimatePresence>
      
      {(stage === "initial" || stage === "wiping" || stage === "done") && (
        children
      )}
    </>
  );
}
