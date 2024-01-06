import '@/styles/globals.css'
import { MaterialTailwindControllerProvider } from '../context/index'
import { GoogleOAuthProvider } from '@react-oauth/google';

/*
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
*/
export default function App({ Component, pageProps }) {
  return (
    <>

      <GoogleOAuthProvider
        clientId="853175965207-e3m1nhk65gqf0ffnt5a88t0ntk3np19u.apps.googleusercontent.com">

        <MaterialTailwindControllerProvider>
          <Component {...pageProps} />
        </MaterialTailwindControllerProvider>

      </GoogleOAuthProvider>

    </>

  );
}

//export default App;
