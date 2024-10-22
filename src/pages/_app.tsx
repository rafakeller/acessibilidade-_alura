import { useEffect } from 'react';
import '../styles/globals.css'
import { axeAcessibilityReporter } from '../utils/axeAcessibilityReporter'


function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    axeAcessibilityReporter();
  },[])
  
  return <Component {...pageProps} />
}

export default MyApp
