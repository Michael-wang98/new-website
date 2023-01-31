import { FaGithub } from 'react-icons/fa';
import { Card, Row, Col } from 'react-bootstrap';

export default function ProjectCard ({image, title, subtitle, description, external, github}) {
    return (
        <Col xl={6} lg={8} md={10} sm={12}>
            <Card className="projectCard">
                <Row>
                    <Col>
                        <Card.Img variant="top" src={image}/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-primary">{subtitle}</Card.Subtitle>
                            <Card.Text className="pb-5">{description}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="cardButtons d-flex">
                            {external &&
                                <Card.Link target="_blank" rel="noopener noreferrer" className='projectLink' href={external}>CHECK IT OUT</Card.Link>
                            }
                            {github &&
                                <Card.Link target="_blank" rel="noopener noreferrer" className='navButton d-flex' href={github}><FaGithub/></Card.Link>
                            }
                        </Card.Footer>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}
