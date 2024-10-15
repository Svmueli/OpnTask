// src/pages/_app.js
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import '../styles/globals.css';
// import '../styles/app.css';

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
