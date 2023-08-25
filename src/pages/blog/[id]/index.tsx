import { BiEdit, BiShareAlt, BiTrash } from 'react-icons/bi';
import { deleteBlog, getBlogById } from '@/api/blog';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Blog } from '@/lib/validation/blog';
import { BsFillEyeFill } from 'react-icons/bs';
import Button from '@/components/common/Button';
import CONSTANTS from '@/config/constants';
import RecentBlogs from '@/components/widgets/blog/RecentBlogs';
import { Spinner } from '@material-tailwind/react';
import { TiArrowForward } from 'react-icons/ti';
import { formatDate } from '@/lib/utils';
import { toast } from 'react-hot-toast';
import { useBlogContext } from '@/context/BlogContext';

// import CommentBox from '@/components/widgets/blog/CommentBox';

const BlogDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
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
    <div className="w-full p-3 md:p-5">
      <div
        className="h-[370px] rounded-t-2xl relative flex flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: `url(${item.banner})` }}
      >
        <div className="absolute top-4 left-4">
          <Button
            className="text-white bg-white/20 rounded-full p-2 text-[24px]"
            onClick={() => {
              navigate(`/blog/${item._id}/edit`);
            }}
          >
            <BiEdit />
          </Button>
          <Button
            className="text-white bg-white/20 rounded-full p-2 text-[24px] ml-2"
            onClick={() => {
              deleteBlog(item._id!)
                .then((res) => {
                  if (res.code === CONSTANTS.SUCCESS) {
                    navigate('/blog');
                    toast.success(res.message);
                  } else {
                    toast.error(res.message);
                  }
                })
                .catch((err) => {
                  console.log('Delete Error:', err);
                })
            }}
          >
            <BiTrash />
          </Button>
        </div>
        <div className="absolute right-4 top-4 bg-white rounded-lg px-3 py-3 text-[14px] font-bold font-sans">
          {categories?.find((val) => val.value === item.tag)?.label}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/0 via-black/80 to-black"></div>
        <div className="absolute bottom-0 left-0 flex items-center justify-between w-full px-4 py-2">
          <div className="flex items-center gap-5 lg:gap-10">
            <div className="text-gray-300 font-poppins flex text-[18px] items-center">
              {formatDate(item.createdAt, 'MMM DD, YYYY')}
            </div>
            <div className="flex items-center gap-1 text-gray-300">
              <BiShareAlt />
              1K
              <span className="hidden sm:block">shares</span>
            </div>
            <div className="flex items-center gap-1 text-gray-300">
              <BsFillEyeFill />
              475
              <span className="hidden sm:block">views</span>
            </div>
          </div>
          <div className="">
            <Button className="text-white bg-white/20 rounded-full p-2 text-[24px]">
              <TiArrowForward />
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col justify-end w-full p-8 h-1/2 bg-gradient-to-b from-black/0 via-black/80 to-black"> */}
      <h2 className="text-black font-poppins text-[30px] leading-[35px] font-bold mt-5">
        {item.title}
      </h2>
      {/* </div> */}
      <div className="mt-5">
        <div
          dangerouslySetInnerHTML={{
            __html: item.body,
          }}
        ></div>
      </div>

      <RecentBlogs className="mt-5" />
      {/* <div className='mt-5'>
        <CommentBox blog={item} />
      </div> */}
    </div>
  );
};

export default BlogDetail;
