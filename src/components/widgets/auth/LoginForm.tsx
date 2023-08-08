import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginForm() {
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
          <h6 className="text-base">Email address</h6>
          <Input
            placeholder="Username or email address"
            className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
          />
        </div>

        <div className="mt-10">
          <h6>Enter your Password</h6>
          <Input
            placeholder="Password"
            className="mt-4 h-[57px] bg-secondary placeholder:text-[14px]"
          />
        </div>

        <div className="mt-4 text-right">
          <a href="#">Forgot Password</a>
        </div>
      </div>

      <Button variant="default" className="h-[54px] w-full">
        Sign in
      </Button>
    </div>
  );
}
