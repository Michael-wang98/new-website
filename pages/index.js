import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/modules/Home.module.css'
import { useState, React } from 'react';
import { Button, Alert, Badge, Card, Carousel } from 'react-bootstrap';
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

        <Projects/>

        <div id="about" className={styles.title}>
          About
          <p className={styles.description}>Hi, I am Michael</p>
        </div>

        <div id="projects" className={styles.title}>
          Projects
          
          <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card} target="_blank" rel="noopener noreferrer" >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card} target="_blank" rel="noopener noreferrer" >
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/Michael-Wang98/redditBot"
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2 id="memes">Reddit Bot &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2 id="thingy">Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          </div>
        </div>
      </main>
    </div>
  )
}
