// @routing/Setroutes.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { ServicesRoutes } from '@routing/modules/ServicesRoutes';
import { MainLayout } from '@components/layout/MainLayout';
import { Home, About, Contact, Quote, NoFound } from './LazyRoutes';

export const Setroutes = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          {ServicesRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<NoFound />} />
        </Routes>
      </MainLayout>
    </Suspense>
  </BrowserRouter>
);
