import { Card, CardContent } from '@/components/ui/card';
import CustomTabs, { TabOption } from '@/components/custom/Tabs';
import RegisterForm from '@/components/widgets/auth/RegisterForm';
import LoginForm from '@/components/widgets/auth/LoginForm';

const tabs: TabOption[] = [
  {
    name: 'Signin',
    value: 'signin',
    content: <LoginForm />,
  },
  {
    name: 'Signup',
    value: 'signup',
    content: <RegisterForm />,
  },
];

export default function Login() {
  return (
    <div className="pt-[130px] pb-[40px] flex justify-center">
      <div className="w-[540px] flex flex-col gap-[42px]">
        <h2 className="font-bold text-black">Welcome to DONAMIX</h2>
        <Card className="px-[44px] py-[56px] rounded-[40px]">
          <CardContent className="flex flex-col gap-10 p-0">
            <CustomTabs defaultValue="signin" options={tabs} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
