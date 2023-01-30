import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/modules/Home.module.css'
import { React } from 'react';
import Projects from '../components/projects';
import { Row, Col } from 'react-bootstrap';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Wang</title>
        <meta name="author" content="Michael Wang"/>
        <meta name="description" content="Michael Wang's personal website created using Next.js"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main className={styles.main} id="about">
        <Row className="justify-content-md-center">
          <Col xl={4} lg={10}>
            <Image
              src="/images/profile.jpg"
              alt="Self Portrait"
              layout="fixed"
              width={450}
              height={600}
            />
          </Col>
          <Col xl={{ span: 4, offset: 1 }} lg={10}>
            <div>
              <h1 className={styles.description}>
                Hi, I&apos;m Michael Wang, a software developer with a passion for creating intuitive user experiences with code. 
              </h1>
              <p className={styles.description}>I&apos;m a Software Developer with a passion for swimming, classical literature and coding. I&apos;m currently working full time as a fullstack developer while tinkering with some side projects in my free time.
              I have a passion for examining processes and proposing improvements with regards to efficiency, intuitiveness and documentation.</p>
            </div>
          </Col>
        </Row>

        <div id="projects" className={styles.title}>
          Projects
        </div>

        <Projects/>
        
      </main>
    </div>
  )
}
