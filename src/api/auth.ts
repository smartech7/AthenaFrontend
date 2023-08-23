import axios, { AxiosError } from 'axios';

import CONSTANTS from '@/config/constants';
import { LoginUser } from '@/components/widgets/auth/LoginForm';
import { RegisterUser } from '@/components/widgets/auth/RegisterForm';
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
  return new Promise<{ code: string; token?: string; message: string }>(
    (resolve, reject) => {
      axios
        .post(`${apiUrl}/auth/login`, data)
        .then((res) => {
          if (res.data.message === CONSTANTS.SUCCESS) {
            resolve({
              code: CONSTANTS.SUCCESS,
              token: res.data.status,
              message: 'Successfully Logged In!',
            });
          } else {
            console.log(res);
            reject({
              code: CONSTANTS.FAILED,
              message: res.data.status,
            });
          }
        })
        .catch((err: AxiosError) => {
          console.log('Error while logging in:', err);
          reject({
            code: CONSTANTS.FAILED,
            message: err.response
              ? err.response.status
              : 'Failed with unknown error.',
          });
        })
        .finally(() => {
          reject({
            code: CONSTANTS.FAILED,
            message: 'Failed with unknown error.',
          });
        });
    }
  );
};

export const thirdPartyLogin = async (data: {
  type: string;
  accesstoken: string;
}) => {
  return new Promise<{ code: string; token?: string; message: string }>(
    (resolve, reject) => {
      axios
        .post(`${apiUrl}/auth/thirdlogin`, data)
        .then((res) => {
          if (res.data.message === CONSTANTS.SUCCESS) {
            resolve({
              code: CONSTANTS.SUCCESS,
              token: res.data.status,
              message: 'Successfully Logged In!',
            });
          } else {
            console.log(res);
            reject({
              code: CONSTANTS.FAILED,
              message: res.data.status,
            });
          }
        })
        .catch((err: AxiosError) => {
          console.log('Error while logging in:', err);
          reject({
            code: CONSTANTS.FAILED,
            message: err.response
              ? err.response.status
              : 'Failed with unknown error.',
          });
        })
        .finally(() => {
          reject({
            code: CONSTANTS.FAILED,
            message: 'Failed with unknown error.',
          });
        });
    }
  );
};

export const logout = async () => {
  removeAuthToken();
  delete axios.defaults.headers.common['Token'];
  console.log('Log out');
};

export const getCurrentUser = async () => {
  try {
    const res = await axios.get(`${apiUrl}/auth/getinfo`);

    if (res.data.message === CONSTANTS.SUCCESS) {
      return {
        code: CONSTANTS.SUCCESS,
        data: res.data.data,
      };
    } else {
      return {
        code: CONSTANTS.FAILED,
        message: res.data.status,
      };
    }
  } catch (err) {
    console.log('Error while getting user info:', err);
    return {
      code: CONSTANTS.FAILED,
      message: err,
    };
  }
};
