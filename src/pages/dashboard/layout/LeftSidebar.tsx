import {
  BiMenu,
  BiSolidCalendarEdit,
  BiSolidChevronDownCircle,
  BiSolidChevronUpCircle,
  BiSolidImage,
  BiSolidMessageDots,
  BiSolidMessageRoundedDetail,
  BiSolidShoppingBag,
  BiSolidVideo,
  BiUser,
} from 'react-icons/bi';
import {
  BsAndroid2,
  BsApple,
  BsFillCalendarCheckFill,
  BsGridFill,
  BsPeopleFill,
  BsPlayCircleFill,
} from 'react-icons/bs';
import { FaHandsHelping, FaShoppingBasket } from 'react-icons/fa';
import { IoClose, IoDiamondOutline } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import { FaRadio } from 'react-icons/fa6';
import { HiUserGroup } from 'react-icons/hi2';
import { LiaHandPaper } from 'react-icons/lia';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type ISidebarMenuItemProps = {
  selected: boolean;
  children: React.ReactNode;
  onSelect?: () => void;
};
const SidebarMenuItem: React.FC<ISidebarMenuItemProps> = ({
  selected,
  children,
  onSelect,
}) => {
  return (
    <div
      className={cn(
        'w-full h-[80px] p-0 cursor-pointer hover:!text-black transition-all',
        selected === true ? 'bg-dashboard-background' : 'bg-white'
      )}
      onClick={onSelect}
    >
      <div className="h-2 bg-white rounded-br-full"></div>
      <div className="relative w-full h-[64px]">
        <div className="absolute top-0 left-0 z-0 w-10 h-full bg-white"></div>
        <div className="w-full h-full px-2">
          <div
            className={cn(
              'rounded-full w-full h-full p-[6px] relative z-2 transition-all',
              selected === true ? 'bg-dashboard-background' : 'bg-white'
            )}
          >
            <div
              className={cn(
                'bg-white rounded-full h-full flex items-center gap-3 px-4 py-2 text-[17px] font-montserrat hover:text-black hover:font-bold transition-all',
                selected === true ? 'text-black font-bold' : 'text-[#828282]'
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="h-2 bg-white rounded-tr-full"></div>
    </div>
  );
};

const LeftSidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isExpanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <aside
      id="left-sidebar"
      className={cn(
        'w-[230px] absolute left-0 top-0 2xl:relative bg-transparent -translate-x-[230px] 2xl:!translate-x-0 transition-all z-50',
        open === false ? '-translate-x-[230px]' : 'translate-x-0'
      )}
    >
      <div
        className="absolute top-0 block bg-white 2xl:hidden left-full text-[30px] -translate-x-2 pl-2 rounded-br-md hover:text-gray-600 cursor-pointer select-none"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open === true ? <IoClose /> : <BiMenu />}
      </div>
      <div className="w-full pt-[22px] pb-4 bg-white rounded-br-lg">
        <div className="w-full bg-transparent">
          <SidebarMenuItem
            selected={selectedMenu === 0}
            onSelect={() => setSelectedMenu(0)}
          >
            <big>
              <BsGridFill />
            </big>
            My Newsfeed
          </SidebarMenuItem>
          <SidebarMenuItem
            selected={selectedMenu === 1}
            onSelect={() => setSelectedMenu(1)}
          >
            <big>
              <BiSolidMessageRoundedDetail />
            </big>
            Conversations
          </SidebarMenuItem>
          <SidebarMenuItem
            selected={selectedMenu === 2}
            onSelect={() => setSelectedMenu(2)}
          >
            <big>
              <BsPeopleFill />
            </big>
            People Nearby
          </SidebarMenuItem>
          <SidebarMenuItem
            selected={selectedMenu === 3}
            onSelect={() => setSelectedMenu(3)}
          >
            <big>
              <FaShoppingBasket />
            </big>
            Marketplace
          </SidebarMenuItem>
          <SidebarMenuItem
            selected={selectedMenu === 4}
            onSelect={() => setSelectedMenu(4)}
          >
            <big>
              <FaHandsHelping />
            </big>
            Friends
          </SidebarMenuItem>
          <SidebarMenuItem
            selected={selectedMenu === 5}
            onSelect={() => setSelectedMenu(5)}
          >
            <big>
              <BiSolidMessageDots />
            </big>
            Messages
          </SidebarMenuItem>
          <SidebarMenuItem
            selected={selectedMenu === 6}
            onSelect={() => setSelectedMenu(6)}
          >
            <big>
              <BiSolidImage />
            </big>
            Images
          </SidebarMenuItem>
          <SidebarMenuItem
            selected={selectedMenu === 7}
            onSelect={() => setSelectedMenu(7)}
          >
            <big>
              <BsPlayCircleFill />
            </big>
            Videos
          </SidebarMenuItem>
          {isExpanded === false ? (
            <SidebarMenuItem
              selected={false}
              onSelect={() => setExpanded(true)}
            >
              <big>
                <BiSolidChevronDownCircle />
              </big>
              See More
            </SidebarMenuItem>
          ) : (
            <div className="transition-all ease-in-out fade-in-30">
              <SidebarMenuItem
                selected={selectedMenu === 8}
                onSelect={() => setSelectedMenu(8)}
              >
                <big>
                  <BiSolidCalendarEdit />
                </big>
                Blogs
              </SidebarMenuItem>
              <SidebarMenuItem
                selected={selectedMenu === 9}
                onSelect={() => setSelectedMenu(9)}
              >
                <big>
                  <BiSolidShoppingBag />
                </big>
                Jobs
              </SidebarMenuItem>
              <SidebarMenuItem
                selected={selectedMenu === 10}
                onSelect={() => setSelectedMenu(10)}
              >
                <big>
                  <FaRadio />
                </big>
                Radio
              </SidebarMenuItem>
              <SidebarMenuItem
                selected={selectedMenu === 11}
                onSelect={() => setSelectedMenu(11)}
              >
                <big>
                  <BiSolidVideo />
                </big>
                Live Streams
              </SidebarMenuItem>
              <SidebarMenuItem
                selected={selectedMenu === 12}
                onSelect={() => setSelectedMenu(12)}
              >
                <big>
                  <HiUserGroup />
                </big>
                Groups
              </SidebarMenuItem>
              <SidebarMenuItem
                selected={selectedMenu === 13}
                onSelect={() => setSelectedMenu(13)}
              >
                <big>
                  <BsFillCalendarCheckFill />
                </big>
                Events
              </SidebarMenuItem>
              <SidebarMenuItem
                selected={false}
                onSelect={() => setExpanded(false)}
              >
                <big>
                  <BiSolidChevronUpCircle />
                </big>
                See Less
              </SidebarMenuItem>
            </div>
          )}
        </div>
      </div>

      <div className="w-full py-4 mt-8 bg-white rounded-r-lg">
        <big className="p-5">Settings</big>
        <SidebarMenuItem selected={false} onSelect={() => setSelectedMenu(13)}>
          <big>
            <BiUser />
          </big>
          Account
        </SidebarMenuItem>
        <SidebarMenuItem selected={false} onSelect={() => setSelectedMenu(14)}>
          <big>
            <LiaHandPaper />
          </big>
          Privacy
        </SidebarMenuItem>
        <SidebarMenuItem selected={false} onSelect={() => setSelectedMenu(15)}>
          <big>
            <IoDiamondOutline />
          </big>
          Upgrade
        </SidebarMenuItem>
      </div>

      <div className="w-full p-4 mt-8 bg-white rounded-r-lg">
        <img src="/images/big_sale.png" width="100%" height="100%" />
      </div>

      <div className="w-full py-[46px] px-[42px] flex flex-col items-center gap-3 bg-white rounded-tr-lg mt-8">
        <img src="/images/get_the_app.png" width="100%" height="100%" />
        <p className="text-[12px] font-bold">Get the app</p>
        <div className="flex gap-3">
          <Button variant="default" size="icon">
            <BsApple />
          </Button>
          <Button variant="default" size="icon">
            <BsAndroid2 />
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
