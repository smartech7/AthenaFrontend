import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsBriefcaseFill } from 'react-icons/bs';
import Button from '@/components/common/Button';
import { Chip } from '@material-tailwind/react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useAuthContext } from '@/context/AuthContext';

interface IAboutProps {}

const About: React.FC<IAboutProps> = ({}) => {
  const { user } = useAuthContext();

  return (
    <div>
      <h3 className="text-xl font-semibold text-black font-poppins">About</h3>
      <p className="text-[#7D7D7D] font-medium font-poppins mt-2">
        We are Perfect Resume, a reputable and reasonably priced writing service
        established in Dubai and five other major cities. We are here to provide
        resume writing services in Qatar and globally for the people who wanted
        to create resumes. Please allow us to review your resume so that we can
        advise whether a cover lette.
      </p>

      <section className="grid grid-cols-10 gap-2 mt-4">
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
          <BiDotsVerticalRounded />
        </Button>
      </section>

      <section className="bg-white rounded-[9px] mt-6 sm:p-4 px-2 py-4">
        <div className="rounded-[9px] flex gap-5 px-[13px] justify-between">
          <div className="flex gap-2">
            <span className="text-2xl">
              <BsBriefcaseFill />
            </span>
            <h6 className="text-base font-medium text-black font-poppins">
              Work
            </h6>
          </div>
          <p className="text-right">
            {user && user.experience
              ? user.experience?.position
              : 'No experience'}
          </p>
        </div>
        <div className="rounded-[9px] flex gap-5 px-[13px] justify-between mt-5">
          <div className="flex gap-2">
            <span className="text-2xl">
              <FaGraduationCap />
            </span>
            <h6 className="text-base font-medium text-black font-poppins">
              Education
            </h6>
          </div>
          <p className="text-right">
            {user && user.education
              ? user.education?.university
              : 'No education'}
          </p>
        </div>
        <div className="rounded-[9px] flex gap-5 px-[13px] justify-between mt-5">
          <div className="flex gap-2">
            <span className="text-2xl">
              <FaLocationDot />
            </span>
            <h6 className="text-base font-medium text-black font-poppins">
              Country
            </h6>
          </div>
          {user && <p className="text-right">{user.country}</p>}
        </div>
      </section>

      <h5 className="mt-6 text-base font-bold">Interests</h5>
      <section className="w-full p-4 mt-2 bg-white rounded-lg">
        <div className="flex flex-wrap items-center gap-2">
          {user?.interests?.map((val) => (
            <Chip key={val} value={val} className="px-4 py-2 rounded-full" />
          ))}
        </div>
      </section>

      <section className="w-full p-4 mt-6 bg-white rounded-lg">
        <h5 className="text-base font-bold">
          Received Gifts <b className='font-poppins'>23</b>
        </h5>
        <div className='grid grid-cols-12 gap-4 mt-4'>
          <div className='col-span-6 md:col-span-3'>
            <div className='flex flex-col items-center gap-1'>
              <img src='/images/gifts/1.png' className='w-[60px] h-[60px] bg-contain bg-no-repeat' />
              <h6 className='text-base font-semibold'>
                Child
              </h6>
              <div className='flex gap-1'>
                <img src='/images/money.svg' width={16} height={16} />
                <p className='text-xs text-[#545454'>12</p>
              </div>
            </div>
          </div>
          
          <div className='col-span-6 md:col-span-3'>
            <div className='flex flex-col items-center gap-1'>
              <img src='/images/gifts/2.png' className='w-[60px] h-[60px] bg-contain bg-no-repeat' />
              <h6 className='text-base font-semibold'>
                Crown
              </h6>
              <div className='flex gap-1'>
                <img src='/images/money.svg' width={16} height={16} />
                <p className='text-xs text-[#545454'>124</p>
              </div>
            </div>
          </div>
          
          <div className='col-span-6 md:col-span-3'>
            <div className='flex flex-col items-center gap-1'>
              <img src='/images/gifts/3.png' className='w-[60px] h-[60px] bg-contain bg-no-repeat' />
              <h6 className='text-base font-semibold'>
                Cake
              </h6>
              <div className='flex gap-1'>
                <img src='/images/money.svg' width={16} height={16} />
                <p className='text-xs text-[#545454'>102</p>
              </div>
            </div>
          </div>
          
          <div className='col-span-6 md:col-span-3'>
            <div className='flex flex-col items-center gap-1'>
              <img src='/images/gifts/4.png' className='w-[60px] h-[60px] bg-contain bg-no-repeat' />
              <h6 className='text-base font-semibold'>
                Orange
              </h6>
              <div className='flex gap-1'>
                <img src='/images/money.svg' width={16} height={16} />
                <p className='text-xs text-[#545454'>16</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
