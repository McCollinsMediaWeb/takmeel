import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1>Welcome to Our Website</h1>
      <p>This is the home page.</p>
    </div>
  );
}
