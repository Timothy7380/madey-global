import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { useReveal } from './components/ui'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './styles.css'

const titles = {
  '/': 'Madey Global Travel Solutions | Travel Agency in Lagos, Nigeria',
  '/about': 'About Us | Madey Global Travel Solutions',
  '/gallery': 'Gallery | Madey Global Travel Solutions',
  '/services': 'Travel Services | Madey Global Travel Solutions',
  '/contact': 'Contact Us | Madey Global Travel Solutions',
}

function Shell() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname] || titles['/']
  }, [pathname])
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}><Shell /></BrowserRouter>
  </React.StrictMode>,
)
