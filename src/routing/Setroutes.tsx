import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../components/pages/Home"
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
              <Route path="/about" element={<div>About</div>} />
                <Route path="/services" element={<div>Services</div>} />
                <Route path="/contact" element={<div>Contact</div>} />
          </Routes>
      </section>
    {/* Footer */}
       <Footer /> 
    </BrowserRouter>
  )
}

