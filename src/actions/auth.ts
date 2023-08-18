export const getAuthToken = (): string | null => {
  const token = sessionStorage.getItem('auth_token');
  return token;
};

export const setAuthToken = (token: string) => {
  sessionStorage.setItem('auth_token', token);
};

export const removeAuthToken = () => {
  sessionStorage.removeItem('auth_token');
};
