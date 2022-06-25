import React from "react";
import { Link } from "react-router-dom";

//display individual stock items in stock list, includes link to detailed quote page
const Stock = ({ name, ticker }) => {
  return (
    <div className="searchResult">
      <h3>{ticker}</h3>
      <h4>{name}</h4>
      <Link to={`/stocks/${ticker}`}>Detailed Quote</Link>
    </div>
  );
};

export default Stock;
