import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Set the speed for auto-slide (3000ms = 3 seconds)
  };

  const { data, fetchProduct } = useContext(DataContext);
  console.log(data);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Slider {...settings}>
        {data?.slice(0, 6)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#b6845f] via-[#d0b49f] to-[#e4d4c8] -z-10"
            >
              <div className="flex gap-10 justify-center h-[300px] items-center px-4 ">
                <div className="space-y-5">
                  <h2 className="text-[#503320] font-bold px-10 font-sans text-3xl ">
                    Discover your new{" "}
                    <span className="text-[#fffaf5]">space !!</span>
                  </h2>
                  <h1 className="text-2xl px-10 font-bold uppercase line-clamp-5 w-500px md:w-[900px] text-black">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] px-10 line-clamp-4 text-2xl text-black">
                    {item.description}
                  </p>
                  <div className="px-10  ">
                    <button
                      className="bg-gradient-to-b 
                      from-amber-900 
                      to-amber-600
                      text-white 
                      
                      font-semibold 
                      px-4 
                      py-2.5 
                      rounded-2xl 
                      shadow-md
                      hover:scale-105 
                      hover:shadow-lg
                      active:scale-95
                      transition-all 
                      duration-200
                      focus:outline-none 
                      focus:ring-2 
                      focus:ring-white"
                    >
                      Shop now
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" w-[290px] h-auto hover:scale-105 transition-all shadow-black"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
