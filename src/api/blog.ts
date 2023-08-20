import axios, { AxiosError } from 'axios';

import { Blog } from '@/lib/validation/blog';
import CONSTANTS from '@/config/constants';

const apiUrl = import.meta.env.VITE_BACKEND_API as string;

export const createBlog = async (data: Blog) => {
  return new Promise<{ code: string; message: string }>((resolve, reject) => {
    axios
      .post(`${apiUrl}/blog/addblog`, data)
      .then((res) => {
        if (res.data.message === CONSTANTS.SUCCESS) {
          resolve({
            code: CONSTANTS.SUCCESS,
            message: 'Saved Successfully!',
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
      })
      .finally(() => {
        reject({
          code: CONSTANTS.FAILED,
          message: 'Failed with unknown error.',
        });
      });
  });
};

export const getBlogs = async () => {
  return new Promise<{ code: string; data?: Blog[]; message: string }>(
    (resolve, reject) => {
      axios
        .get(`${apiUrl}/blog/getblogs`)
        .then((res) => {
          if (res.data.message === CONSTANTS.SUCCESS) {
            resolve({
              code: CONSTANTS.SUCCESS,
              data: res.data.data,
              message: 'Saved Successfully!',
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
          console.log('Error while creating a blog:', err);
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

export const getBlogCount = async () => {
  return new Promise<{ code: string; data?: number; message: string }>(
    (resolve, reject) => {
      axios
        .get(`${apiUrl}/blog/getblogcount`)
        .then((res) => {
          if (res.data.message === CONSTANTS.SUCCESS) {
            resolve({
              code: CONSTANTS.SUCCESS,
              data: Number(res.data.status),
              message: 'Saved Successfully!',
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
          console.log('Error while getting blog count:', err);
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
}

export const getBlogsByRange = async (data: {total_count: number; from: number; count: number}) => {
  return new Promise<{ code: string; data?: Blog[]; totalCount?: number; message: string }>(
    (resolve, reject) => {
      axios
        .post(`${apiUrl}/blog/filterblogs`, data)
        .then((res) => {
          if (res.data.message === CONSTANTS.SUCCESS) {
            resolve({
              code: CONSTANTS.SUCCESS,
              data: res.data.data,
              totalCount: res.data.totalcount,
              message: 'Saved Successfully!',
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
          console.log('Error while filtering blogs:', err);
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
}

export const getBlogById = async (id: string) => {
  return new Promise<{ code: string; data?: Blog; message: string }>(
    (resolve, reject) => {
      axios
        .get(`${apiUrl}/blog/blogbyid/${id}`)
        .then((res) => {
          if (res.data.message === CONSTANTS.SUCCESS) {
            resolve({
              code: CONSTANTS.SUCCESS,
              data: res.data.data,
              message: 'Saved Successfully!',
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
          console.log('Error while getting blog by id:', err);
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