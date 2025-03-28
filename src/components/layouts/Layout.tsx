import { Outlet } from 'react-router-dom';
import Header from '../ui/Header';
import Footer from '../organisms/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-warm-white text-navy-dark">
      {/* Header Section */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow">
        <div className="space-between">
          <Outlet />
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout;
