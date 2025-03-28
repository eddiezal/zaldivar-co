import { Outlet } from 'react-router-dom';
import Header from '../ui/Header';
import Footer from '../organisms/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-C5A98D text-26313E">
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
