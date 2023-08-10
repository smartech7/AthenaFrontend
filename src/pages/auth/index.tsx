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
    <div className="pt-[130px] pb-[40px] flex justify-center">
      <div className="w-[540px] flex flex-col gap-[42px]">
        <h2 className="font-bold text-black">Welcome to DONAMIX</h2>
        <Card className="px-[44px] py-[56px] rounded-[40px]">
          <CardContent className="flex flex-col gap-10 p-0">
            <CustomTabs defaultValue="signin">
              <CustomTabList>
                <CustomTab value="signin">Signin</CustomTab>
                <CustomTab value="signup">Signup</CustomTab>
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
