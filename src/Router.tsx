import { Route, Routes } from 'react-router-dom';

import Auth from '@/pages/auth';
import AuthLayout from '@/pages/auth/layout';
import BlogCreate from './pages/blog/create';
import BlogDetail from './pages/blog/[id]';
import BlogHome from './pages/blog';
import DashboardLayout from '@/pages/dashboard/layout';
import Layout from '@/pages/layout';
import Logout from '@/components/widgets/auth/Logout';
import NotFound from '@/pages/NotFound';
import Profile from '@/pages/profile';
import ProfileEdit from '@/pages/profile/edit';
import { useAuthContext } from '@/context/AuthContext';

// import Home from '@/pages/Home';

export default function Router() {
  const { isAuth } = useAuthContext();

  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Auth />} />
      </Route>
      <Route path="logout" element={<Logout />} />

      <Route path="/" element={<Layout />}>
        {isAuth === true && (
          <>
            <Route path="profile">
              <Route index element={<Profile />} />
              <Route path="edit" element={<ProfileEdit />} />
            </Route>
            <Route path="blog" element={<DashboardLayout />}>
              <Route index element={<BlogHome />} />
              <Route path="create" element={<BlogCreate />} />
              <Route path=":id" element={<BlogDetail />} />
            </Route>
          </>
        )}
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}
