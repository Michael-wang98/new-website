import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/modules/Home.module.css'
import { useState, React } from 'react';
import Projects from '../components/projects';
import { Row, Col } from 'react-bootstrap';

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

        <Row className="justify-content-md-center">
          <Col lg={4}>
            <Image
              src="/images/profile.jpg"
              alt="Self Portrait"
              layout="fixed"
              width={450}
              height={600}
            />
          </Col>
          <Col lg={4}>
            <h1 className={styles.title}>
              Hi, I&apos;m Michael Wang, a software developer with a passion for creating intuitive user experiences with code. 
            </h1>

            <div id="about" className={styles.title}>
              About
              <p className={styles.description}>I&apos;m a Software Developer with a passion for swimming, classical literature and coding. I&apos;m currently working full time as a fullstack developer while tinkering with some side projects in my free time.
              I have a passion for examining processes and proposing improvements with regards to efficiency, intuitiveness and documentation.</p>
            </div>
          </Col>
        </Row>
        
        {/* <p className={styles.description}>
          <code className={styles.code}>pages/index.js for i in range</code> 
        </p> */}   

        <div id="projects" className={styles.title}>
          Projects
        </div>

        <Projects/>
        
      </main>
    </div>
  )
}
