import { Navigate, Route, Routes } from 'react-router-dom';

import About from '@/components/widgets/profile/About';
import Auth from '@/pages/auth';
import AuthLayout from '@/pages/auth/layout';
import BlogCreate from '@/pages/blog/create';
import BlogDetail from '@/pages/blog/[id]';
import BlogEdit from '@/pages/blog/[id]/edit';
import BlogHome from '@/pages/blog';

import MyBlogCreate from '@/pages/myblog/create';
import MyBlogDetail from '@/pages/myblog/[id]';
import MyBlogEdit from '@/pages/myblog/[id]/edit';
import MyBlogHome from '@/pages/myblog';

import DashboardLayout from '@/pages/dashboard/layout';
import Layout from '@/pages/layout';
import Logout from '@/components/widgets/auth/Logout';
import NotFound from '@/pages/NotFound';
import Profile from '@/pages/profile';
import ProfileEdit from '@/pages/profile/edit';
import VerifyEmail from './components/widgets/profile/VerifyEmail';
import { useAuthContext } from '@/context/AuthContext';
import { LinkedInCallback } from "react-linkedin-login-oauth2";

// import Home from '@/pages/Home';

export default function Router() {
  const { isAuth, user } = useAuthContext();

  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Auth />} />
      </Route>
      <Route path="linkedin/callback" element={<LinkedInCallback />} />
      <Route path="verifyemail" element={<VerifyEmail />} />
      <Route path="logout" element={<Logout />} />
      {isAuth === true && (
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/blog" />} />
          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="edit" element={<ProfileEdit />} />
          </Route>
          <Route path="blog" element={<DashboardLayout />}>
            <Route index element={<BlogHome />} />
            <Route path="create" element={<BlogCreate />} />
            <Route path=":id" element={<BlogDetail />} />
            <Route path=":id/edit" element={<BlogEdit />} />
          </Route>
          <Route path="myblog" element={<DashboardLayout />}>
            <Route index element={<MyBlogHome />} />
            <Route path="create" element={<MyBlogCreate />} />
            <Route path=":id" element={<MyBlogDetail />} />
            <Route path=":id/edit" element={<MyBlogEdit />} />
          </Route>
        </Route>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
