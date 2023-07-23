import { Navbar, Container, Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/modules/navbar.module.css';

export default function Home() {
    const route = useRouter(); // Get the router object containing the current pathname, query and asPath

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand className={styles.navBrand} href="/" data-testid='name'>Michael</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={styles.socialButton} href="https://github.com/Michael-wang98" target="_blank" rel="noopener noreferrer">
                            <FaGithub/>
                        </Nav.Link>
                        <Nav.Link className={styles.socialButton} href="https://linkedin.com/in/michael-wang-66327b16a" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin/>
                        </Nav.Link>
                    </Nav>
                    {route.pathname === '/' && // Only show links to sections of homepage on homepage
                        <Nav>
                            <Nav.Link className={styles.navButton} href="#about">About</Nav.Link>
                            <Nav.Link className={styles.navButton} href="#projects">Projects</Nav.Link>
                            <Nav.Link className={styles.navButton} href="/documents/Michael_Wang_Resume.pdf" 
                                target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )}
