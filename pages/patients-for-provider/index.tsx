import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Welcome to&nbsp;
            <code className={styles.code}>Patient List for Provider</code>
          </p>
        </div>
      </main>
    </>
  )
}
