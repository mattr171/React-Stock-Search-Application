import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchStock = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="searchForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Search for a stock by name or ticker</label>
          <br />
          <input
            type="text"
            id="search-field"
            placeholder="Ex: AAPL, Apple"
            ref={searchValue}
            onChange={searchStock}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
