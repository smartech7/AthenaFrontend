import { Album, albumValidator } from '@/lib/validation/album';
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';

import { Button } from '@/components/ui/button';
import CONSTANTS from '@/config/constants';
import FileUpload from '@/components/common/FileUpload';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { createAlbum } from '@/api/album';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '@/context/AuthContext';
import { useState } from 'react';

interface ICreateAlbumDialogProps {
  open: boolean;
  onClose: () => void;
}

const CreateAlbumDialog: React.FC<ICreateAlbumDialogProps> = ({
  open,
  onClose,
}) => {
  const { user } = useAuthContext();
  const [input, setInput] = useState<{
    title: string;
    description: string;
    images: Array<{
      title: string;
      description: string;
      image: string;
      createdAt: string;
    }>;
  }>({
    title: '',
    description: '',
    images: [],
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

  const onAddImage = ({ url }: { url: string }) => {
    setInput((prev) => ({
      ...prev,
      images: [
        ...prev.images,
        {
          title: '',
          description: '',
          image: url,
          createdAt: new Date().toLocaleString(),
        },
      ],
    }));
  };

  const onSubmit = () => {
    if (!user) return;

    setIsSaving(true);
    const newAlbum: Album = albumValidator.parse({
      ...input,
      userId: user._id,
    });

    createAlbum(newAlbum)
      .then((res) => {
        if (res.code === CONSTANTS.SUCCESS) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        console.warn('Error while creating Ablum:', err);
      })
      .finally(() => {
        setIsSaving(false);
        onClose();
      });

    setInput({
      title: '',
      description: '',
      images: [],
    })

  };

  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>Create Album</DialogHeader>
      <DialogBody divider className="flex flex-col gap-4">
        <Input
          placeholder="Title"
          name="title"
          value={input.title}
          onChange={onInputChange}
        />

        <Textarea
          placeholder="Description"
          name="description"
          value={input.description}
          onChange={onInputChange}
        />

        <div className="bg-gray-300 w-full h-[400px] overflow-y-auto rounded-xl outline-dashed outline-gray-400 outline-2 p-4">
          <div className="flex flex-wrap gap-4">
            {input.images.map((image, i) => (
              <div
                key={`album-image-${i}`}
                className="rounded-xl w-[120px] h-[120px] bg-cover bg-center"
                style={{ backgroundImage: `url(${image.image})` }}
              ></div>
            ))}

            <FileUpload onSuccess={onAddImage}>
              <Button
                variant="outline"
                className="text-2xl border-gray-400 rounded-xl bg-transparent w-[120px] h-[120px]"
              >
                +
              </Button>
            </FileUpload>
          </div>
        </div>
      </DialogBody>
      <DialogFooter className="gap-4">
        <Button onClick={onSubmit} className="h-[50px]" disabled={isSaving}>
          Save
        </Button>
        <Button onClick={onClose} className="h-[50px]">
          Cancel
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default CreateAlbumDialog;
