import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import { Label } from '@radix-ui/react-label';

export default function RegisterForm() {
  return (
    <div className="flex flex-col gap-10 mt-10">
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
            className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
          />
        </div>

        <div className="mt-5">
          <h6 className="text-base">Email address</h6>
          <Input
            placeholder="Username or email address"
            className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
          />
        </div>

        <div className="mt-5">
          <h6>Enter your Password</h6>
          <Input
            placeholder="Password"
            className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
          />
        </div>

        <div className="mt-5">
          <h6>Gender</h6>
          <RadioGroup defaultValue="0" className="flex gap-3 mt-4">
            <div className="flex items-center flex-1 gap-3 h-[57px] bg-secondary border border-[#E7E7E7] px-3 rounded-lg">
              <RadioGroupItem value="0" id="option-male" />
              <Label htmlFor="option-male">Male</Label>
            </div>
            <div className="flex items-center flex-1 gap-3 h-[57px] bg-secondary border border-[#E7E7E7] px-3 rounded-lg">
              <RadioGroupItem value="1" id="option-female" />
              <Label htmlFor="option-female">Female</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex gap-3 mt-5">
          <div className="flex-1">
            <h6>Country</h6>
            <Input
              placeholder="Enter Country"
              className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
            />
          </div>
          <div className="flex-1">
            <h6>City</h6>
            <Input
              placeholder="Enter City"
              className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
            />
          </div>
        </div>
      </div>

      <Button variant="default" className="h-[54px] w-full">
        Sign Up
      </Button>
    </div>
  );
}
