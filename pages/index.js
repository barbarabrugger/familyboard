import styles from '../styles/Home.module.css'
import Clock from './clock'
import Weather from './weather'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="flex items-center min-h-screen justify-center w-full">
        <div>
          <Clock />
        </div>
        <div>
          <Weather />
        </div>
      </div>
    </div>
  )
}
