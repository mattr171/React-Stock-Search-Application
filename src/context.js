import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

//SET YOUR API_KEY HERE
const API_KEY = "";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [stocks, setStocks] = useState([]);

  //fetch method for retrieving results based on stock search 
  const fetchStocks = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.polygon.io/v3/reference/tickers?market=stocks&search=${searchTerm}&active=true&sort=ticker&order=asc&limit=10&apiKey=${API_KEY}`
      );
      const data = await response.json();

      const { results } = data;

      //returning only the name and ticker for simple query, more data should be shown on detailed quote
      if (results) {
        const newStocks = results.map((item) => {
          const { name, ticker } = item;
          return { name, ticker };
        });
        setStocks(newStocks);
      } else {
        setStocks([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchStocks();
  }, [searchTerm, fetchStocks]);

  return (
    <AppContext.Provider value={{ stocks, isLoading, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
