import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout';
import {Container} from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Container fluid className='no-padding'>
          <Component {...pageProps} />
        </Container>
      </Layout>
      <style jsx global>{`
        .projectCard {
          height: 100%;
          width: 90%;
          display: flex;
          justify-content: center;
          margin: 0rem 2rem;
        }

        .projectCard:hover,
        .projectCard:focus,
        .projectCard:active {
          border-color: blue;
        }

        .projectLink {
          text-decoration: none;
          font-weight: bold;
          font-size: 1.3rem;
        }

        .navButton {
          color:black;
          background-color: white;
          font-size: 2rem;
          margin: auto;
        }

        .navButton:hover {
          color: blue !important;
          transition: 0.5s;
        }

        .cardButtons {
          position: absolute;
          right: 0;
          bottom: 0;
          background-color: white;
          border-top: none;
        }
      `}</style>
      </>
  );
}

export default MyApp
