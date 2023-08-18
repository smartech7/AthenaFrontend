import Footer from '@/pages/layout/Footer';
import Navbar from '@/pages/layout/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-dashboard-background flex flex-col w-screen h-screen overflow-y-auto overflow-x-hidden">
      <Navbar />
      <div className="mt-[72px] flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
