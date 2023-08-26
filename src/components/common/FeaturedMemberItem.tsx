import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { cn } from '@/lib/utils';

export type FeaturedMember = {
  avatar: string;
  name: string;
  role: string;
};

interface IFeaturedMemberItemProps {
  item: FeaturedMember;
}

const FeaturedMemberItem: React.FunctionComponent<IFeaturedMemberItemProps> = ({
  item,
}) => {
  return (
    <div className="flex gap-4">
      <Avatar className='w-[50px] h-[50px]'>
        <AvatarImage src={item.avatar} alt="" />
        <AvatarFallback>
          {item.name
            .split(' ')
            .map((subName) => subName.slice(0, 1))
            .join('')}
        </AvatarFallback>
      </Avatar>
      <div>
        <h5 className="font-poppins text-black text-base font-medium">
          {item.name}
        </h5>
        <p className={cn('font-poppins text-[12.62px] font-medium', item.role === 'VIP' ? 'text-[#8874DC]' : item.role === 'Moderator' ? 'text-[#4C7737]' : 'text-[#AAA]')}>{item.role}</p>
      </div>
    </div>
  );
};

export default FeaturedMemberItem;
