import { Blog, blogValidator } from '@/lib/validation/blog';
import { Card, CardBody, Input } from '@material-tailwind/react';

import { Button } from '@/components/ui/button';
import CONSTANTS from '@/config/constants';
import FileUpload from '@/components/common/FileUpload';
import RichTextEditor from '@/components/common/RichTextEditor';
import { createBlog } from '@/api/blog';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '@/context/AuthContext';
import { useState } from 'react';

const BlogCreate = () => {
  const { user } = useAuthContext();
  const [input, setInput] = useState({
    title: '',
    tags: '',
    body: '',
    banner: '',
  });
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onBannerChange = ({ url }: { url: string }) => {
    setInput((prev) => ({
      ...prev,
      banner: url,
    }));
  };

  const onSubmit = () => {
    if (!user) return;

    setIsSaving(true);
    const newBlog: Blog = blogValidator.parse({
      ...input,
      userId: user._id,
    });
    createBlog(newBlog)
      .then((res) => {
        if (res.code === CONSTANTS.SUCCESS) toast.success(res.message);
        else toast.error(res.message);
      })
      .catch((err) => {
        console.log('Error while creating a blog:', err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  return (
    <div className="w-full p-6">
      <h1 className="text-black font-poppins text-[33px] font-bold">
        Add new Blog
      </h1>

      <Card className="mt-10">
        <CardBody>
          <h4 className="text-black font-inter text-[22px]">Create Blog</h4>
          <div
            className="bg-primary h-[300px] w-full mt-5 rounded-t-3xl flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: input.banner ? `url(${input.banner})` : '',
            }}
          >
            <FileUpload onSuccess={onBannerChange}>
              <Button variant="secondary">Edit Photo</Button>
            </FileUpload>
          </div>
          <div className="mt-8">
            <h6 className="text-base font-bold text-black">Title of Blog</h6>
            <Input
              name="title"
              value={input.title}
              onChange={onInputChange}
              placeholder="Enter Title of Discussion"
              className="!border-t-gray-400 focus:!border-t-gray-900 mt-2 !h-[50px]"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              containerProps={{
                className: 'min-w-0',
              }}
              crossOrigin={undefined}
            />
          </div>
          <div className="mt-8">
            <h6 className="text-base font-bold text-black">Blog Tags</h6>
            <Input
              name="tags"
              value={input.tags}
              onChange={onInputChange}
              placeholder="Enter Tags here"
              className="!border-t-gray-400 focus:!border-t-gray-900 mt-2 !h-[50px]"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              containerProps={{
                className: 'min-w-0',
              }}
              crossOrigin={undefined}
            />
          </div>
          <div className="mt-8">
            <RichTextEditor
              setDefaultStyle="font-family: Poppins; font-size: 12px;"
              defaultValue={input.body}
              placeholder="Type your discussion here"
              onChange={(content) => {
                console.log(content);
                setInput((prev) => ({
                  ...prev,
                  body: content,
                }));
              }}
            />
          </div>
          <div className="mt-5">
            <Button
              className="w-full h-[50px]"
              onClick={onSubmit}
              disabled={isSaving}
            >
              Add Article
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogCreate;
