import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsBriefcaseFill } from 'react-icons/bs';
import Button from '@/components/common/Button';
import { Chip } from '@material-tailwind/react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useAuthContext } from '@/context/AuthContext';
import { useState, useEffect, useRef } from 'react';

interface IFriendsProps { }

const Timeline: React.FC<IFriendsProps> = ({ }) => {

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
      <h3 className="text-xl font-semibold text-black font-poppins">Timeline</h3>
    </div>
  );
};

export default Timeline;
