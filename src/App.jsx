import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navpage } from './Component/NavPage/Navpage'
import { Hero} from './Component/Hero/Hero'
import Article from './Component/Article/Article'
import { Discord } from './Component/Discord/Discord'
import Footer from './Component/Footer/Footer'
import Security from './Component/Security/FeatureSection'
import CryptoFeature from './Component/Cards/CryptoFeature'
import Marquee from './Component/Marquee/Marquee'
import ColorNav from './Component/Color/ColorNav'


function App() {
 
  return (
    <>
     <Navpage/>
     <Hero/>
     <Marquee/>
     <CryptoFeature/>
      <Article/>
     <Security/>
     <Discord/>
     <Footer/>
      <ColorNav />
     
    </>
  )
}

export default App
