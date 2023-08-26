import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from '@material-tailwind/react';

import Button from './Button';
import { Input } from '../ui/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ISharePopupProps {
  link: string;
  children: React.ReactNode;
}

const SharePopup: React.FC<ISharePopupProps> = ({ link, children }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <div>{children}</div>
      </PopoverHandler>
      <PopoverContent>
        <h5 className="text-base font-bold text-black font-montserrat">
          Share
        </h5>
        <div className="flex justify-between gap-3 mt-5">
          <Link to="https://facebook.com">
            <div className="flex flex-col items-center gap-1">
              <img src="/images/facebook.svg" width={30} height={30} />
              <p className="text-[10px] font-medium font-montserrat">
                Facebook
              </p>
            </div>
          </Link>
          <Link to="https://tiktok.com">
            <div className="flex flex-col items-center gap-1">
              <img src="/images/tiktok.svg" width={30} height={30} />
              <p className="text-[10px] font-medium font-montserrat">Tiktok</p>
            </div>
          </Link>
          <Link to="https://web.skype.com">
            <div className="flex flex-col items-center gap-1">
              <img src="/images/skype.svg" width={30} height={30} />
              <p className="text-[10px] font-medium font-montserrat">Skype</p>
            </div>
          </Link>
          <Link to="https://whatsapp.com">
            <div className="flex flex-col items-center gap-1">
              <img src="/images/whatsapp.svg" width={30} height={30} />
              <p className="text-[10px] font-medium font-montserrat">
                Whatsapp
              </p>
            </div>
          </Link>
          <Link to="https://web.telegram.org">
            <div className="flex flex-col items-center gap-1">
              <img src="/images/telegram.svg" width={30} height={30} />
              <p className="text-[10px] font-medium font-montserrat">
                Telegram
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-5 bg-[#F5F5F5] py-1 pl-1 pr-3 flex items-center gap-2 rounded-xl">
          <Input
            className="bg-transparent !border-none !outline-none !ring-0 flex-1 text-black"
            value={link}
          />
          <Button
            className="rounded-full h-[32px] flex items-center justify-center text-white text-xs"
            onClick={() => {
              navigator.clipboard.writeText(link);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 2000);
            }}
          >
            {isCopied ? 'Copied' : 'Copy'}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SharePopup;
