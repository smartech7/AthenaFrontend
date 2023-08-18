import Footer from '@/pages/layout/Footer';
import Navbar from '@/pages/layout/Navbar';
import { Outlet } from 'react-router-dom';

const ProfileLayout = () => {
  return (
    <div className="bg-dashboard-background">
      <Navbar />
      <div className="flex mt-[72px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ProfileLayout;
