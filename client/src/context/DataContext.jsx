import { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  // fetching product from api
  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        "/furniture.json"
      );
      console.log(res);
      const pData = res.data.products;
      setData(pData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchProduct }}>
      {children}
    </DataContext.Provider>
  );
};
