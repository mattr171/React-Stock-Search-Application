import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchValue.current.value);
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
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
