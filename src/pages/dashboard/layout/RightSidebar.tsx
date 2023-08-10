import { cn } from '@/lib/utils';

interface IRightSidebarProps {
  open?: boolean;
}

const RightSidebar: React.FC<IRightSidebarProps> = ({ open }) => {
  return (
    <div
      className={cn(
        'basis-[500px] w-[500px] bg-dashboard-background',
        open === false ? 'hidden' : 'block'
      )}
    >
      <div></div>
    </div>
  );
};

export default RightSidebar;
