import { ChangeEvent, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Button } from '@/components/ui/button';
import CONSTANTS from '@/config/constants';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { register } from '@/api/auth';
import toast from 'react-hot-toast';

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
    <div className="flex flex-col gap-7 mt-10">
      <div className="flex gap-4">
        <Button
          variant="secondary"
          className="flex justify-start rounded-lg flex-1 gap-4 h-[60px] px-8 text-base text-black"
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
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Sign Up
      </Button>
    </div>
  );
}
