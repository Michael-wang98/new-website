import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Card, Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/modules/projects.module.css';

export default function Projects() {
    return (
        <Row xs={1} md={2} className="g-4">
            <Col>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="/images/sky.jpg" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card content.
                    </Card.Text>
                    <Card.Link className={styles.navButton} href="/XKCD"><FaExternalLinkAlt/></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            
            <Col>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="/images/sky.jpg" />
                    <Card.Body>
                    <Card.Title>XKCD Mockup</Card.Title>
                    <Card.Text>
                        A mockup of the XKCD website made in Javascript using the XKCD API
                    </Card.Text>
                    <Card.Link href="/XKCD"><FaExternalLinkAlt/></Card.Link>
                    <Card.Link href="https://github.com/Michael-wang98/xkcd_web_widget"><FaGithub/></Card.Link>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="/images/sky.jpg" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card content.
                    </Card.Text>
                    <Card.Link className={styles.navButton} href="/XKCD"><FaExternalLinkAlt/></Card.Link>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="/images/sky.jpg" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card content.
                    </Card.Text>
                    <Card.Link className={styles.navButton} href="/XKCD"><FaExternalLinkAlt/></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            
            <Col>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="/images/sky.jpg" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card content.
                    </Card.Text>
                    <Card.Link className={styles.navButton} href="/XKCD"><FaExternalLinkAlt/></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
    
}