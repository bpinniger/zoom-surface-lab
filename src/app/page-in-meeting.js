"use client";
import NextImage from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <NextImage alt="Zoom Products" src="/zoom-products.png" width={600} height={300} />
      <p>Zoom Developer Ecosystem</p>
    </main>
  );
}
