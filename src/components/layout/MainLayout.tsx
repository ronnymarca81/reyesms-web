// @layout/MainLayout.tsx
import Header from '@components/layout/header/Header';
import Footer from '@components/layout/footer/Footer';

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);