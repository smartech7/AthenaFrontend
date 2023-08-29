import { ButtonProps, Button as MuiRawButton } from '@material-tailwind/react';

import { cn } from '@/lib/utils';
import { useRef } from 'react';

const Button: React.FC<ButtonProps> = (props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <MuiRawButton
      {...props}
      className={cn(
        'shadow-none bg-primary font-semibold text-sm font-inter normal-case flex justify-center items-center py-2 h-[42px] hover:shadow-sm',
        props.className
      )}
      ref={buttonRef}
    >
      {props.children}
    </MuiRawButton>
  );
};

export default Button;
