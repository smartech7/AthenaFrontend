import {
  BiChevronDown,
  BiChevronRight,
  BiMenu,
  BiSearch,
  BiSolidBell,
} from 'react-icons/bi';
import { BsFillChatSquareDotsFill, BsPeopleFill } from 'react-icons/bs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';

import Avatar from '@/components/common/Avatar';
import { Button } from '@/components/ui/button';
import { useAuthContext } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const gotoBlog = () => navigate('/blog');

  const MobileNavs = (
    <Menu>
      <MenuHandler>
        <Button variant="secondary" size="icon">
          <BiMenu />
        </Button>
      </MenuHandler>
      <MenuList className="text-base shadow-lg z-[9999] p-2">
        <MenuItem
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </MenuItem>
        <Menu placement="right-start" offset={15}>
          <MenuHandler>
            <MenuItem className="flex justify-between">
              Newsfeed
              <BiChevronRight />
            </MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>Newsfeed</MenuItem>
            <MenuItem>People Nearby</MenuItem>
            <MenuItem>My friends</MenuItem>
            <MenuItem>Inbox</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="right-start" offset={15}>
          <MenuHandler>
            <MenuItem className="flex justify-between">
              My Profile
              <BiChevronRight />
            </MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>View My Profile</MenuItem>
            <MenuItem
              onClick={() => {
                navigate('/profile/edit/?page=info');
              }}
            >
              Edit Profile
            </MenuItem>
            <MenuItem>Profile Picture</MenuItem>
            <MenuItem>My Articles</MenuItem>
            <MenuItem>My Classifieds</MenuItem>
            <MenuItem>My Jobs</MenuItem>
            <MenuItem>My Friends</MenuItem>
            <MenuItem>My Photos</MenuItem>
            <MenuItem>My Gifts</MenuItem>
            <MenuItem>Add new article</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="right-start" offset={15}>
          <MenuHandler>
            <MenuItem className="flex justify-between">
              Group Chat
              <BiChevronRight />
            </MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Embeded Code</MenuItem>
            <MenuItem>All Chat room</MenuItem>
            <MenuItem>Chat Rules</MenuItem>
            <MenuItem>Administration</MenuItem>
            <MenuItem>Mobile Chat</MenuItem>
          </MenuList>
        </Menu>
        <MenuItem onClick={gotoBlog}>Blog</MenuItem>
        <Menu placement="right-start" offset={15}>
          <MenuHandler>
            <MenuItem className="flex justify-between">
              Explore
              <BiChevronRight />
            </MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>Classifieds</MenuItem>
            <MenuItem>Banners</MenuItem>
            <MenuItem>Radio</MenuItem>
            <MenuItem>Browse</MenuItem>
            <MenuItem>Forums</MenuItem>
            <MenuItem>Who we are?</MenuItem>
            <MenuItem>Contact Us</MenuItem>
            <MenuItem
              onClick={() => {
                navigate('/logout');
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </MenuList>
    </Menu>
  );

  return (
    <div className="fixed top-0 left-0 w-screen px-[25px] z-[9900] bg-white h-[72px] flex items-center justify-between gap-5">
      <div
        className="basis-[200px] w-[200px] h-[60px] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/black_logo.svg)' }}
      ></div>
      <div className="flex-1 xl:hidden">{MobileNavs}</div>
      <div className="hidden gap-0 xl:flex xl:justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="focus-visible:ring-0 focus-visible:ring-offset-0 text-black font-montserrat font-semibold text-[13.24px]"
            >
              Home
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="gap-1 focus-visible:ring-0 focus-visible:ring-offset-0 text-black font-montserrat font-semibold text-[13.24px]"
            >
              Newsfeed
              <BiChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 z-[9900] !font-montserrat !text-[13.24px]">
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Newsfeed</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>People Nearby</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>My friends</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Inbox</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Images</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Videos</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="gap-1 focus-visible:ring-0 focus-visible:ring-offset-0 text-black font-montserrat font-semibold text-[13.24px]"
            >
              My Profile
              <BiChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 z-[9900]">
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>View My Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="font-montserrat font-medium text-[13.24px]"
              onClick={() => {
                navigate('/profile/edit/?page=info');
              }}
            >
              <span>Edit Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Profile Picture</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>My Articles</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>My Classifieds</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>My Jobs</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>My Friends</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>My Photos</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>My Gifts</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Add new article</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="gap-1 focus-visible:ring-0 focus-visible:ring-offset-0 text-black font-montserrat font-semibold text-[13.24px]"
            >
              Group Chat
              <BiChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 z-[9900]">
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Download</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Embeded Code</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>All Chat room</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Chat Rules</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Administration</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Mobile Chat</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="focus-visible:ring-0 focus-visible:ring-offset-0 text-black font-montserrat font-semibold text-[13.24px]"
              onClick={gotoBlog}
            >
              Blog
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="gap-1 focus-visible:ring-0 focus-visible:ring-offset-0 text-black font-montserrat font-semibold text-[13.24px]"
            >
              Explore
              <BiChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 z-[9900]">
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Classifieds</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Banners</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Radio</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Browse</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Forums</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Who we are?</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px]">
              <span>Contact Us</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="font-montserrat font-medium text-[13.24px]"
              onClick={() => {
                navigate('/logout');
              }}
            >
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="icon"
          className="text-[26px] text-[#A6AAB5]"
        >
          <BiSearch />
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <Button
          className="hidden rounded-full md:flex w-[29.65px] h-[29.65px] text-[14px]"
          size="icon"
        >
          <BsFillChatSquareDotsFill />
        </Button>
        <Button
          className="hidden rounded-full md:flex w-[29.65px] h-[29.65px]"
          size="icon"
        >
          <BiSolidBell />
        </Button>
        <Button
          className="hidden rounded-full md:flex w-[29.65px] h-[29.65px]"
          size="icon"
        >
          <BsPeopleFill />
        </Button>
        {/* <Button className="hidden rounded-full md:flex w-[29.65px] h-[29.65px] text-[14px]" size="icon">
          <BsMoonFill />
        </Button> */}
        <div className="flex items-center gap-2">
          <Avatar
            user={user}
            className="w-[38px] h-[38px] border-2 border-[#DADADA]"
          />
          <div className="flex items-center gap-1 cursor-pointer select-none">
            <p className="text-[#202020] font-montserrat font-bold text-[12px] hidden lg:block">
              {user?.name}
            </p>
            <BiChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
