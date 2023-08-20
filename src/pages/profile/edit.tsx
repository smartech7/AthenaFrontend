import { FaCircleUser, FaGraduationCap } from 'react-icons/fa6';
import { MdBlock, MdFavorite } from 'react-icons/md';
import {
  Spinner,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import { User, userValidator } from '@/lib/validation/user';
import { useEffect, useState } from 'react';

import AccountSettings from '@/components/widgets/profile/AccountSettings';
import Albums from '@/components/widgets/profile/Albums';
import Avatar from '@/components/common/Avatar';
import BasicInformation from '@/components/widgets/profile/BasicInformation';
import { BiSolidPhotoAlbum } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import CONSTANTS from '@/config/constants';
import ChangePassword from '@/components/widgets/profile/ChangePassword';
import EducationAndWork from '@/components/widgets/profile/EducationAndWork';
import FileUpload from '@/components/common/FileUpload';
import { HiLockClosed } from 'react-icons/hi';
import Interests from '@/components/widgets/profile/Interests';
import { IoMdInformationCircle } from 'react-icons/io';
import UpdateProfilePicture from '@/components/widgets/profile/UpdateProfilePicture';
import { cn } from '@/lib/utils';
import { toast } from 'react-hot-toast';
import { updateUser } from '@/api/users';
import { useAuthContext } from '@/context/AuthContext';

const options = [
  {
    value: '0',
    icon: <IoMdInformationCircle />,
    title: 'Basic Information',
  },
  {
    value: '1',
    icon: <FaGraduationCap />,
    title: 'Education and Work',
  },
  {
    value: '2',
    icon: <MdFavorite />,
    title: 'My Interests',
  },
  {
    value: '3',
    icon: <BiSolidPhotoAlbum />,
    title: 'My Album',
  },
  {
    value: '4',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.123 2.91675C16.4987 2.91675 15.0194 3.79277 12.0609 5.54482L11.0602 6.13742C8.10169 7.88947 6.62241 8.7655 5.81024 10.2084C4.99805 11.6513 4.99805 13.4034 4.99805 16.9076V18.0926C4.99805 21.5968 4.99805 23.3489 5.81024 24.7917C6.62241 26.2346 8.10169 27.1106 11.0602 28.8627L12.0609 29.4554C15.0194 31.2074 16.4987 32.0834 18.123 32.0834C19.7474 32.0834 21.2266 31.2074 24.1853 29.4554L25.1859 28.8627C28.1444 27.1106 29.6237 26.2346 30.4359 24.7917C31.248 23.3489 31.248 21.5968 31.248 18.0926V16.9076C31.248 13.4034 31.248 11.6513 30.4359 10.2084C29.6237 8.7655 28.1444 7.88947 25.1859 6.13742L24.1853 5.54482C21.2266 3.79277 19.7474 2.91675 18.123 2.91675ZM12.6543 17.5001C12.6543 14.4798 15.1028 12.0313 18.123 12.0313C21.1434 12.0313 23.5918 14.4798 23.5918 17.5001C23.5918 20.5204 21.1434 22.9688 18.123 22.9688C15.1028 22.9688 12.6543 20.5204 12.6543 17.5001Z"
          fill="#666666"
        />
      </svg>
    ),
    title: 'Account Settings',
  },
  {
    value: '5',
    icon: <HiLockClosed />,
    title: 'Change Password',
  },
  {
    value: '6',
    icon: <FaCircleUser />,
    title: 'Update Profile Picture',
  },
  {
    value: '7',
    icon: <MdBlock />,
    title: 'Blocked User',
  },
];

const pages = [
  {
    value: 'timeline',
    title: 'Timeline',
  },
  {
    value: 'about',
    title: 'About',
  },
  {
    value: 'albums',
    title: 'Albums',
  },
  {
    value: 'friends',
    title: 'Friends',
  },
];

interface IProfileEditProps {}

const ProfileEdit: React.FC<IProfileEditProps> = () => {
  const [tab, setTab] = useState<string>('0');
  const { user, reload } = useAuthContext();
  const [coverPhoto, setCoverPhoto] = useState<string | null | undefined>(null);
  const [isSavingCoverPhoto, setIsSavingCoverPhoto] = useState<boolean>(false);

  useEffect(() => {
    if (user && user.banner) {
      setCoverPhoto(user.banner);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner color="blue" />
      </div>
    );
  }

  return (
    <div>
      <div
        className={cn(
          'relative z-20 w-full h-[300px]',
          coverPhoto ? `bg-cover bg-center` : ''
        )}
        style={{
          backgroundImage: coverPhoto ? `url(${coverPhoto})` : '',
          backgroundColor: coverPhoto ? '' : 'black',
        }}
      >
        <FileUpload
          onSuccess={({ url }: { url: string }) => {
            setCoverPhoto(url);
            console.log(user, url);

            if (!user) return;
            setIsSavingCoverPhoto(true);
            console.log(url);

            const newUser: User = userValidator.parse({
              ...user,
              banner: url,
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
                setIsSavingCoverPhoto(false);
              });
          }}
        >
          <Button
            variant="secondary"
            className="absolute text-base font-medium text-black right-4 bottom-4"
            disabled={isSavingCoverPhoto}
          >
            Edit Cover Photo
          </Button>
        </FileUpload>
      </div>
      <div className="relative z-30 w-full">
        <Tabs value={tab} orientation="vertical" className="overflow-visible">
          <div className="w-[50px] lg:w-[380px] bg-white">
            <div className="flex justify-center h-[60px] lg:h-[85px]">
              <Avatar
                className="w-[50px] h-[50px] lg:w-[170px] lg:h-[170px] lg:-translate-y-1/2 text-[40px] font-bold border-white border-4 p-0"
                user={user}
              />
            </div>

            <div className="lg:flex flex-col items-center gap-1 hidden">
              <h4 className="text-black font-inter text-[21px] font-bold mt-4">
                {user?.name}
              </h4>
              <h5 className="text-[#818181] font-medium text-[18px] font-inter">
                {user?.username}
              </h5>
            </div>

            <div className="flex flex-col gap-1 lg:mt-10">
              <TabsHeader
                className="w-[50px] lg:w-[380px] bg-transparent"
                indicatorProps={{
                  className: 'hidden',
                }}
              >
                {options.map((option, i) => (
                  <Tab
                    key={`profile-option-${i}`}
                    value={option.value}
                    className="justify-start lg:px-8"
                    onClick={() => {
                      setTab(option.value);
                    }}
                  >
                    <div
                      className={cn(
                        'flex items-center h-[62px] gap-2 font-poppins text-[20px] font-medium',
                        tab === option.value ? 'opacity-100' : 'opacity-60'
                      )}
                    >
                      <span className="text-[25px]">{option.icon}</span>
                      <span className="lg:block hidden">{option.title}</span>
                    </div>
                  </Tab>
                ))}
              </TabsHeader>
            </div>
          </div>

          <div className="flex-1 py-5">
            <div className="w-full lg:px-[100px] px-[40px]">
              <TabsHeader className="flex-row bg-transparent border-b border-[#C9C9C9] rounded-none">
                {pages.map((val, i) => (
                  <Tab
                    key={`profile-page-${i}`}
                    value={val.value}
                    onClick={() => {
                      setTab(val.value);
                      // setPage(val.value);
                    }}
                    className={cn(
                      'font-semibold',
                      tab === val.value ? 'text-black' : 'text-[#818181]'
                    )}
                  >
                    {val.title}
                  </Tab>
                ))}
              </TabsHeader>

              <TabsBody
                className="overflow-visible profile-edit-panel"
              >
                <TabPanel value="0">
                  <BasicInformation />
                </TabPanel>
                <TabPanel value="1">
                  <EducationAndWork />
                </TabPanel>
                <TabPanel value="2" className="overflow-visible">
                  <Interests />
                </TabPanel>
                <TabPanel value="3" className="overflow-visible">
                  <Albums />
                </TabPanel>
                <TabPanel value="4" className="overflow-visible">
                  <AccountSettings />
                </TabPanel>
                <TabPanel value="5" className="overflow-visible">
                  <ChangePassword />
                </TabPanel>
                <TabPanel value="6" className="overflow-visible">
                  <UpdateProfilePicture />
                </TabPanel>

                <TabPanel value="timeline">234567</TabPanel>
              </TabsBody>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileEdit;
