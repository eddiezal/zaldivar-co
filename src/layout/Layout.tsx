// src/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-warm-white font-sans text-muted-navy">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;