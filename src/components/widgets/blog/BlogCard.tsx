import * as React from 'react';

import { Blog } from '@/lib/validation/blog';
import { cn } from '@/lib/utils';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useBlogContext } from '@/context/BlogContext';
import { useNavigate } from 'react-router-dom';

dayjs.extend(relativeTime);

interface IBlogCardProps {
  item: Blog;
  className?: string;
}

const BlogCard: React.FunctionComponent<IBlogCardProps> = ({
  item,
  className,
}) => {
  const navigate = useNavigate();
  const { categories } = useBlogContext();

  return (
    <div
      className={cn(
        `relative rounded-t-2xl !bg-cover !bg-center w-full h-[250px] overflow-hidden p-0 select-none`,
        className
      )}
      style={{
        backgroundImage: item.banner ? `url(${item.banner})` : '',
      }}
    >
      <div
        className="w-full h-full bg-transparent cursor-pointer hover:bg-black/20"
        onClick={() => {
          navigate(`/blog/${item._id}`);
        }}
      >
        <div className="absolute right-4 top-4 bg-white rounded-lg px-3 py-3 text-[14px] font-bold font-sans">
          {categories?.find((val) => val.value === item.tag)?.label}
        </div>
        <div className="absolute bottom-0 w-full h-3/4">
          <div className="absolute bottom-0 w-full p-4 overflow-hidden h-2/3 bg-gradient-to-b from-black/0 via-black/90 to-black">
            <div className="flex flex-col h-full overflow-hidden opacit-y">
              <h6 className="text-white text-[18px] font-bold leading-6">
                {item.title}
              </h6>
              <p className="text-gray-300 font-poppins text-[14px] leading-6">
                {`Posted by ${item.user?.username} ${dayjs(
                  item.createdAt
                ).fromNow()}`}
              </p>
              <div
                className="leading-6 overflow-hidden h-full text-[14px] font-sans text-white blog-card-content"
                dangerouslySetInnerHTML={{
                  __html: item.body,
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* <div className='absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-black/0 to-black'></div> */}
      </div>
    </div>
  );
};

export default BlogCard;
