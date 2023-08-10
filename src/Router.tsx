import { Route, Routes } from 'react-router-dom';

import Auth from '@/pages/auth';
import AuthLayout from '@/pages/auth/layout';
import DashboardLayout from '@/pages/dashboard/layout';
import Home from '@/pages/Home';
import Logout from '@/components/widgets/auth/Logout';
import NotFound from '@/pages/NotFound';
import { useAuthContext } from '@/context/AuthContext';

export default function Router() {
  const { isAuth } = useAuthContext();

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Auth />} />
        </Route>
        <Route path="logout" element={<Logout />} />

        {isAuth === true && (
          <Route path="dashboard" element={<DashboardLayout />}></Route>
        )}
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}
