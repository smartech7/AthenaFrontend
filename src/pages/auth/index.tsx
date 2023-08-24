import { Card, CardContent } from '@/components/ui/card';
import {
  CustomTab,
  CustomTabContent,
  CustomTabList,
  CustomTabs,
} from '@/components/custom/Tabs';

import LoginForm from '@/components/widgets/auth/LoginForm';
import RegisterForm from '@/components/widgets/auth/RegisterForm';

export default function Auth() {
  return (
    <div className="flex justify-center h-full pt-5">
      <div className="w-[540px] flex flex-col gap-[30px] py-4 my-auto">
        <div className="flex justify-center lg:hidden">
          <img src="/images/black_logo.svg" width={400} height={67} />
        </div>
        <h2 className="font-bold text-black text-center md:text-[30px] text-[26px]">
          Welcome to DONAMIX
        </h2>
        <Card className="px-4 py-7 lg:px-[44px] lg:py-[56px] rounded-[30px]">
          <CardContent className="flex flex-col gap-10 p-0">
            <CustomTabs defaultValue="signin">
              <CustomTabList>
                <CustomTab value="signin" className="!text-[18px]">
                  Signin
                </CustomTab>
                <CustomTab value="signup" className="!text-[18px]">
                  Signup
                </CustomTab>
              </CustomTabList>

              <CustomTabContent value="signin">
                <LoginForm />
              </CustomTabContent>
              <CustomTabContent value="signup">
                <RegisterForm />
              </CustomTabContent>
            </CustomTabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
