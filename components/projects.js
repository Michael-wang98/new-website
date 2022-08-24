import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Card, Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/modules/projects.module.css';

export default function Projects() {
    return (
        <Row xs={1} md={2} className="g-4">
            <Col>
                <Card style={{ height: '100%', width: '90%' }}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="/images/website.jpg" />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>Portfolio Website</Card.Title>
                                <Card.Text>
                                    A personal portfolio website made using NextJS and React-Bootstrap, tested with Jest using a Github Actions Pipeline, hosted on Vercel
                                </Card.Text>
                                <Card.Link className={styles.navButton} href="https://michael-wang98.github.io/"><FaExternalLinkAlt/></Card.Link>
                                <Card.Link className={styles.navButton} href="https://github.com/Michael-wang98/Michael-Wang98.github.io"><FaGithub/></Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
            
            <Col>
                <Card style={{ height: '100%', width: '90%' }}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="/images/XKCD.jpg" />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>XKCD Mockup</Card.Title>
                                <Card.Text>
                                    A mockup of the XKCD website made in Javascript using the XKCD API
                                </Card.Text>
                                <Card.Link className={styles.navButton} href="/XKCD"><FaExternalLinkAlt/></Card.Link>
                                <Card.Link className={styles.navButton} href="https://github.com/Michael-wang98/xkcd_web_widget"><FaGithub/></Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Col>
                <Card style={{ height: '100%', width: '90%' }}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="/images/SignSense.jpg" />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>SignSense</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card content.
                                </Card.Text>
                                <Card.Link className={styles.navButton} href="https://github.com/Jhong098/SignSense"><FaGithub/></Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Col>
                <Card style={{ height: '100%', width: '90%' }}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="/images/Twitter.jpg" />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>Twitter CLI Mockup</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card content.
                                </Card.Text>
                                <Card.Link className={styles.navButton} href="https://github.com/Michael-wang98/CLI-Twitter-Mockup"><FaGithub/></Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
            
            <Col>
                <Card style={{ height: '100%', width: '90%' }}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="/images/Reddit.jpg"  />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>Card Fetching Reddit Bot</Card.Title>
                                <Card.Subtitle>Python, Python Reddit API Wrapper (PRAW)</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card content.
                                </Card.Text>
                                <Card.Link className={styles.navButton} href="https://github.com/Michael-wang98/redditBot"><FaGithub/></Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}