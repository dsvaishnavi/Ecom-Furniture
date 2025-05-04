import { useEffect, useState } from "react";

export const ImageHome = () => {
  const [images, setImages] = useState([]);
  // const VITE_APP_UNSPLASH_API = import.meta.env.VITE_APP_UNSPLASH_API;
  const UNSPLASH_API =
    "https://api.unsplash.com/search/photos?query=furniture&per_page=15&page=1&client_id=ZmN_8OeBsphKWWdlG4m25aecFL27dalv0vdcPayFVtQ";

  useEffect(() => {
    fetch(UNSPLASH_API)
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
      <div className="columns-6 sm:columns-2 lg:columns-4 gap-4 p-4 min-h-screen">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.urls.small}
            alt={img.alt_description || "Random Unsplash"}
            className="mb-3  object-cover hover:scale-105 rounded-sm transition duration-200 ease-in"
          />
        ))}
      </div>
    </div>
  );
};
