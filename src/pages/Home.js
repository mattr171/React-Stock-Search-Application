import React from "react";
import { Link } from "react-router-dom";

//home page currently includes welcome message and link to search page

const Home = () => {
  return (
    <main>
      <h1>Welcome to StockSearch!</h1>
      <div className="text-center">
        <h3>
          Click the button below to navigate to the search page where you can
          search detailed quotes on any stock.
        </h3>
        <Link to="/search">
          <button className="btn">Search</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
