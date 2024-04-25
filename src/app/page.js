import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image alt="Zoom Products" class={styles.Applogo} src="/zoom-products.png" width={600} height={300} />
      <p>Zoom Developer Ecosystem</p>
    </main>
  );
}
