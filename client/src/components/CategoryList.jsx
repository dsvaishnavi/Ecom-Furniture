import { useContext, useEffect } from "react";
import { CategoryContext } from "../context/CategoryContext";

export const CategoryList = () => {
  const { category, fetchCategory } = useContext(CategoryContext);
  console.log(category);

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="flex flex-col gap-5  bg-white flex-direction row h-full w-full justify-center items-center mb-0">
      <h1 className="text-4xl font-bold text-[#523a28] mt-7 ">
        Our Products..
      </h1>
      <div className="w-full overflow-hidden ">
        {/* made a scroll horizontal withe overflow-x-auto */}
        <div className="flex overflow-x-auto gap-x-8 p-6 ">
          {category?.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] p-4 flex flex-col items-center justify-center gap-2 transform transition duration-100 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[100px] h-[100px] mb-2 transform transition duration-100 hover:scale-125"
              />
              <h2 className="text-xl font-semibold text-[#523a28] text-center">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
