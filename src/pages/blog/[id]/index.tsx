import { useEffect, useState } from 'react';

import { Blog } from '@/lib/validation/blog';
import CONSTANTS from '@/config/constants';
import CommentBox from '@/components/widgets/blog/CommentBox';
import { Spinner } from '@material-tailwind/react';
import { formatDate } from '@/lib/utils';
import { getBlogById } from '@/api/blog';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const params = useParams();
  const [item, setItem] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (params.id) {
      setIsLoading(true);
      getBlogById(params.id)
        .then((res) => {
          if (res.code === CONSTANTS.SUCCESS) {
            if (res.data) setItem(res.data);
          } else {
            toast.error(res.message);
          }
        })
        .catch((err) => {
          console.warn('Error while loading blog by id:', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [params]);

  if (isLoading || !item) return <Spinner />;

  return (
    <div className="w-full p-6">
      <div
        className="h-[370px] rounded-t-2xl relative flex flex-col justify-end"
        style={{ backgroundImage: `url(${item.banner})` }}
      >
        <div className="flex flex-col justify-end w-full p-8 h-1/2 bg-gradient-to-b from-black/0 to-black/60">
          <h2 className="text-white font-poppins text-[30px] leading-[67px]">{item.title}</h2>
          <p className='text-[#6C757D] font-poppins text-[20px]'>{formatDate(item.createdAt, "MMMM DD, YYYY")}</p>
        </div>
      </div>
      <div className="mt-5">
        <div
          dangerouslySetInnerHTML={{
            __html: item.body,
          }}
        ></div>
      </div>
      <div className='mt-5'>
        <CommentBox blog={item} />
      </div>
    </div>
  );
};

export default BlogDetail;
