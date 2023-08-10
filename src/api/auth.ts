import CONSTANTS from '@/config/constants';
import { LoginUser } from '@/components/widgets/auth/LoginForm';
import { RegisterUser } from '@/components/widgets/auth/RegisterForm';
import axios from 'axios';
import { removeAuthToken } from '@/actions/auth';

const apiUrl = import.meta.env.VITE_BACKEND_API as string;
console.log(apiUrl);

export const validateUsername = async (username: string) => {
  try {
    const res = await axios.post(`${apiUrl}/auth/uservalidate`, {
      type: 'username',
      username,
    });

    const { message } = res.data;
    if (message === CONSTANTS.SUCCESS) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log('Error in validating username:', err);
    return false;
  }
};

export const validateEmail = async (email: string) => {
  try {
    const res = await axios.post(`${apiUrl}/auth/uservalidate`, {
      type: 'email',
      email,
    });

    const { message } = res.data;
    if (message === CONSTANTS.SUCCESS) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log('Error in validating email:', err);
    return false;
  }
};

export const register = async (data: RegisterUser) => {
  try {
    const isValidUsername = await validateUsername(data.username);
    const isValidEmail = await validateEmail(data.email);

    if (isValidUsername === true && isValidEmail === true) {
      const res = await axios.post(`${apiUrl}/auth/register`, {
        ...data,
        birthday: {
          yy: new Date().getFullYear(),
          mm: new Date().getMonth(),
          dd: new Date().getDate(),
        },
        status: 'Single',
        description: 'I love Donamix.',
      });

      const { message, status } = res.data;

      if (message === CONSTANTS.SUCCESS) {
        return {
          code: CONSTANTS.SUCCESS,
          message: 'Successfully Registered!',
        };
      } else {
        return {
          code: CONSTANTS.FAILED,
          message: status,
        };
      }
    } else {
      return {
        code: CONSTANTS.FAILED,
        message: 'Invalid username or email',
      };
    }
  } catch (err) {
    console.log('Error while registering:', err);
    return {
      code: CONSTANTS.FAILED,
      message: 'Register Failed!',
    };
  }
};

export const login = async (data: LoginUser) => {
  try {
    const res = await axios.post(`${apiUrl}/auth/login`, data);

    const { message, status } = res.data;

    if (message === CONSTANTS.SUCCESS) {
      return {
        code: CONSTANTS.SUCCESS,
        token: status,
        message: 'Successfully Logged In!',
      };
    } else {
      return {
        code: CONSTANTS.FAILED,
        message: status,
      };
    }
  } catch (err) {
    console.log('Error while logging in:', err);
    return {
      code: CONSTANTS.FAILED,
      message: 'Login Failed',
    };
  }
};

export const logout = async () => {
  removeAuthToken();
  delete axios.defaults.headers.common['Token'];
  console.log('Log out');
};
