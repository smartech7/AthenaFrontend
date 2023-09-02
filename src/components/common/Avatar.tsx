import * as React from 'react';

import {
  AvatarFallback,
  AvatarImage,
  Avatar as RawAvatar,
} from '@/components/ui/avatar';

import { User } from '@/lib/validation/user';

interface IAvatarProps {
  src?: string;
  user?: User | null;
  className?: string;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({
  src,
  user,
  className,
}) => {
  return (
    <RawAvatar className={className}>
      <AvatarImage src={src ? src : ((user && user.avatar) ? user.avatar : '')} />
      <AvatarFallback>
        {user
          ? user.name
            .split(' ')
            .map((subName) => subName.slice(0, 1))
            .join('')
          : 'DM'}
      </AvatarFallback>
    </RawAvatar>
  );
};

export default Avatar;
