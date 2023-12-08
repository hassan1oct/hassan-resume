import Image from 'next/image'
import styles from './page.module.css'
import ResumeComponent from '@/Components/ResumeComponent'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <ResumeComponent />
      </div>
    </main>
  )
}
