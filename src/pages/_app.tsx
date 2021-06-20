import { global as GlobalStyles } from '../assets/styles/global';
import { reset as ResetStyles } from '../assets/styles/reset';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
