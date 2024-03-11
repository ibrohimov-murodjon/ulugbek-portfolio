import { Carousel } from "@material-tailwind/react";

export default function CarouselCustomNavigation({ gallery }) {
  return (
    <Carousel
      className="mb-10 rounded-xl"
      loop={true}
      autoplay={true}
      autoplayDelay={5000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {gallery?.map((image, index) => {
        return (
          <img
            className="h-full w-full object-cover object-center"
            src={image}
            alt={`Image ${index + 1}`}
            key={index}
          />
        );
      })}
    </Carousel>
  );
}
