import { ChangeEvent, useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { User, userValidator } from '@/lib/validation/user';

import { Button } from '@/components/ui/button';
import CONSTANTS from '@/config/constants';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@material-tailwind/react';
import { Textarea } from '@/components/ui/textarea';
import toast from 'react-hot-toast';
import { updateUser } from '@/api/users';
import { useAuthContext } from '@/context/AuthContext';

const BasicInformation = () => {
  const { user, reload } = useAuthContext();
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    day: 1,
    month: 1,
    year: 1970,
    status: 'Single',
    city: '',
    country: '',
    description: '',
  });

  useEffect(() => {
    if (user) {
      setInput({
        firstName: user.name.split(' ')[0],
        lastName: user.name.split(' ')[1],
        day: user.birthday.dd,
        month: user.birthday.mm,
        year: user.birthday.yy,
        status: user.status,
        city: user.city,
        country: user.country,
        description: user.description,
      });
    }
  }, [user]);

  if (!user) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner color="blue" />
      </div>
    );
  }

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  const onSubmit = () => {
    setIsSaving(true);
    const newUser: User = userValidator.parse({
      ...user,
      name: input.firstName + ' ' + input.lastName,
      birthday: {
        yy: input.year,
        mm: input.month,
        dd: input.day,
      },
      status: input.status,
      city: input.city,
      country: input.country,
      description: input.description,
    });

    updateUser(user._id, newUser)
      .then((res) => {
        if (res.code === CONSTANTS.SUCCESS) {
          reload();
          console.log(res);
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  return (
    <div>
      <h3 className="text-black font-poppins text-[24px] font-semibold">
        Edit Basic Information
      </h3>
      <p className="text-[#7D7D7D] font-medium text-base font-poppins mt-[14px]">
        Control your profile information, both what it says and what other
        people see. User profiles are shown across all Donamix website. Complete
        your profile 100% to reach more people. Note: accounts not verified will
        automatically be deleted by our system.
      </p>

      <div className="flex flex-col gap-5 mt-5">
        <div className="grid grid-cols-12 gap-3 w-full">
          <Input
            name="firstName"
            value={input.firstName}
            onChange={onInputChange}
            placeholder="First Name"
            className="flex-1 h-[60px] rounded-[9px] col-span-12 md:col-span-6"
          />
          <Input
            name="lastName"
            value={input.lastName}
            onChange={onInputChange}
            placeholder="Last Name"
            className="flex-1 h-[60px] rounded-[9px] col-span-12 md:col-span-6"
          />
        </div>
        <div>
          <h6 className="text-black font-poppins text-[18px] font-semibold">
            Date of Birth
          </h6>
          <div className="grid grid-cols-12 gap-3 mt-3">
            <Input
              name="day"
              value={input.day}
              onChange={onInputChange}
              placeholder="Day"
              className="flex-1 h-[60px] rounded-[9px] col-span-12 md:col-span-4"
            />
            <Input
              name="month"
              value={input.month}
              onChange={onInputChange}
              placeholder="Month"
              className="flex-1 h-[60px] rounded-[9px] col-span-12 md:col-span-4"
            />
            <Input
              name="year"
              value={input.year}
              onChange={onInputChange}
              placeholder="Year"
              className="flex-1 h-[60px] rounded-[9px] col-span-12 md:col-span-4"
            />
          </div>
        </div>

        <div>
          <h6 className="text-black font-poppins text-[18px] font-semibold">
            Status
          </h6>
          <RadioGroup
            defaultValue="Male"
            value={input.status}
            name="gender"
            onValueChange={(value: string) => {
              onRadioSelect('status', value);
            }}
            className="grid grid-cols-12 gap-3 mt-3 text-[#808080]"
          >
            <div className="flex items-center flex-1 gap-3 h-[57px] bg-secondary border border-[#E7E7E7] px-3 rounded-lg col-span-12 md:col-span-6">
              <RadioGroupItem value="Single" id="option-single" />
              <Label htmlFor="option-single" className="font-normal">
                Single
              </Label>
            </div>
            <div className="flex items-center flex-1 gap-3 h-[57px] bg-secondary border border-[#E7E7E7] px-3 rounded-lg col-span-12 md:col-span-6">
              <RadioGroupItem value="Married" id="option-married" />
              <Label htmlFor="option-married" className="font-normal">
                Married
              </Label>
            </div>
            <div className="flex-1"></div>
          </RadioGroup>
        </div>

        <div>
          <h6 className="text-black font-poppins text-[18px] font-semibold">
            Location
          </h6>
          <div className="grid grid-cols-12 gap-3 mt-3">
            <Input
              name="city"
              value={input.city}
              onChange={onInputChange}
              placeholder="City"
              className="flex-1 h-[60px] rounded-[9px] col-span-12 md:col-span-6"
            />
            <Input
              name="country"
              value={input.country}
              onChange={onInputChange}
              placeholder="Country"
              className="flex-1 h-[60px] rounded-[9px] col-span-12 md:col-span-6"
            />
            <div className="flex-1"></div>
          </div>
        </div>

        <div>
          <h6 className="text-black font-poppins text-[18px] font-semibold">
            About
          </h6>
          <div className="flex justify-between gap-3 mt-3">
            <Textarea
              placeholder="Enter Description"
              name="description"
              value={input.description}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div>
          <Button
            variant="default"
            className="w-full h-[50px]"
            onClick={onSubmit}
            disabled={isSaving}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
