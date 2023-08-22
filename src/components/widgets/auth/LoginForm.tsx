import { ChangeEvent, useState } from 'react';
import { login, thirdPartyLogin } from '@/api/auth';
import { removeAuthToken, setAuthToken } from '@/actions/auth';

import { Button } from '@/components/ui/button';
import CONSTANTS from '@/config/constants';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export type LoginUser = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      thirdPartyLogin({
        type: 'google',
        accesstoken: res.access_token,
      })
        .then((res) => {
          if (res.message === CONSTANTS.SUCCESS) {
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
  const [input, setInput] = useState<LoginUser>({
    email: '',
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

  const onSubmit = () => {
    setLoading(true);
    login(input)
      .then((res) => {
        if (res.code === CONSTANTS.SUCCESS) {
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
  };

  return (
    <div className="flex flex-col mt-10 gap-7">
      <div className="flex gap-4">
        <Button
          variant="secondary"
          className="flex justify-start rounded-lg flex-1 gap-4 h-[60px] px-8 text-base text-black"
          onClick={() => {
            setLoading(true);
            googleLogin();
          }}
        >
          <img src="/images/google.svg" width={26} height={26} />
          Sign in with Google
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="w-[60px] h-[60px] rounded-lg"
        >
          <img src="/images/facebook.svg" width={35} height={35} />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="w-[60px] h-[60px] rounded-lg"
        >
          <img src="/images/apple.svg" width={35} height={35} />
        </Button>
      </div>

      <div>
        <div>
          <h6 className="text-base">Email address</h6>
          <Input
            name="email"
            placeholder="Username or email address"
            value={input.email}
            onChange={onInputChange}
            className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
          />
        </div>

        <div className="mt-10">
          <h6>Enter your Password</h6>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={input.password}
            onChange={onInputChange}
            className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
          />
        </div>

        <div className="mt-4 text-right">
          <a href="#">Forgot Password</a>
        </div>
      </div>

      <Button
        variant="default"
        className="h-[54px] w-full"
        onClick={onSubmit}
        disabled={isLoading}
      >
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        Sign in
      </Button>
    </div>
  );
}
