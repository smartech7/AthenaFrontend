import { logout } from '@/api/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  logout().then(() => {
    navigate('/auth');
  });

  return <></>;
};

export default Logout;
