import { useEffect, useState } from 'react';

import { Blog } from '@/lib/validation/blog';
import CONSTANTS from '@/config/constants';
import { Spinner } from '@material-tailwind/react';
import { formatDate } from '@/lib/utils';
import { getBlogById } from '@/api/blog';
import { toast } from 'react-hot-toast';
import { useBlogContext } from '@/context/BlogContext';
import { useParams } from 'react-router-dom';

// import CommentBox from '@/components/widgets/blog/CommentBox';

const BlogDetail = () => {
  const params = useParams();
  const { categories } = useBlogContext();
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

  if (isLoading || !item)
    return (
      <div className="items-center justify-center flex w-full h-[300px]">
        <Spinner />
      </div>
    );

  return (
    <div className="w-full p-6">
      <div
        className="h-[370px] rounded-t-2xl relative flex flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: `url(${item.banner})` }}
      >
        <div className="absolute right-4 top-4 bg-white rounded-lg px-4 py-2">
          {categories?.find((val) => val.value === item.tag)?.label}
        </div>
      </div>
      {/* <div className="flex flex-col justify-end w-full p-8 h-1/2 bg-gradient-to-b from-black/0 via-black/80 to-black"> */}
      <h2 className="text-black font-poppins text-[30px] leading-[35px] font-bold mt-5">
        {item.title}
      </h2>
      <p className="text-black font-poppins text-[18px] mt-2">
        {formatDate(item.createdAt, 'MMMM DD, YYYY')}
      </p>
      {/* </div> */}
      <div className="mt-5">
        <div
          dangerouslySetInnerHTML={{
            __html: item.body,
          }}
        ></div>
      </div>
      {/* <div className='mt-5'>
        <CommentBox blog={item} />
      </div> */}
    </div>
  );
};

export default BlogDetail;
