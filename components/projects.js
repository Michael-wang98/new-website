import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Card, Container, Row, Col, Nav } from 'react-bootstrap';

export default function Projects() {
    return (
        <Row xs={1} md={2} className="g-4">
            <Col>
                <Card className="projectCard">
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="/images/website.jpg" />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title className="">Portfolio Website V2.0</Card.Title>
                                <Card.Subtitle className="mb-2 text-warning">NextJS, ReactJS, React-Bootstrap</Card.Subtitle>
                                <Card.Text>
                                    A personal portfolio website made using NextJS and React-Bootstrap, tested with Jest using a Github Actions Pipeline, hosted on Vercel
                                </Card.Text>
                                <Card.Link target="_blank" rel="noopener noreferrer" className='navButton' href="https://michael-wang98.github.io/"><FaExternalLinkAlt/></Card.Link>
                                <Card.Link target="_blank" rel="noopener noreferrer" className='navButton' href="https://github.com/Michael-wang98/Michael-Wang98.github.io"><FaGithub/></Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
            
            <Col>
                <Card className="projectCard">
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="/images/XKCD.jpg" />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>XKCD Mockup</Card.Title>
                                <Card.Subtitle className="mb-2 text-warning">JavaScript, HTML, CSS</Card.Subtitle>
                                <Card.Text>
                                    A mockup of the XKCD website made in Javascript using the XKCD API
                                </Card.Text>
                                <Card.Link target="_blank" rel="noopener noreferrer" className='navButton' href="/XKCD"><FaExternalLinkAlt/></Card.Link>
                                <Card.Link target="_blank" rel="noopener noreferrer" className='navButton' href="https://github.com/Michael-wang98/xkcd_web_widget"><FaGithub/></Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Col>
                <Card className="projectCard">
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="/images/SignSense.jpg" />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>SignSense</Card.Title>
                                <Card.Subtitle className="mb-2 text-warning">Python, Android Java, Tensorflow, Keras</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card content.
                                </Card.Text>
                                <Card.Link target="_blank" rel="noopener noreferrer" className='navButton' href="https://github.com/Jhong098/SignSense"><FaGithub/></Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Col>
                <Card className="projectCard">
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="/images/Twitter.jpg" />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>Twitter CLI Mockup</Card.Title>
                                <Card.Subtitle className="mb-2 text-warning">Python, MySQL, sqlalchemy</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card content.
                                </Card.Text>
                                <Card.Link target="_blank" rel="noopener noreferrer" className='navButton' href="https://github.com/Michael-wang98/CLI-Twitter-Mockup"><FaGithub/></Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
            
            <Col>
                <Card className="projectCard">
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="/images/Reddit.jpg"  />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>Card Fetching Reddit Bot</Card.Title>
                                <Card.Subtitle className="mb-2 text-warning">Python, Python Reddit API Wrapper (PRAW)</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card content.
                                </Card.Text>
                                <Card.Link target="_blank" rel="noopener noreferrer" className='navButton' href="https://github.com/Michael-wang98/redditBot"><FaGithub/></Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Col>
                <Card className="projectCard" href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="/images/website.jpg" />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>Portfolio Website V1.0</Card.Title>
                                <Card.Subtitle className="mb-2 text-warning">HTML, CSS, JavaScript</Card.Subtitle>
                                <Card.Text>
                                    A personal portfolio website made using NextJS and React-Bootstrap, tested with Jest using a Github Actions Pipeline, hosted on Vercel
                                </Card.Text>
                                <Card.Link target="_blank" rel="noopener noreferrer" className='navButton' href="https://michael-wang98.github.io/"><FaExternalLinkAlt/></Card.Link>
                                <Card.Link target="_blank" rel="noopener noreferrer" className='navButton' href="https://github.com/Michael-wang98/Michael-Wang98.github.io"><FaGithub/></Card.Link>
                            </Card.Body>
                            <Card.Footer>
                            <Nav variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link target="_blank" rel="noopener noreferrer" href="https://michael-wang98.github.io/">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link target="_blank" rel="noopener noreferrer" href="https://github.com/Michael-wang98/Michael-Wang98.github.io">Link</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Card.Footer>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}