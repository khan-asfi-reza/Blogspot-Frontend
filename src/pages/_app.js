import '../styles/globals.css'
import {AnimatePresence} from "framer-motion";

function App({Component, pageProps}) {
  return <AnimatePresence exitBeforeEnter={true}>
    <Component {...pageProps}/>
  </AnimatePresence>
}

export default App
