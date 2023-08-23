import { BlogProvider } from '@/context/BlogContext';
import LeftSidebar from '@/pages/dashboard/layout/LeftSidebar';
import { Outlet } from 'react-router-dom';
import RightSidebar from '@/pages/dashboard/layout/RightSidebar';

const DashboardLayout = () => {
  return (
    <BlogProvider>
      <div className="w-screen flex flex-col gap-5 lg:flex-row lg:gap-0 mb-20">
        <LeftSidebar />
        <div className="flex-1 bg-white">
          <div className="w-full xl:container h-full bg-dashboard-background">
            <Outlet />
          </div>
        </div>
        <RightSidebar />
      </div>
    </BlogProvider>
  );
};

export default DashboardLayout;
