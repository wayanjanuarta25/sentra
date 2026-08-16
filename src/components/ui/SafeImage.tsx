"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import styles from "./SafeImage.module.css";

interface SafeImageProps extends ImageProps {
  fallbackLabel?: string;
}

export default function SafeImage({ fallbackLabel, className, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`${styles.placeholder} ${className || ''}`}>
        <div className={styles.placeholderLabel}>
          {fallbackLabel || props.src.toString().split('/').pop()?.toUpperCase()}
        </div>
      </div>
    );
  }

  return (
    <Image 
      {...props} 
      className={className} 
      onError={() => setError(true)} 
    />
  );
}
