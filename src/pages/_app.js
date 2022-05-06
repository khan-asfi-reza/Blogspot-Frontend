import '../styles/globals.css'
import {AnimatePresence} from "framer-motion";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App({Component, pageProps}) {
    return (
        <QueryClientProvider client={queryClient}>
            <AnimatePresence exitBeforeEnter={true}>
                <Component {...pageProps}/>
            </AnimatePresence>
        </QueryClientProvider>
        // <ThemeProvider enableSystem={true} defaultTheme={"system"} attribute={"class"}>
        //   <AnimatePresence exitBeforeEnter={true}>
        //       <Component {...pageProps}/>
        //   </AnimatePresence>
        // </ThemeProvider>
    )
}

export default App
