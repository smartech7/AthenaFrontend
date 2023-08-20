import { useEffect, useMemo, useState } from 'react';

import { BiPlusCircle } from 'react-icons/bi';
import { Blog } from '@/lib/validation/blog';
import BlogCard from '@/components/widgets/blog/BlogCard';
import { Button } from '@/components/ui/button';
import CONSTANTS from '@/config/constants';
import { getBlogsByRange } from '@/api/blog';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LIMIT = 10;

const BlogHome = () => {
  const navigate = useNavigate();
  const [totalCount, setTotalCount] = useState<number>(-1);
  const [realCount, setRealCount] = useState<number>(0);
  const [from, setFrom] = useState<number>(0);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const availableLimit = useMemo(() => {
    if (realCount && realCount - from < LIMIT) return realCount - from;
    return LIMIT;
  }, [from, realCount]);

  const load = () => {
    setIsLoading(true);
    getBlogsByRange({ total_count: totalCount, from, count: availableLimit })
      .then((res) => {
        if (res.code === CONSTANTS.SUCCESS) {
          if (res.data) {
            const temp = res.data;
            if (from === 0) setBlogs(temp);
            else setBlogs((prev) => [...prev, ...temp]);
            setFrom(from + temp.length);
          }
          if (res.totalCount) {
            if (totalCount < 0) setTotalCount(res.totalCount);
            setRealCount(res.totalCount);
          }
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
  };

  useEffect(() => {
    load();
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
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {blogs.map((blog: Blog, i: number) => (
            <BlogCard key={`blog-${i}`} item={blog} />
          ))}
          {isLoading === true &&
            [...Array(availableLimit)].map((_, i) => (
              <div key={`skeleton-${i}`} className="bg-gray-700 rounded-t-2xl w-full h-[250px] animate-pulse"></div>
            ))}
        </div>
        <Button className='w-full mt-3' onClick={load} disabled={isLoading || from >= realCount}>Load More</Button>
      </div>
    </div>
  );
};

export default BlogHome;