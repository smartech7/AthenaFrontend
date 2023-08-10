import Footer from '@/pages/dashboard/layout/Footer';
import LeftSidebar from '@/pages/dashboard/layout/LeftSidebar';
import Navbar from '@/pages/dashboard/layout/Navbar';
import { Outlet } from 'react-router-dom';
import RightSidebar from '@/pages/dashboard/layout/RightSidebar';

const DashboardLayout = () => {
  return (
    <div className="bg-dashboard-background">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <div className="bg-white flex-1">
          <div className="bg-dashboard-background w-full h-full rounded-t-[30px]">
            <Outlet />
          </div>
        </div>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
