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
        'lg:basis-[500px] w-full lg:w-[500px] bg-dashboard-background',
        open === false ? 'hidden' : 'block'
      )}
    >
      <div className="px-6 py-10 bg-white">
        <div className="bg-[url(/images/demo_1.jpg)] bg-cover w-full h-[300px] bg-center rounded-t-2xl"></div>
      </div>

      <div className="px-6 py-6 mt-10 bg-white rounded-t-2xl">
        <div className="flex items-center gap-4">
          <Avatar user={user} />
          <div>
            <h6 className="font-bold text-base text-[#151515]">{user?.name}</h6>
            <a href="#" className="text-[#959595] font-semibold text-[15px]">
              Edit Profile
            </a>
          </div>
        </div>
        <div className="flex mt-5 justify-evenly">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex flex-col items-center gap-2 bg-transparent border-none">
                <p className="text-[22px] text-black font-extrabold">160</p>
                <p className="text-[13px] text-[#151515] opacity-[0.63] font-semibold">
                  Your daily friend requests!
                </p>
              </TooltipTrigger>
              <TooltipContent className="text-white bg-black">
                <p>Growing Connections</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex flex-col items-center gap-2 bg-transparent border-none">
                <p className="text-[22px] text-black font-extrabold">10</p>
                <p className="text-[13px] text-[#151515] opacity-[0.63] font-semibold">
                  Your daily tally of gifts!
                </p>
              </TooltipTrigger>
              <TooltipContent className="text-white bg-black">
                <p>Daily surprise</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center justify-between gap-4 px-10 mt-5 bg-white">
          <p className="font-semibold text-[17px] text-[#515151]">Wallet</p>
          <div className="flex gap-1">
            <img src="/images/money.svg" width={24} height={24} />
            <p className="text-[#515151] font-semibold text-[19px] font-inter">1600</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 mt-10 bg-white rounded-t-2xl">
        <h4 className="text-[18px] text-[#B5B5B5] font-semibold font-inter">
          Trending Topics
        </h4>
        <div className="flex flex-wrap gap-2 mt-4">
          <Tag>#Donamix</Tag>
          <Tag>#DDD</Tag>
          <Tag>#Cookieclicker</Tag>
          <Tag>#inside</Tag>
          <Tag>#hashtag</Tag>
        </div>
      </div>

      <div className="px-6 py-6 mt-10 bg-white rounded-t-2xl">
        <div className='flex items-center justify-between'>
          <h4 className="text-[18px] text-[#B5B5B5] font-semibold font-inter">
            Featured Members
          </h4>
          <Button className='bg-[#F4F4F4] rounded-full h-[30px] text-[13px] font-inter' variant='ghost'>
            See all
          </Button>
        </div>
        <div className='flex flex-col gap-6 mt-6'>
          {featuredMembers.map((item, i) => (
            <FeaturedMemberItem key={`featured-member-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
