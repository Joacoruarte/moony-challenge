import '../styles/globals.css'
import "redux-thunk"
import { wrapper } from '../redux/index'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
