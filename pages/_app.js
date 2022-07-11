import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import {Container} from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Layout>
        <Container fluid>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </>
  );
}

export default MyApp
