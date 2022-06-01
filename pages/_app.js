import '../public/assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faBars, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare, faCoffee, faBars, faUser)

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp