import { logout } from '@/api/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  logout().then(() => {
    navigate('/auth', { replace: true });
  });

  return <></>;
};

export default Logout;
