// @routing/modules/ServicesRoutes.tsx
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Services = lazy(() => import('@pages/Services'));
const CustomService = lazy(() => import('@features/Services/components/CustomService'));

export const ServicesRoutes: RouteObject[] = [
  { path: '/services', element: <Services /> },
  { path: '/services/:slug', element: <CustomService /> },
];
