import FeaturedMemberItem, { FeaturedMember } from '@/components/common/FeaturedMemberItem';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Avatar from '@/components/common/Avatar';
import { Button } from '@/components/ui/button';
import Tag from '@/components/common/Tag';
import { cn } from '@/lib/utils';
import { useAuthContext } from '@/context/AuthContext';

interface IRightSidebarProps {
  open?: boolean;
}

const featuredMembers: FeaturedMember[] = [
  {
    avatar: '/images/avatar_1.jpg',
    name: 'John Walton',
    role: 'Moderator'
  },
  {
    avatar: '/images/avatar_2.jpg',
    name: 'Monica Randawa',
    role: 'VIP'
  },
  {
    avatar: '/images/avatar_3.jpg',
    name: 'Innoxent Jay',
    role: 'VIP'
  },
]

const RightSidebar: React.FC<IRightSidebarProps> = ({ open }) => {
  const { user } = useAuthContext();
  return (
    <div
      className={cn(
        'basis-[500px] w-[500px] bg-dashboard-background',
        open === false ? 'hidden' : 'block'
      )}
    >
      <div className="bg-white px-6 py-10">
        <div className="bg-[url(/images/demo_1.jpg)] bg-cover w-full h-[300px] bg-center rounded-t-2xl"></div>
      </div>

      <div className="bg-white rounded-t-2xl mt-10 px-6 py-6">
        <div className="flex items-center gap-4">
          <Avatar user={user} />
          <div>
            <h6 className="font-bold text-base text-[#151515]">{user?.name}</h6>
            <a href="#" className="text-[#959595] font-semibold text-[15px]">
              Edit Profile
            </a>
          </div>
        </div>
        <div className="mt-5 flex justify-evenly">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="bg-transparent border-none flex flex-col items-center gap-2">
                <p className="text-[22px] text-black font-extrabold">160</p>
                <p className="text-[13px] text-[#151515] opacity-[0.63] font-semibold">
                  Your daily friend requests!
                </p>
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white">
                <p>Growing Connections</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="bg-transparent border-none flex flex-col items-center gap-2">
                <p className="text-[22px] text-black font-extrabold">10</p>
                <p className="text-[13px] text-[#151515] opacity-[0.63] font-semibold">
                  Your daily tally of gifts!
                </p>
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white">
                <p>Daily surprise</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mt-5 bg-white flex justify-between px-10 gap-4 items-center">
          <p className="font-semibold text-[17px] text-[#515151]">Wallet</p>
          <div className="flex gap-1">
            <img src="/images/money.svg" width={24} height={24} />
            <p className="text-[#515151] font-semibold text-[19px] font-inter">1600</p>
          </div>
        </div>
      </div>

      <div className="bg-white mt-10 rounded-t-2xl px-6 py-6">
        <h4 className="text-[18px] text-[#B5B5B5] font-semibold font-inter">
          Trending Topics
        </h4>
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag>#Donamix</Tag>
          <Tag>#DDD</Tag>
          <Tag>#Cookieclicker</Tag>
          <Tag>#inside</Tag>
          <Tag>#hashtag</Tag>
        </div>
      </div>

      <div className="bg-white mt-10 rounded-t-2xl px-6 py-6">
        <div className='flex justify-between items-center'>
          <h4 className="text-[18px] text-[#B5B5B5] font-semibold font-inter">
            Featured Members
          </h4>
          <Button className='bg-[#F4F4F4] rounded-full h-[30px] text-[13px] font-inter' variant='ghost'>
            See all
          </Button>
        </div>
        <div className='mt-6 flex flex-col gap-6'>
          {featuredMembers.map((item, i) => (
            <FeaturedMemberItem key={`featured-member-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
