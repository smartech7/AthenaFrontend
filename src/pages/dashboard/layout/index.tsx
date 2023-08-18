import LeftSidebar from '@/pages/dashboard/layout/LeftSidebar';
import { Outlet } from 'react-router-dom';
import RightSidebar from '@/pages/dashboard/layout/RightSidebar';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <LeftSidebar />
      <div className="bg-white flex-1">
        <div className="bg-dashboard-background w-full h-full rounded-t-[20px]">
          <Outlet />
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default DashboardLayout;
