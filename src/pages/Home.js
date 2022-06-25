import React from "react";
import StockList from "../components/StockList";
import Search from "../components/Search";

//home page currently includes search form and result list, should eventually move to their own "search" page

const Home = () => {
  return (
    <main>
      <Search />
      <StockList />
    </main>
  );
};

export default Home;
