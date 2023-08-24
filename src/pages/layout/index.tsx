import { AppProvider } from '@/context/AppContext';
import Footer from '@/pages/layout/Footer';
import Navbar from '@/pages/layout/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <AppProvider>
      <div
        className="flex flex-col w-full h-full overflow-x-hidden overflow-y-auto bg-dashboard-background"
        id="main-body"
      >
        <Navbar />
        <div className="mt-[72px] flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default Layout;
