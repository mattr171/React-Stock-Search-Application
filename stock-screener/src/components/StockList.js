import React from "react";
import Stock from "./Stock";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const StockList = () => {
  const { stocks, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  // if no stocks match the search term (also triggers if API request limit is exceeded; check error)
  if (stocks.length < 1) {
    return (
      <div className="searchResults">
        <h2>No stocks have been found matching your search.</h2>
      </div>
    );
  }

  return (
    <div className="searchResults">
      <h2>Stock Search Results</h2>
      <ul>
        {stocks.map((item, index) => {
          return <Stock key={index} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default StockList;
