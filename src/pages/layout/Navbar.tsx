import {
  BiChevronDown,
  BiChevronRight,
  BiLogOut,
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
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
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-[9900]">
            <DropdownMenuItem className="font-montserrat font-medium text-[13.24px] gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M9.06707 14.0507L12.7072 11.949C13.0958 11.7247 13.2897 11.6125 13.431 11.4556C13.5561 11.3167 13.6506 11.1531 13.7083 10.9754C13.7735 10.775 13.7735 10.5511 13.7735 10.1045V5.89508C13.7735 5.44847 13.7735 5.22459 13.7083 5.02421C13.6506 4.84651 13.5561 4.68281 13.431 4.54396C13.2903 4.3877 13.0969 4.27599 12.7116 4.05358L9.0664 1.94902C8.6778 1.72467 8.48394 1.61271 8.27734 1.56881C8.0946 1.52996 7.9056 1.52996 7.72287 1.56881C7.51627 1.61272 7.32174 1.72467 6.93314 1.94902L3.29229 4.05107C2.90416 4.27515 2.71024 4.38711 2.56902 4.54396C2.44398 4.68281 2.34956 4.84651 2.29182 5.02421C2.22656 5.22506 2.22656 5.44953 2.22656 5.89824V10.1016C2.22656 10.5502 2.22656 10.7746 2.29182 10.9754C2.34956 11.1531 2.44398 11.3167 2.56902 11.4556C2.71032 11.6125 2.90438 11.7247 3.29297 11.949L6.93314 14.0507C7.32174 14.275 7.51627 14.387 7.72287 14.431C7.9056 14.4698 8.0946 14.4698 8.27734 14.431C8.48394 14.387 8.67847 14.275 9.06707 14.0507Z"
                  stroke="black"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 7.99978C6 9.10432 6.8954 9.99978 8 9.99978C9.1046 9.99978 10 9.10432 10 7.99978C10 6.89518 9.1046 5.99976 8 5.99976C6.8954 5.99976 6 6.89518 6 7.99978Z"
                  stroke="black"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Settings</span>
            </DropdownMenuItem>
            <hr/>
            <DropdownMenuItem
              className="font-montserrat font-medium text-[13.24px] gap-2"
              onClick={() => {
                navigate('/logout');
              }}
            >
              <span className="text-base">
                <BiLogOut />
              </span>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
