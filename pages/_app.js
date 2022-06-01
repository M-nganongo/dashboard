import '../styles/globals.css'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<div>
  <Head>

  </Head>
  
  
  
  <Component {...pageProps} />
  </div>
  )
}

export default MyApp
