import styles from '../styles/modules/layout.module.css';
import Navbar from './navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Row, Col, NavLink } from 'react-bootstrap';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navbar/>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <Row className={styles.row}>
          Coded using the Next.js framework with React-Bootstrap Components
        </Row>
        <Row xs='auto' className={styles.row}>
          <Col>
            <NavLink href='https://github.com/Michael-wang98' target='_blank' rel='noopener noreferrer' >
                <FaGithub size={28} className={styles.link} />
            </NavLink>
          </Col>
          <Col className={styles.col}>
            <NavLink href='https://linkedin.com/in/michael-wang-66327b16a' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin size={28} className={styles.link} />
            </NavLink>
          </Col>
        </Row>
      </footer>
    </div>
  )
}
