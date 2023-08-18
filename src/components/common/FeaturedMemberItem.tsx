import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
        <h5 className="font-poppins text-black text-[18px] font-medium">
          {item.name}
        </h5>
        <p>{item.role}</p>
      </div>
    </div>
  );
};

export default FeaturedMemberItem;
