import axios, { AxiosError } from 'axios';

import CONSTANTS from '@/config/constants';
import { User } from '@/lib/validation/user';

const apiUrl = import.meta.env.VITE_BACKEND_API as string;
const adminApi = import.meta.env.VITE_ADMIN_API as string;

export const updateUser = async (id: string, user: User) => {
  try {
    const res = await axios.put(`${apiUrl}/users/edituser/${id}`, user);

    if (res.data.message === CONSTANTS.SUCCESS) {
      return {
        code: CONSTANTS.SUCCESS,
        message: 'Updated Successfully!',
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

export const changePassword = async (
  oldPassword: string,
  newPassword: string
) => {
  return new Promise<{ code: string; message: string }>((resolve, reject) => {
    axios
      .post(`${apiUrl}/profile/changepassword`, {
        old_password: oldPassword,
        new_password: newPassword,
      })
      .then((res) => {
        if (res.data.message === CONSTANTS.SUCCESS) {
          resolve({
            code: CONSTANTS.SUCCESS,
            message: 'Changed successfully!',
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
        console.log('Error while changing the password:', err);
        reject({
          code: CONSTANTS.FAILED,
          message: err.response
            ? err.response.status
            : 'Failed with unknown error.',
        });
      });
  });
};

export const getInterests = async () => {
  return new Promise<{ code: string; message: string }>((resolve, reject) => {
    axios
      .post(`${adminApi}/interests`)
      .then((res) => {
        if (res.data.message === CONSTANTS.SUCCESS) {
          resolve({
            code: CONSTANTS.SUCCESS,
            message: 'Changed successfully!',
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
        console.log('Error while changing the password:', err);
        reject({
          code: CONSTANTS.FAILED,
          message: err.response
            ? err.response.status
            : 'Failed with unknown error.',
        });
      });
  });
};
