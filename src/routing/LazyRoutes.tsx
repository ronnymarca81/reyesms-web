// @routing/LazyRoutes.tsx
import { lazy } from 'react';

export const Home = lazy(() => import('@pages/Home'));
export const About = lazy(() => import('@pages/About'));
export const Contact = lazy(() => import('@pages/Contact'));
export const Quote = lazy(() => import('@pages/Quote'));
export const NoFound = lazy(() => import('@pages/NoFound'));
