import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me | Default Box</title>
        <meta name="description" content="📦" />
        <link rel="icon" href="/package.ico" />
      </Head>
      <p>
              This is coming soon 👀
            </p>
    </div>
  )
}
