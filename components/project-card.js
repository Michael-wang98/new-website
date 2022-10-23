import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Card, Row, Col } from 'react-bootstrap';

export default function ProjectCard ({image, title, subtitle, description, external, github}) {
    return (
        <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
                <Row>
                    <Col>
                        <Card.Img variant="top" src={image}/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-warning">{subtitle}</Card.Subtitle>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="cardButtons">
                            {external &&
                                <Card.Link target="_blank" rel="noopener noreferrer" className='navButton' href={external}><FaExternalLinkAlt/></Card.Link>
                            }
                            {github &&
                                <Card.Link target="_blank" rel="noopener noreferrer" className='navButton' href={github}><FaGithub/></Card.Link>
                            }
                        </Card.Footer>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}