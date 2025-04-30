import { useEffect, useState } from "react";

export const ImageHome = () => {
  const [images, setImages] = useState([]);
  //used unsplash for furniture image
  //   const accesskey = process.env.REACT_APP_UNSPLASH_KEY;
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=furniture&per_page=14&client_id=ZmN_8OeBsphKWWdlG4m25aecFL27dalv0vdcPayFVtQ`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.results)) // Note: results is an array

      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-4xl text-center ml-5 mb-5 font-bold animate-scroll inline-block text-[#523a28] mt-7 ">
         
          What's New at UrbanNest ?
        </h1>   
      </div>

      <div className=" md:columns-3 lg:columns-5 gap-4 p-4 ">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.urls.small}
            alt={img.alt_description || "Random Unsplash"}
            className="mb-3  w-full  rounded-sm hover:scale-105 transition duration-200 ease-in "
          />
        ))}
      </div>
    </div>
  );
};
