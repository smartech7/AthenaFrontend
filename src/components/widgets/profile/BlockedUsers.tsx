import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsBriefcaseFill } from 'react-icons/bs';
import Button from '@/components/common/Button';
import { Chip } from '@material-tailwind/react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useAuthContext } from '@/context/AuthContext';
import { useState, useEffect, useRef } from 'react';

interface IBlockedUsersProps { }

const BlockedUsers: React.FC<IBlockedUsersProps> = ({ }) => {
  const { user } = useAuthContext();
  // const dropdownRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // const handleClickOutside = (event: any) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsMenuOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('click', handleClickOutside);
  //   return () => {
  //     window.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  return (
    <div>
      <h3 className="text-xl font-semibold text-black font-poppins">Blocked Users</h3>

      {/* <section className="grid grid-cols-10 gap-2 mt-4">
        <Button className="col-span-5 text-black bg-white sm:col-span-3 whitespace-nowrap">
          Send Message
        </Button>
        <Button className="col-span-5 text-black bg-white sm:col-span-3 whitespace-nowrap">
          Add friend
        </Button>
        <Button className="col-span-8 text-black bg-white sm:col-span-3 whitespace-nowrap">
          Send Gift

        </Button>
        <Button className="col-span-2 p-0 text-lg text-black bg-white sm:col-span-1">
          <BiDotsVerticalRounded onClick={handleMenuClick} />
        </Button>
        {isMenuOpen && (
          <div className="absolute right-4 z-10 w-52 mt-10 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={handleMenuItemClick}>Block & Report</a>
            </div>
          </div>
        )}
      </section> */}

      <section className="bg-white rounded-[9px] mt-6 sm:p-4 px-12 py-4 flex flex-col gap-6">
        <div className="rounded-[9px] flex align-center items-center gap-7 px-[13px] justify-between">
          <div className='col-span-6 md:col-span-3'>
            <div className='flex items-center align-center gap-1'>
              <img src='/images/users/1.jpg' className='rounded-full w-[60px] h-[60px] bg-contain bg-no-repeat mr-2' />
              <div>
                <p className="text-black font-bold">Smith Mathew</p>
                <p>Single, Male</p>
              </div>
            </div>
          </div>
          <Button className="col-span-5 text-white bg-black  sm:col-span-3 whitespace-nowrap">
            Unblock
          </Button>
        </div>
        <div className="rounded-[9px] flex align-center items-center gap-7 px-[13px] justify-between">
          <div className='col-span-6 md:col-span-3'>
            <div className='flex items-center align-center gap-1'>
              <img src='/images/users/2.jpg' className='rounded-full w-[60px] h-[60px] bg-contain bg-no-repeat mr-2' />
              <div>
                <p className="text-black font-bold">Smith Mathew</p>
                <p>Single, Male</p>
              </div>
            </div>
          </div>
          <Button className="col-span-5 text-white bg-black  sm:col-span-3 whitespace-nowrap">
            Unblock
          </Button>
        </div>
        <div className="rounded-[9px] flex align-center items-center gap-7 px-[13px] justify-between">
          <div className='col-span-6 md:col-span-3'>
            <div className='flex items-center align-center gap-1'>
              <img src='/images/users/3.jpg' className='rounded-full w-[60px] h-[60px] bg-contain bg-no-repeat mr-2' />
              <div>
                <p className="text-black font-bold">Smith Mathew</p>
                <p>Single, Male</p>
              </div>
            </div>
          </div>
          <Button className="col-span-5 text-white bg-black  sm:col-span-3 whitespace-nowrap">
            Unblock
          </Button>
        </div>

      </section>


    </div>
  );
};

export default BlockedUsers;
