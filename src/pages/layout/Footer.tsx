import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import { FiArrowUpRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="w-full bg-white pt-[80px]">
      <div className="w-full bg-cover bg-[url(/images/footer_bg.svg)] lg:px-[100px] px-[50px]">
        <div className="xl:flex">
          <div className="xl:flex-[3]">
            <div className="pt-[60px] pb-[40px]">
              <img
                src="/images/black_logo.svg"
                width={200}
                height={60}
                className="invert"
              />
            </div>
            <div className="lg:flex justify-between gap-8">
              <ul className="lg:flex-[2] flex flex-col flex-wrap gap-2 text-white list-disc h-[350px] text-[16px]">
                <li className="font-urbanist">Classifieds</li>
                <li className="font-urbanist">Jobs</li>
                <li className="font-urbanist">Buy Us A Coffee</li>
                <li className="font-urbanist">Embed Chat Code</li>
                <li className="font-urbanist">Contributors</li>
                <li className="font-urbanist">Safety Tips</li>
                <li className="font-urbanist">Terms & Conditions</li>
                <li className="font-urbanist">Press & Media</li>
                <li className="font-urbanist">Advertising</li>
                <li className="font-urbanist">Why Contribute?</li>
                <li className="font-urbanist">Community Guidelines</li>
                <li className="font-urbanist">Promote us</li>
                <li className="font-urbanist">About us</li>
                <li className="font-urbanist">Sitemap</li>
                <li className="font-urbanist">Help Center</li>
                <li className="font-urbanist">Blog</li>
                <li className="font-urbanist">Desktop App</li>
                <li className="font-urbanist">Privacy Policy</li>
                <li className="font-urbanist">DJ Application</li>
                <li className="font-urbanist">Upgrade Account</li>
                <li className="font-urbanist">Earn Free Credits</li>
                <li className="font-urbanist">Suggestions?</li>
              </ul>
              <div className="lg:flex-1 lg:mt-0 mt-12 lg:block flex justify-center">
                <div>
                  <h4 className="text-white font-extrabold uppercase text-[30px] font-urbanist">
                    GET IN TOUCH
                  </h4>
                  <Button
                    className="rounded-full text-black font-urbanist text-[18px] font-bold mt-8 w-[143px] h-[49px]"
                    variant="secondary"
                  >
                    Ask in Forum
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:flex-1 xl:m-0 mt-12">
            <div className="bg-white rounded-[19px] shadow-[0_0_44px_0_rgba(0,0,0,0.15)] p-5">
              <p className="font-sans text-[13px] leading-[30px] text-black">
                Discover the endless possibilities with Donamix! Immerse
                yourself in a vibrant social network that goes beyond the norm.
                Engage in dynamic chat rooms, showcase your creativity with
                captivating photos and videos, delve into meaningful discussions
                in our forums, and explore a plethora of other services. Donamix
                is a powerhouse of options where you can find classifieds, job
                opportunities, blogs, radio, and much more. Connect with people
                from around the globe and make lasting connections. Whether you
                seek a new career, wish to advertise, or simply crave a friendly
                chat, Donamix caters to all your needs. With our diverse range
                of services, your desires are just a click away.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-[64px]">
          <div className="relative z-2 w-full lg:h-[110px] flex lg:flex-row flex-col lg:justify-between gap-5">
            <div className="z-2 flex justify-center h-full items-center gap-5">
              <Button
                variant="ghost"
                className="rounded-full border border-[#A6A6A6] gap-2 text-[#A6A6A6] text-base"
              >
                Work with us
                <FiArrowUpRight />
              </Button>
              <Button
                variant="ghost"
                className="rounded-full border border-[#A6A6A6] gap-2 text-[#A6A6A6] text-base"
              >
                Join the team
                <FiArrowUpRight />
              </Button>
            </div>

            {/* Begin Social Buttons */}
            <div className="z-2 flex h-full items-center justify-center gap-8">
              <Button
                variant="outline"
                size="icon"
                className="w-[54px] h-[54px] rounded-full text-black text-[20px]"
              >
                <FaTiktok />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-[54px] h-[54px] rounded-full text-black text-[20px]"
              >
                <FaYoutube />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-[54px] h-[54px] rounded-full text-black text-[20px]"
              >
                <FaFacebookF />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-[54px] h-[54px] rounded-full text-black text-[20px]"
              >
                <FaInstagram />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-[54px] h-[54px] rounded-full text-black text-[20px]"
              >
                <FaTwitter />
              </Button>
            </div>
            {/* End Social Buttons */}
          </div>

          <div className="xl:absolute relative z-0 w-full h-[110px] xl:bottom-0 xl:left-0 flex items-center justify-center">
            <p className="text-[15px] leading-[26px] text-white">
              &copy; {new Date().getFullYear()} Donamix - All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
