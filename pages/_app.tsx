import "../styles/globals.css";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }) {
  ReactGA.initialize("G-MXRTMP2X69");
  return <Component {...pageProps} />;
}

export default MyApp;
