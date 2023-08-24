import { ChangeEvent, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { register, thirdPartyLogin } from '@/api/auth';
import { removeAuthToken, setAuthToken } from '@/actions/auth';

import { Button } from '@/components/ui/button';
import CONSTANTS from '@/config/constants';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@material-tailwind/react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export type RegisterUser = {
  name: string;
  username: string;
  email: string;
  password: string;
  gender: 'Male' | 'Female';
  country: string;
  city: string;
};

export default function RegisterForm() {
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      thirdPartyLogin({
        type: 'google',
        accesstoken: res.access_token,
      })
        .then((res) => {
          if (res.code === CONSTANTS.SUCCESS) {
            console.log(res);
            onLoginSuccess(res.token!);
            navigate('/');
            toast.success(res.message);
          } else {
            onLoginFail();
            toast.error(res.message);
          }
        })
        .catch((err) => {
          console.log('Login Error:', err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    onError: () => {
      console.log('Failed');
    },
  });
  const [isLoading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<RegisterUser>({
    name: '',
    username: '',
    email: '',
    gender: 'Male',
    country: '',
    city: '',
    password: '',
  });

  const onLoginSuccess = (token: string) => {
    setAuthToken(token);
    axios.defaults.headers.common['Token'] = token;
  };
  const onLoginFail = () => {
    removeAuthToken();
    delete axios.defaults.headers.common['Token'];
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onRadioSelect = (name: string, value: string) => {
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    setLoading(true);
    register(input)
      .then((res) => {
        if (res.code === CONSTANTS.SUCCESS) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        console.log('Login Error:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col mt-6 gap-4 md:gap-6">
      <div className="flex gap-4">
        <Button
          variant="secondary"
          className="flex justify-center rounded-lg flex-1 lg:gap-4 h-[50px] sm:h-[60px] text-base text-black"
          onClick={() => {
            setLoading(true);
            googleLogin();
          }}
        >
          <img src="/images/google.svg" width={26} height={26} />
          <span className="hidden lg:block">Sign in with Google</span>
        </Button>
        <Button
          variant="secondary"
          className="h-[50px] sm:h-[60px] rounded-lg flex-1 lg:flex-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 44 44"
            fill="none"
          >
            <ellipse
              cx="22.246"
              cy="20.5099"
              rx="19.0312"
              ry="19.0312"
              fill="url(#paint0_linear_476_11147)"
            />
            <path
              d="M29.3334 28.0704L30.1788 22.6989H24.8903V19.2147C24.8903 17.7448 25.6277 16.3112 27.9964 16.3112H30.4023V11.7382C30.4023 11.7382 28.2198 11.3752 26.1342 11.3752C21.7769 11.3752 18.9315 13.9484 18.9315 18.605V22.6989H14.0898V28.0704H18.9315V41.0564C19.9035 41.2052 20.8979 41.2814 21.9109 41.2814C22.9239 41.2814 23.9183 41.2052 24.8903 41.0564V28.0704H29.3334Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_476_11147"
                x1="22.246"
                y1="1.47876"
                x2="22.246"
                y2="39.4282"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#18ACFE" />
                <stop offset="1" stopColor="#0163E0" />
              </linearGradient>
            </defs>
          </svg>
        </Button>
        <Button
          variant="secondary"
          className="h-[50px] sm:h-[60px] rounded-lg flex-1 lg:flex-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M41.7762 21.4999C41.7762 31.6429 33.2598 39.8749 22.7451 39.8749C12.2303 39.8749 3.71387 31.6429 3.71387 21.4999C3.71387 11.3478 12.2303 3.125 22.7451 3.125C33.2598 3.125 41.7762 11.3478 41.7762 21.4999Z"
              fill="#283544"
            />
            <path
              d="M31.6654 16.8503C31.5616 16.9088 29.0894 18.1432 29.0894 20.8803C29.2059 24.0017 32.2092 25.0964 32.2607 25.0964C32.2092 25.1549 31.8073 26.5876 30.6168 28.0894C29.672 29.3831 28.6233 30.6874 27.0309 30.6874C25.5162 30.6874 24.9724 29.8252 23.2246 29.8252C21.3477 29.8252 20.8166 30.6874 19.3796 30.6874C17.7871 30.6874 16.6608 29.3132 15.6645 28.0317C14.3701 26.3543 13.27 23.7221 13.2311 21.1948C13.205 19.8555 13.4903 18.539 14.2148 17.4208C15.2373 15.8597 17.0627 14.8 19.0562 14.765C20.5836 14.7187 21.9429 15.7085 22.8751 15.7085C23.7684 15.7085 25.4385 14.765 27.3281 14.765C28.1437 14.7658 30.3187 14.9869 31.6654 16.8503ZM22.7459 14.4976C22.474 13.2746 23.2246 12.0515 23.9237 11.2714C24.817 10.3279 26.2279 9.6875 27.4446 9.6875C27.5223 10.9105 27.03 12.11 26.1502 12.9836C25.3608 13.9271 24.0014 14.6374 22.7459 14.4976Z"
              fill="white"
            />
          </svg>
        </Button>
      </div>

      <div>
        <div>
          <h6 className="text-base">Enter Full Name</h6>
          <Input
            placeholder="Full Name"
            name="name"
            onChange={onInputChange}
            value={input.name}
            className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
          />
        </div>

        <div className="mt-5">
          <h6 className="text-base">Email address</h6>
          <Input
            placeholder="Email address"
            name="email"
            onChange={onInputChange}
            value={input.email}
            className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
          />
        </div>

        <div className="mt-5">
          <h6 className="text-base">Username</h6>
          <Input
            placeholder="Username"
            name="username"
            onChange={onInputChange}
            value={input.username}
            className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
          />
        </div>

        <div className="mt-5">
          <h6>Enter your Password</h6>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={onInputChange}
            value={input.password}
            className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
          />
        </div>

        <div className="mt-5">
          <h6>Gender</h6>
          <RadioGroup
            defaultValue="Male"
            value={input.gender}
            name="gender"
            onValueChange={(value: string) => {
              onRadioSelect('gender', value);
            }}
            className="flex gap-3 mt-4 text-[#808080]"
          >
            <div className="flex items-center flex-1 gap-3 h-[57px] bg-secondary border border-[#E7E7E7] px-3 rounded-lg">
              <RadioGroupItem value="Male" id="option-male" />
              <Label htmlFor="option-male" className="font-normal">
                Male
              </Label>
            </div>
            <div className="flex items-center flex-1 gap-3 h-[57px] bg-secondary border border-[#E7E7E7] px-3 rounded-lg">
              <RadioGroupItem value="Female" id="option-female" />
              <Label htmlFor="option-female" className="font-normal">
                Female
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex gap-3 mt-5">
          <div className="flex-1">
            <h6>Enter Country</h6>
            <Input
              name="country"
              placeholder="USA"
              onChange={onInputChange}
              value={input.country}
              className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
            />
          </div>
          <div className="flex-1">
            <h6>Enter City</h6>
            <Input
              name="city"
              placeholder="California"
              onChange={onInputChange}
              value={input.city}
              className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
            />
          </div>
        </div>
      </div>

      <Button
        variant="default"
        className="h-[54px] w-full"
        onClick={onSubmit}
        disabled={isLoading}
      >
        {isLoading && <Spinner className="w-4 h-4 mr-2 animate-spin" />}
        Sign Up
      </Button>
    </div>
  );
}
