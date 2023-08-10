export type DateType = {
  yy: number;
  mm: number;
  dd: number;
};

export type UserType = {
  name: string;
  username: string;
  email: string;
  gender: 'Male' | 'Female';
  country: string;
  city: string;
  birthday: DateType;
  status: string;
  description: string;
};
