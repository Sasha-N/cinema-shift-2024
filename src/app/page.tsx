'use client'
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()

  return (
    <main className={styles.main}>
      <div className={styles.video} onClick={() => router.push('/affiche')}>
        <div className={styles.overlay}>Посети волшебные миры</div>
        <video autoPlay loop src={require('./videos/violet.mp4')} />
      </div>
    </main>
  );
}
