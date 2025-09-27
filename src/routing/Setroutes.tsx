import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@pages/Home";
import { About } from "@pages/About";
import { Services } from "@pages/Services";
import Footer from "@components/layout/footer/Footer";
import NoFound from "@pages/NoFound";
import Header from "@components/layout/header/Header";
import { Quote } from '@pages/Quote'
import Contact from "@pages/Contact";
import CustomService from "@features/Services/components/CustomService";

export const Setroutes = () => {
  return (
    <BrowserRouter>
      {/* Layout */}
      <Header />
      {/* Content routes   */}
      <section>
        <Routes>
          <Route path="*" element={<NoFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/quote" element={<Quote />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/office" element={<CustomService />} />
        </Routes>
      </section>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};
