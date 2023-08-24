import { BlogProvider } from '@/context/BlogContext';
import LeftSidebar from '@/pages/dashboard/layout/LeftSidebar';
import { Outlet } from 'react-router-dom';
import RightSidebar from '@/pages/dashboard/layout/RightSidebar';

const DashboardLayout = () => {
  return (
    <BlogProvider>
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-0 mb-20">
        <LeftSidebar />
        <div className="flex-1 bg-white">
          <div className="w-full h-full bg-dashboard-background">
            <div className="w-full 2xl:container h-full">
              <Outlet />
            </div>
          </div>
        </div>
        <RightSidebar />
      </div>
    </BlogProvider>
  );
};

export default DashboardLayout;
