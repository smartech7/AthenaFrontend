import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsBriefcaseFill } from 'react-icons/bs';
import Button from '@/components/common/Button';
import { Chip } from '@material-tailwind/react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useAuthContext } from '@/context/AuthContext';
import { useState, useEffect, useRef } from 'react';

interface IFriendsProps { }

const Friends: React.FC<IFriendsProps> = ({ }) => {
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
      <h3 className="text-xl font-semibold text-black font-poppins">Friends</h3>

      <section className="bg-white rounded-[9px] mt-6 sm:p-4 px-12 py-4 flex flex-col gap-6">
        <div className="rounded-[9px] flex align-center items-center gap-7 px-[13px] justify-between">
          <div className='col-span-6 md:col-span-3'>
            <div className='flex items-center align-center gap-1'>
              <img src='/images/users/4.jpg' className='rounded-full w-[60px] h-[60px] bg-contain bg-no-repeat mr-2' />
              <div>
                <p className="text-black font-bold">Smith Mathew</p>
                <p>Single, Male</p>
              </div>
            </div>
          </div>
          <Button className="col-span-5 text-white bg-black  sm:col-span-3 whitespace-nowrap">
            UnFriend
          </Button>
        </div>
        <div className="rounded-[9px] flex align-center items-center gap-7 px-[13px] justify-between">
          <div className='col-span-6 md:col-span-3'>
            <div className='flex items-center align-center gap-1'>
              <img src='/images/users/5.jpg' className='rounded-full w-[60px] h-[60px] bg-contain bg-no-repeat mr-2' />
              <div>
                <p className="text-black font-bold">Smith Mathew</p>
                <p>Single, Male</p>
              </div>
            </div>
          </div>
          <Button className="col-span-5 text-white bg-black  sm:col-span-3 whitespace-nowrap">
            UnFriend
          </Button>
        </div>
        <div className="rounded-[9px] flex align-center items-center gap-7 px-[13px] justify-between">
          <div className='col-span-6 md:col-span-3'>
            <div className='flex items-center align-center gap-1'>
              <img src='/images/users/6.jpg' className='rounded-full w-[60px] h-[60px] bg-contain bg-no-repeat mr-2' />
              <div>
                <p className="text-black font-bold">Smith Mathew</p>
                <p>Single, Male</p>
              </div>
            </div>
          </div>
          <Button className="col-span-5 text-white bg-black  sm:col-span-3 whitespace-nowrap">
            UnFriend
          </Button>
        </div>
        <div className="rounded-[9px] flex align-center items-center gap-7 px-[13px] justify-between">
          <div className='col-span-6 md:col-span-3'>
            <div className='flex items-center align-center gap-1'>
              <img src='/images/users/7.jpg' className='rounded-full w-[60px] h-[60px] bg-contain bg-no-repeat mr-2' />
              <div>
                <p className="text-black font-bold">Smith Mathew</p>
                <p>Single, Male</p>
              </div>
            </div>
          </div>
          <Button className="col-span-5 text-white bg-black  sm:col-span-3 whitespace-nowrap">
            UnFriend
          </Button>
        </div>
      </section>


    </div>
  );
};

export default Friends;
