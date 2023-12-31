import { useEffect, useState } from 'react';

import { Album } from '@/lib/validation/album';
import AlbumCard from '@/components/widgets/profile/AlbumCard';
import { Button } from '@/components/ui/button';
import CreateAlbumDialog from '@/components/widgets/profile/CreateAlbumDialog';
import { Spinner } from '@material-tailwind/react';
import { getMyAlbums } from '@/api/album';
import { useAuthContext } from '@/context/AuthContext';

const MyAlbums = () => {
  const { user } = useAuthContext();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  useEffect(() => {
    getMyAlbums()
      .then((res) => {
        if (res && res.data) setAlbums(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner color="blue" />
      </div>
    );
  }

  const onAddAlbum = () => {
    setIsCreateModalOpen(true);
  };

  const onCloseCreateModal = () => {
    setIsCreateModalOpen(false);
    getMyAlbums()
      .then((res) => {
        if (res && res.data) setAlbums(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='overflow-visible lg:profile-edit-panel-lg profile-edit-panel'>
      <div className="flex flex-col gap-3 mt-5">
        {albums.length > 0 ? (
          albums.map((val: Album, i: number) => (
            <AlbumCard key={`album-card-${i}`} item={val} />
          ))
        ) : (
          <h4 className="text-base text-center text-gray-800">No albums</h4>
        )}

      </div>
    </div>
  );
};

export default MyAlbums;
