import { Outlet } from 'react-router-dom';
import LeftPanel from '@/pages/auth/layout/LeftPanel';

export default function AuthLayout() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className="flex-1 hidden lg:block">
        <LeftPanel />
      </div>
      <div className="flex-1 px-4 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}
