import Button from '@/components/common/Button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface IVerifyEmailProps {}

const VerifyEmail: React.FunctionComponent<IVerifyEmailProps> = (props) => {
  const [input, setInput] = useState(['', '', '', '']);

  const onDigitChange = (index: number, value: string) => {
    setInput((prev) => prev.map((val, i) => (i === index ? value : val)));
  };

  return (
    <div className="w-screen h-screen bg-dashboard-background">
      <div className="flex flex-col items-center justify-center px-5 h-full">
        <img
          src="/images/donamix_logo.png"
          className="object-contain invert"
          width={250}
          height={100}
        />
        <h2 className="text-2xl font-bold font-poppins">Enter Your Code</h2>
        <p className="text-[#404040] font-poppins text-base text-center mt-2">
          Please enter the 4-digit code you received via email to confirm your
          account.
        </p>

        <div className="flex items-center justify-center gap-3 mt-[50px]">
          <Input
            type="number"
            name="digit1"
            value={input[0]}
            onChange={(e) => {
              onDigitChange(0, e.currentTarget.value);
            }}
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-2xl text-center"
          />
          <p className="text-2xl font-normal text-[#BCBCBC]">-</p>
          <Input
            type="number"
            name="digit2"
            value={input[1]}
            onChange={(e) => {
              onDigitChange(1, e.currentTarget.value);
            }}
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-2xl text-center"
          />
          <p className="text-2xl font-normal text-[#BCBCBC]">-</p>
          <Input
            type="number"
            name="digit3"
            value={input[2]}
            onChange={(e) => {
              onDigitChange(2, e.currentTarget.value);
            }}
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-2xl text-center"
          />
          <p className="text-2xl font-normal text-[#BCBCBC]">-</p>
          <Input
            type="number"
            name="digit4"
            value={input[3]}
            onChange={(e) => {
              onDigitChange(3, e.currentTarget.value);
            }}
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-2xl text-center"
          />
        </div>

        <p className="text-xl text-black font-bold mt-[50px]">3:44</p>
        <a href="#" className="text-[#007BFF] font-semibold mt-5">
          Resend Code
        </a>

        <Button className="rounded-full mt-5 text-xl px-10">Submit</Button>
      </div>
    </div>
  );
};

export default VerifyEmail;
