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
    </SSRProvider>
  );
}

export default MyApp
