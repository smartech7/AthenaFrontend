import { BiChevronDown, BiSearch, BiSolidBell } from 'react-icons/bi';
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

import Avatar from '@/components/common/Avatar';
import { Button } from '@/components/ui/button';
import { useAuthContext } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  return (
    <div className="fixed top-0 left-0 w-screen px-10 z-[9900] bg-white h-[72px] flex items-center justify-between gap-5">
      <div className="basis-[300px] w-[300px]">
        <img src="/images/black_logo.svg" />
      </div>
      <div className="flex gap-2">
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
        <Button className="rounded-full" size="icon">
          <BsFillChatSquareDotsFill />
        </Button>
        <Button className="rounded-full" size="icon">
          <BiSolidBell />
        </Button>
        <Button className="rounded-full" size="icon">
          <BsPeopleFill />
        </Button>
        <Button className="rounded-full" size="icon">
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
