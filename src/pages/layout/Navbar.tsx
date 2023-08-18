import {
  BiChevronDown,
  BiChevronRight,
  BiMenu,
  BiSearch,
  BiSolidBell,
} from 'react-icons/bi';
import {
  BsFillChatSquareDotsFill,
  BsMoonFill,
  BsPeopleFill,
} from 'react-icons/bs';
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
import { MenuIcon } from 'lucide-react';
import { useAuthContext } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const MobileNavs = (
    <Menu>
      <MenuHandler>
        <Button variant="secondary" size="icon">
          <BiMenu />
        </Button>
      </MenuHandler>
      <MenuList className="text-base shadow-lg z-[9999] p-2">
        <MenuItem>Home</MenuItem>
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
            <MenuItem>Edit Profile</MenuItem>
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
        <MenuItem>Blog</MenuItem>
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
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </MenuList>
    </Menu>
  );

  return (
    <div className="fixed top-0 left-0 w-screen px-10 z-[9900] bg-white h-[72px] flex items-center justify-between gap-5">
      <div className="basis-[300px] w-[300px]">
        <img src="/images/black_logo.svg" />
      </div>
      <div className="flex-1 2xl:hidden">{MobileNavs}</div>
      <div className="hidden gap-2 2xl:flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="focus-visible:ring-0 focus-visible:ring-offset-0 text-black font-semibold text-[15px]"
            >
              Home
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="gap-1 focus-visible:ring-0 focus-visible:ring-offset-0 text-black font-semibold text-[15px]"
            >
              Newsfeed
              <BiChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 z-[9900]">
            <DropdownMenuItem>
              <span>Newsfeed</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>People Nearby</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>My friends</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Inbox</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Images</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Videos</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="gap-1 focus-visible:ring-0 focus-visible:ring-offset-0 text-black font-semibold text-[15px]"
            >
              My Profile
              <BiChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 z-[9900]">
            <DropdownMenuItem>
              <span>View My Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                navigate('/profile/edit');
              }}
            >
              <span>Edit Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Profile Picture</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>My Articles</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>My Classifieds</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>My Jobs</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>My Friends</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>My Photos</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>My Gifts</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Add new article</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="gap-1 focus-visible:ring-0 focus-visible:ring-offset-0 text-black font-semibold text-[15px]"
            >
              Group Chat
              <BiChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 z-[9900]">
            <DropdownMenuItem>
              <span>Download</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Embeded Code</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>All Chat room</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Chat Rules</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Administration</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Mobile Chat</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="focus-visible:ring-0 focus-visible:ring-offset-0 text-black font-semibold text-[15px]"
              onClick={() => {
                navigate('/blog');
              }}
            >
              Blog
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="gap-1 focus-visible:ring-0 focus-visible:ring-offset-0 text-black font-semibold text-[15px]"
            >
              Explore
              <BiChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 z-[9900]">
            <DropdownMenuItem>
              <span>Classifieds</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Banners</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Radio</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Browse</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Forums</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Who we are?</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Contact Us</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                navigate('/logout');
              }}
            >
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon">
          <BiSearch />
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <Button className="hidden rounded-full md:flex" size="icon">
          <BsFillChatSquareDotsFill />
        </Button>
        <Button className="hidden rounded-full md:flex" size="icon">
          <BiSolidBell />
        </Button>
        <Button className="hidden rounded-full md:flex" size="icon">
          <BsPeopleFill />
        </Button>
        <Button className="hidden rounded-full md:flex" size="icon">
          <BsMoonFill />
        </Button>
        <div className="flex items-center gap-2">
          <Avatar user={user} />
          <div className="flex items-center gap-1 cursor-pointer select-none">
            <p className="text-[#202020] font-montserrat font-bold text-[14px]">
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
