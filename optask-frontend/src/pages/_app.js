// src/pages/_app.js
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
