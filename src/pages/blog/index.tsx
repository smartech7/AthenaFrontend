import { useEffect, useState } from 'react';

import { BiPlusCircle } from 'react-icons/bi';
import { Blog } from '@/lib/validation/blog';
import BlogCard from '@/components/widgets/blog/BlogCard';
import { Button } from '@/components/ui/button';
import CONSTANTS from '@/config/constants';
import { Spinner } from '@material-tailwind/react';
import { getBlogs } from '@/api/blog';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BlogHome = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getBlogs()
      .then((res) => {
        if (res.code === CONSTANTS.SUCCESS) {
          if (res.data) setBlogs(res.data);
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        console.warn('Error while loading blogs', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="w-full p-6">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-black font-poppins text-[33px] font-bold">Blogs</h1>
        <Button
          className="gap-2 rounded-full"
          onClick={() => {
            navigate('/blog/create');
          }}
        >
          <span className="text-[22px]">
            <BiPlusCircle />
          </span>
          Create Blog
        </Button>
      </div>

      <div className="mt-5">
        {isLoading === true ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {blogs.map((blog: Blog, i: number) => (
              <BlogCard key={`blog-${i}`} item={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogHome;
