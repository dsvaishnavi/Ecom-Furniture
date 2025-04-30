import { useContext, useEffect } from "react";
import { CategoryContext } from "../context/CategoryContext";

export const CategoryList = () => {
  const { category, fetchCategory } = useContext(CategoryContext);
  console.log(category);

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="flex flex-col gap-5 mt-6 p-4 bg-white flex-direction row h-full w-full justify-center items-center mb-0">
      <h1 className="text-4xl font-bold text-[#523a28] mb-4">Our Products..</h1>
      <div className="grid grid-cols-6 gap-x-[80px] gap-y-[60px] justify-center ">
        {category?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col border-[#e4af4d] transform transition duration-100 hover:scale-105 border-[4px] rounded-lg  p-4 justify justify-center gap-2 "
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[100px] h-[100px] mb-2"
              />
              <h2 className="text-xl font-semibold text-[#523a28] text-center">
                {item.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
