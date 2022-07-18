import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/modules/navbar.module.css';

export default function Home() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand href="/">Michael</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://github.com/Michael-wang98" target="_blank" rel="noopener noreferrer">
                            <FaGithub/>
                        </Nav.Link>
                        <Nav.Link href="https://linkedin.com/in/michael-wang-66327b16a" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin/>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className={styles.navButton} href="#features">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )}