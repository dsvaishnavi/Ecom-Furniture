import {  useContext , useEffect } from "react";
import { CategoryContext } from "../context/CategoryContext";



export const CategoryList = () => {
    const { category, fetchCategory } = useContext(CategoryContext);
    console.log(category);

    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <div className="flex flex-col gap-5 mt-0 bg-[#ffff] flex-direction row h-[500px] w-full justify-center items-center mb-0">
            <h1 className="text-4xl font-bold text-[#523a28] mb-4">Our Products..</h1>
            <div className="flex flex-wrap gap-[80px] justify-center">
                {category?.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center gap-2 ">
                            <img src={item.image} alt={item.name} className="w-[100px] h-[100px] mb-2" />
                            <h2 className="text-xl font-semibold text-[#523a28]">{item.name}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}