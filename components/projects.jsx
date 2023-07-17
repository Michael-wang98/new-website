import { Row } from 'react-bootstrap';
import ProjectCard from './project-card';

export default function Projects() {
    return (
        <Row className="mt-2 g-4">
            <ProjectCard
                image='/images/website.jpg'
                title='Portfolio Website V2.0'
                subtitle='NextJS, ReactJS, React-Bootstrap'
                description='A personal portfolio website made using NextJS and React-Bootstrap, tested with Jest using a Github Actions Pipeline, hosted on Vercel. Features links to recent personal projects and demos where applicable (E.G. mockup of the XKCD website).'
                external='https://www.michael-wang.ca/'
                github='https://github.com/Michael-wang98/new-website'/>
            
            <ProjectCard
                image='/images/XKCD.jpg'
                title='XKCD Mockup'
                subtitle='JavaScript, HTML, CSS'
                description='A mockup of the XKCD website made using Javascript and HTML5 using the XKCD API.'
                external='/XKCD'
                github='https://github.com/Michael-wang98/xkcd_web_widget'/>

            <ProjectCard
                image='/images/SignSense.jpg'
                title='SignSense'
                subtitle='Python, Android Java, Tensorflow, Keras'
                description='An Android application that translates live video of a person signing ASL into English text without the need of additional peripherals. Uses Mediapipe to extract key information about a person&apos;s hands from a live video feed. Then uses a Keras machine learning model trained to interpret ASL signs in real time to convert the ASL into words which are displayed as text in under a second'
                github='https://github.com/Jhong098/SignSense'/>

            <ProjectCard
                image='/images/Twitter.jpg'
                title='Twitter CLI Mockup'
                subtitle='Python, MySQL, sqlalchemy'
                description='A Command Line application written in Python and making use of sqlalchemy to connect to a MySQL database to simulates Twitter.'
                github='https://github.com/Michael-wang98/CLI-Twitter-Mockup'/>

            <ProjectCard
                image='/images/Reddit.jpg'
                title='Card Fetching Reddit Bot'
                subtitle='Python, Python Reddit API Wrapper (PRAW)'
                description='A Reddit Bot programmed in Python3 using the Python Reddit API Wrapper (PRAW) that responds to Reddit comments or submissions containing the names of Yugioh cards enclosed in brackets with links to card wikis and price data. Card name matching uses fuzzy search to handle typos, partial names and missing special characters. Does not require an external database to store card name data.'
                github='https://github.com/Michael-wang98/redditBot'/>

            <ProjectCard
                image='/images/website.jpg'
                title='Portfolio Website V1.0'
                subtitle='HTML, CSS, JavaScript'
                description='Personal portfolio website hosted using Github Pages and implemented with HTML5, JavaScript and CSS.'
                external='https://michael-wang98.github.io/'
                github='https://github.com/Michael-wang98/Michael-Wang98.github.io'/>
        </Row>
    )
}
