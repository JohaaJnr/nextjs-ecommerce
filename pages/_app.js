
import { ContextProvider } from "../helpers/AppState"

const MyApp = ({ Component, pageProps }) => {
  
  return (
    <ContextProvider>
      
      <Component {...pageProps} />
     
      </ContextProvider>
   
    
  )
  
}

export default MyApp
