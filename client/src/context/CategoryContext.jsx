import { createContext, useState } from "react";
import axios from "axios";

export const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState();

  // fetching category from api
  const fetchCategory = async () => {
    try {
      const res = await axios.get(
        "./category.json"
    );
      console.log(res);
      const cData = res.data.categories;
      setCategory(cData);
    } catch (error) {
      console.log(error.message);
    } 
  };

  return (
    <CategoryContext.Provider value={{ category, setCategory ,fetchCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}