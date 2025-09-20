import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@pages/Home";
import { About } from "@pages/About";
import { Contact } from "@pages/Contact";
import { Services } from "@pages/Services";
import Navbar from "@components/layout/navbar/Navbar";
import Footer from "@components/layout/footer/Footer";

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
  );
};
