import { Row, Col } from 'react-bootstrap';
import ProjectCard from './project-card';

export default function Projects() {
    return (
        <Row xs={1} md={2} className="mt-2 g-4">
            <ProjectCard
                image='/images/website.jpg'
                title='Portfolio Website V2.0'
                subtitle='NextJS, ReactJS, React-Bootstrap'
                description='A personal portfolio website made using NextJS and React-Bootstrap, tested with Jest using a Github Actions Pipeline, hosted on Vercel'
                external='https://michael-wang98.github.io/'
                github='https://github.com/Michael-wang98/Michael-Wang98.github.io'/>
            
            <ProjectCard
                image='/images/XKCD.jpg'
                title='XKCD Mockup'
                subtitle='JavaScript, HTML, CSS'
                description='A mockup of the XKCD website made in Javascript using the XKCD API'
                external='/XKCD'
                github='https://github.com/Michael-wang98/xkcd_web_widget'/>

            <ProjectCard
                image='/images/SignSense.jpg'
                title='SignSense'
                subtitle='Python, Android Java, Tensorflow, Keras'
                description='Some quick example text to build on the card title and make up the bulk of the card content.'
                github='https://github.com/Jhong098/SignSense'/>

            <ProjectCard
                image='/images/Twitter.jpg'
                title='Twitter CLI Mockup'
                subtitle='Python, MySQL, sqlalchemy'
                description='Some quick example text to build on the card title and make up the bulk of the card content.'
                github='https://github.com/Michael-wang98/CLI-Twitter-Mockup'/>

            <ProjectCard
                image='/images/Reddit.jpg'
                title='Card Fetching Reddit Bot'
                subtitle='Python, Python Reddit API Wrapper (PRAW)'
                description='Some quick example text to build on the card title and make up the bulk of the card content.'
                github='https://github.com/Michael-wang98/redditBot'/>

            <ProjectCard
                image='/images/website.jpg'
                title='Portfolio Website V1.0'
                subtitle='HTML, CSS, JavaScript'
                description='A personal portfolio website made using NextJS and React-Bootstrap, tested with Jest using a Github Actions Pipeline, hosted on Vercel'
                external='https://github.com/Michael-wang98/Michael-Wang98.github.io'
                github='https://michael-wang98.github.io/'/>
        </Row>
    )
}