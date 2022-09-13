import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout';
import {Container} from 'react-bootstrap';
import SSRProvider from 'react-bootstrap/SSRProvider'; // Needed for React-Bootstrap

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
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
        }

        .projectCard:hover,
        .projectCard:focus,
        .projectCard:active {
          text-decoration: underline;
          border-color: red;
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
    </SSRProvider>
  );
}

export default MyApp
