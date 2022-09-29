import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/modules/Home.module.css'
import { useState, React } from 'react';
import Projects from '../components/projects';

export default function Home() {
  // const [show, setShow] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Wang</title>
        <meta name="author" content="Michael Wang"/>
        <meta name="description" content="Michael Wang's personal website created using Next.js"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello there
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>pages/index.js for i in range</code> 
        </p>

        <div id="about" className={styles.title}>
          About
          <p className={styles.description}>Hi, I am Michael</p>
        </div>

        <div id="projects" className={styles.title}>
          Projects
        </div>

        <Projects/>
        
      </main>
    </div>
  )
}
