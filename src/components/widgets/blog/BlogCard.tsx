import * as React from 'react';

import { Blog } from '@/lib/validation/blog';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigate } from 'react-router-dom';

dayjs.extend(relativeTime);

interface IBlogCardProps {
  item: Blog;
}

const BlogCard: React.FunctionComponent<IBlogCardProps> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`relative rounded-t-2xl !bg-cover !bg-center w-full h-[250px] overflow-hidden`}
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
        <div className="absolute bottom-0 w-full p-4 bg-gradient-to-b from-black/0 to-black/60 h-1/2">
          <h6 className="text-white text-[18px] font-bold leading-6">
            {item.title}
          </h6>
          <p className="text-white font-sans text-[14px] leading-6">
            {`Posted by ${item.user?.username} ${dayjs(
              item.createdAt
            ).fromNow()}`}
          </p>
          <div
            className="h-12 leading-6 overflow-hidden text-[14px] font-sans text-white"
            dangerouslySetInnerHTML={{
              __html: item.body,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
