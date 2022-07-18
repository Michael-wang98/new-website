import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, React, Icon } from 'react';
import { Button, Alert, Badge, Breadcrumb, Card, Dropdown } from 'react-bootstrap';

export default function Home() {
  const [show, setShow] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Wang</title>
        <meta name="author" content="Michael Wang"></meta>
        <meta name="description" content="Michael Wang's personal website created using Next.js"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main className={styles.main}>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/XKCD">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code> 
          <Badge bg="secondary">New</Badge>
        </p>

        {show &&
          <Alert variant='success' onClose={() => setShow(false)} dismissible>What's Good</Alert>
        }

        <Button className="btn btn-secondary" href="/XKCD">Hello</Button>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/images/sky.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="/XKCD">Card Link</Card.Link>
          </Card.Body>
        </Card>

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
      </main>
    </div>
  )
}
