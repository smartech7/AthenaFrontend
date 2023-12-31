import { generateOtp, verifyOtp } from '@/api/auth';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Button from '@/components/common/Button';
import CONSTANTS from '@/config/constants';
import { Input } from '@/components/ui/input';
import { loginSuccess } from '@/actions/auth';
import { toast } from 'react-hot-toast';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState(['', '', '', '']);
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState<string>('');
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchParams) {
      const t = searchParams.get('email') as string;
      if (t !== email) setEmail(t);
    }
  }, [searchParams]);

  useEffect(() => {
    if (email) {
      generateOtp(email)
        .then((res) => {
          if (res.code === CONSTANTS.SUCCESS) {
            toast.success(res.message);
          } else {
            toast.error(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [email]);

  const onSubmit = () => {
    verifyOtp({ email: email, token: input.join('') })
      .then((res) => {
        if (res.code === CONSTANTS.SUCCESS) {
          loginSuccess(res.token!);
          navigate('/');
          toast.success(res.message);
        } else {
          console.log("123", res)
          toast.error(res.message)
        }
      })
      .catch((err) => {
        console.log('Verify email Error:', err);
      });
  };

  const onDigitChange = (index: number, value: string) => {
    setInput((prev) => prev.map((val, i) => (i === index ? value : val)));
  };

  return (
    <div className="w-screen h-screen bg-dashboard-background">
      <div className="flex flex-col items-center justify-center h-full px-5">
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
            ref={ref1}
            name="digit1"
            value={input[0]}
            maxLength={1}
            onChange={(e) => {
              onDigitChange(0, e.currentTarget.value);
              if (e.currentTarget.value !== '' && ref2.current) {
                ref2.current.focus();
              }
            }}
            onKeyDown={(e) => {
              if (CONSTANTS.NODIGITS.includes(e.key)) e.preventDefault();
            }}
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-2xl text-center"
          />
          <p className="text-2xl font-normal text-[#BCBCBC]">-</p>
          <Input
            ref={ref2}
            name="digit2"
            value={input[1]}
            maxLength={1}
            onChange={(e) => {
              onDigitChange(1, e.currentTarget.value);
              if (e.currentTarget.value !== '' && ref3.current) {
                ref3.current.focus();
              }
            }}
            onKeyDown={(e) => {
              if (CONSTANTS.NODIGITS.includes(e.key)) e.preventDefault();
            }}
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-2xl text-center"
          />
          <p className="text-2xl font-normal text-[#BCBCBC]">-</p>
          <Input
            ref={ref3}
            name="digit3"
            value={input[2]}
            maxLength={1}
            onChange={(e) => {
              onDigitChange(2, e.currentTarget.value);
              if (e.currentTarget.value !== '' && ref4.current) {
                ref4.current.focus();
              }
            }}
            onKeyDown={(e) => {
              if (CONSTANTS.NODIGITS.includes(e.key)) e.preventDefault();
            }}
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-2xl text-center"
          />
          <p className="text-2xl font-normal text-[#BCBCBC]">-</p>
          <Input
            ref={ref4}
            name="digit4"
            value={input[3]}
            maxLength={1}
            onChange={(e) => {
              onDigitChange(3, e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (CONSTANTS.NODIGITS.includes(e.key)) e.preventDefault();
            }}
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-2xl text-center"
          />
        </div>

        <p className="text-xl text-black font-bold mt-[50px]">3:44</p>
        <a href="#" className="text-[#007BFF] font-semibold mt-5">
          Resend Code
        </a>

        <Button className="px-10 mt-5 text-xl rounded-full" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default VerifyEmail;
