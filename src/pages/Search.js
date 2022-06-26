import React from "react";
import StockList from "../components/StockList";
import SearchBar from "../components/SearchBar";

//search page for searching stocks
const Search = () => {
  return (
    <main>
      <SearchBar />
      <StockList />
    </main>
  );
};

export default Search;
