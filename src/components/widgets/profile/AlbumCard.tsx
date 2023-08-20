import 'react-multi-carousel/lib/styles.css';

import { Album } from '@/lib/validation/album';
import Carousel from 'react-multi-carousel';

// import { Carousel } from '@material-tailwind/react';

// import { BiDotsVerticalRounded } from 'react-icons/bi';
// import { Button } from '@/components/ui/button';

interface IAlbumCardProps {
  item: Album;
}

const AlbumCard: React.FC<IAlbumCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-t-[26px] p-4">
      <div className="flex justify-between gap-3 mx-auto">
        <h4 className="text-black text-[24px] font-medium">{item.title}</h4>

        {/* <Button size="icon" variant="ghost">
          <BiDotsVerticalRounded />
        </Button> */}
      </div>

      {item.images.length > 0 ? (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="mt-3 w-full"
          containerClass='w-[50%]'
          dotListClass=""
          draggable={false}
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {item.images.map((img, i) => (
            <div
              key={`album-img-${i}`}
              className="h-[200px] w-[200px] bg-cover bg-center"
              style={{ backgroundImage: `url(${img.image})` }}
            ></div>
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
