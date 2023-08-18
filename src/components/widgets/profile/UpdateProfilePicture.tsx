import { User, userValidator } from '@/lib/validation/user';
import { useEffect, useState } from 'react';

import Avatar from '@/components/common/Avatar';
import { BiSolidEdit } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import CONSTANTS from '@/config/constants';
import FileUpload from '@/components/common/FileUpload';
import { Spinner } from '@material-tailwind/react';
import { toast } from 'react-hot-toast';
import { updateUser } from '@/api/users';
import { useAuthContext } from '@/context/AuthContext';

const UpdateProfilePicture = () => {
  const { user, reload } = useAuthContext();
  const [coverPhoto, setCoverPhoto] = useState<string | null | undefined>(null);
  const [avatar, setAvatar] = useState<string | null | undefined>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      if (user.banner) setCoverPhoto(user.banner);
      if (user.avatar) setAvatar(user.avatar);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner color="blue" />
      </div>
    );
  }

  const onSubmit = () => {
    setIsSaving(true);

    const newUser: User = userValidator.parse({
      ...user,
      avatar: avatar,
      banner: coverPhoto,
    });

    updateUser(user._id, newUser)
      .then((res) => {
        if (res.code === CONSTANTS.SUCCESS) {
          reload();
          console.log(res);
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  return (
    <div className="mt-5">
      <div
        className="relative w-full rounded-2xl bg-black flex items-center justify-center h-[250px]"
        style={{
          backgroundImage: `url(${coverPhoto ?? ''})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div>
          <FileUpload
            onSuccess={(data) => {
              setCoverPhoto(data.url);
            }}
          >
            <Button
              variant="secondary"
              className="text-base font-medium text-black"
            >
              Add Cover Photo
            </Button>
          </FileUpload>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h3 className="text-black font-poppins text-[24px] font-semibold">
          Upload profile picture
        </h3>

        <div className="flex justify-center mt-3">
          <div className="relative">
            <Avatar
              src={avatar ? avatar : undefined}
              user={user}
              className="w-[200px] h-[200px] border-white border-4 text-[50px] font-bold"
            />

            <FileUpload
              onSuccess={(data) => {
                setAvatar(data.url);
              }}
            >
              <Button
                size="icon"
                className="absolute bg-gray-400 rounded-full right-3 bottom-3"
                variant="secondary"
              >
                <BiSolidEdit />
              </Button>
            </FileUpload>
          </div>
        </div>

        <Button
          className="w-full h-[60px] mt-[50px]"
          onClick={onSubmit}
          disabled={isSaving}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default UpdateProfilePicture;
