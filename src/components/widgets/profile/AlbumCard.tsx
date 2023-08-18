import { Album } from '@/lib/validation/album';
import { Carousel } from '@material-tailwind/react';

// import { BiDotsVerticalRounded } from 'react-icons/bi';
// import { Button } from '@/components/ui/button';


interface IAlbumCardProps {
  item: Album;
}

const AlbumCard: React.FC<IAlbumCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-[26px] p-2">
      <div className="flex justify-between gap-3">
        <h4 className="text-black text-[20px] font-medium">{item.title}</h4>

        {/* <Button size="icon" variant="ghost">
          <BiDotsVerticalRounded />
        </Button> */}
      </div>

      {item.images.length > 0 ? (
        <Carousel className="rounded-[20px]">
          {item.images.map((img) => (
            <img
              src={img.image}
              alt={img.title}
              className="object-cover w-full h-full"
            />
          ))}
        </Carousel>
      ) : (
        <h4 className="w-full text-center text-gray-800 text-[20px]">
          No Images
        </h4>
      )}
    </div>
  );
};

export default AlbumCard;
