import styles from '../styles/modules/layout.module.css';
import utilStyles from '../styles/modules/utils.module.css';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';

export default function Layout({ children }) {
  const route = useRouter(); // Get the router object containing the current pathname, query and asPath

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navbar/>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <Row className={styles.row}>
          Coded in the Next.js framework using React-Bootstrap Components
        </Row>
        <Row xs='auto' className={styles.row}>
          <Col>
            <Link href='https://github.com/Michael-wang98' target='_blank' rel='noopener noreferrer' >
                <FaGithub size={28} className={styles.link} />
            </Link>
          </Col>
          <Col className={styles.col}>
            <Link href='https://linkedin.com/in/michael-wang-66327b16a' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin size={28} className={styles.link} />
            </Link>
          </Col>
        </Row>
      </footer>
    </div>
  )
}