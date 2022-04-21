import '../styles/globals.css'
import {AnimatePresence} from "framer-motion";
import {ThemeProvider} from "next-themes"

function App({Component, pageProps}) {
    return (
        <ThemeProvider enableSystem={true} defaultTheme={"system"} attribute={"class"}>
            <AnimatePresence exitBeforeEnter={true}>
                <Component {...pageProps}/>
            </AnimatePresence>
        </ThemeProvider>
    )
}

export default App
