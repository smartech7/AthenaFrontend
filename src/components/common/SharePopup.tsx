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

  function getShareUrls(blogUrl: string) {
    const encodedUrl = encodeURIComponent(blogUrl);
    const title = "Diving Deeper into React JS: Exploring Advanced Concepts"; // Replace with your blog title

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?display=page&u=${encodedUrl}`;
    const whatsappShareUrl = `https://wa.me/?text=${encodedUrl}`;
    const telegramShareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(title)}`;
    const redditShareUrl = `https://reddit.com/submit?url=${encodedUrl}&title=${encodeURIComponent(title)}`;
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    const skypeShareUrl = `https://web.skype.com/share?url=${encodedUrl}&text=${encodeURIComponent(title)}`;
    const tiktokShareUrl = `https://www.tiktok.com/sharing?u=${encodedUrl}&title=${encodeURIComponent(title)}`;

    return {
      facebook: facebookShareUrl,
      whatsapp: whatsappShareUrl,
      telegram: telegramShareUrl,
      reddit: redditShareUrl,
      linkedin: linkedinShareUrl,
      skype: skypeShareUrl,
      tiktok: tiktokShareUrl
    };
  }


  const shareUrls = getShareUrls(link);

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
          <Link to={shareUrls.facebook}>
            <div className="flex flex-col items-center gap-1">
              <img src="/images/facebook.svg" width={30} height={30} />
              <p className="text-[10px] font-medium font-montserrat">
                Facebook
              </p>
            </div>
          </Link>
          <Link to={shareUrls.tiktok}>
            <div className="flex flex-col items-center gap-1">
              <img src="/images/tiktok.svg" width={30} height={30} />
              <p className="text-[10px] font-medium font-montserrat">Tiktok</p>
            </div>
          </Link>
          <Link to={shareUrls.skype}>
            <div className="flex flex-col items-center gap-1">
              <img src="/images/skype.svg" width={30} height={30} />
              <p className="text-[10px] font-medium font-montserrat">Skype</p>
            </div>
          </Link>
          <Link to={shareUrls.whatsapp}>
            <div className="flex flex-col items-center gap-1">
              <img src="/images/whatsapp.svg" width={30} height={30} />
              <p className="text-[10px] font-medium font-montserrat">
                Whatsapp
              </p>
            </div>
          </Link>
          <Link to={shareUrls.telegram}>
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
