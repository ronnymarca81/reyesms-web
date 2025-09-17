import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../components/pages/Home"
import { About } from "../components/pages/About"
import { Contact } from "../components/pages/Contact"
import { Services } from "../components/pages/Services"
import Navbar from "../components/layouts/Navbar"
import Footer from "../components/layouts/Footer"



export const Setroutes = () => {
  return (
    <BrowserRouter>
      {/* Layout */}
      <Navbar />
      {/* Content routes   */}
      <section>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
          </Routes>
      </section>
    {/* Footer */}
       <Footer /> 
    </BrowserRouter>
  )
}

