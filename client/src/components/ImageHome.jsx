import { useEffect, useState } from "react";
// import dotenv from "dotenv";d
// dotenv.config();

export const ImageHome = () => {
  const [images, setImages] = useState([]);
  // used unsplash for furniture image
  // const unsplash_client = process.env.UNSPLASH_CLIENT_ID;
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=furniture&per_page=18&client_id=ZmN_8OeBsphKWWdlG4m25aecFL27dalv0vdcPayFVtQ`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => setImages(data.results)) // Note: results is an array

      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-4xl text-center ml-5 mb-5 font-bold animate-scroll inline-block text-[#523a28] mt-7 ">
          What's New at UrbanNest..?
        </h1>   
      </div>

      <div className="md:columns-3 lg:columns-4 gap-4 p-4 min-h-screen">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.urls.small}
            alt={img.alt_description || "Random Unsplash"}
            className="mb-3 w-full hover:scale-105 rounded-sm transition duration-200 ease-in"
          />
          
        ))}
        <h1 className="text-4xl text-center ml-5 mb-5 font-bold animate-scroll inline-block text-[#523a28] mt-7 ">
          Explore Our Collections....
        </h1>
      </div>
    </div>
  );
};
