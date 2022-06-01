import '../public/assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faBars, faUser, faGaugeHigh, faTableColumns, faAngleDown, faBookOpen, faChartArea, faTable, faArrowLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare, faCoffee, faBars, faUser, faGaugeHigh, faTableColumns, faAngleDown, faBookOpen, faChartArea, faTable, faArrowLeft, faMagnifyingGlass)

import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp