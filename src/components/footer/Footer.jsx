"use client";
import React from "react";
import styles from './footer.module.css'
import Image from "next/image";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©{new Date().getFullYear()} Redleaf. All rights reserved</div>
      <div className={styles.social}>
        <Image width={15} height={15} className={styles.icons} src="/1.png" alt="facebook" />
        <Image width={15} height={15} className={styles.icons} src="/2.png" alt="instagram" />
        <Image width={15} height={15} className={styles.icons} src="/3.png" alt="tweeter" />
        <Image width={15} height={15} className={styles.icons} src="/4.png" alt="youtube" />
      </div>
    </div>
  );
};
