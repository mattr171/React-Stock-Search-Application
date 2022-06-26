import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

//SET THIS TO YOUR POLYGON API KEY
const API_KEY = "xcbgZwxD4h7JDZ7vULAS3SS3tFbFpuZB";

const INFO_URL = "https://api.polygon.io/v3/reference/tickers/";
const PRICE_URL = "https://api.polygon.io/v1/open-close/";

const StockQuote = () => {
  const { qTicker } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [stock, setStock] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function getStock() {
      try {
        //currently grabbing sock name, ticker, and description from info url
        const response = await fetch(`${INFO_URL}${qTicker}?apiKey=${API_KEY}`);
        const infoData = await response.json();
        const { results } = infoData;

        if (results) {
          const { name, description, ticker } = results;
          const newStock = { name, description, ticker };
          setStock(newStock);

          // Use yesterday's date to grab recent quote data
          var date = new Date();
          var year = date.getFullYear();
          var month = String(date.getMonth() + 1).padStart(2, "0");
          var day = String(date.getDate() - 1).padStart(2, "0");
          date = year + "-" + month + "-" + day;

          //currently grabbing open and close price from price url
          const priceResponse = await fetch(
            `${PRICE_URL}${qTicker}/${date}?apiKey=${API_KEY}`
          );
          const priceData = await priceResponse.json();
          const { open, close } = priceData;
          if (open && close) {
            setStock({ ...newStock, open, close });
          }
        } else {
          setStock(null);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    getStock();
  }, [qTicker]);

  if (isLoading) {
    return <Loading />;
  }

  if (!stock) {
    return (
      <article>
        <h2>No stock quote</h2>;
      </article>
    );
  }

  const { name, description, ticker, open, close } = stock;
  const percent = (((close - open) / open) * 100).toPrecision(2); //calculate percent change in open -> close price

  return (
    <div className="stock-quote">
      <section className="stock-quote-heading">
        <h1>{ticker}</h1>
        <p className="percent-change">{percent > 0 ? `+` : null}{percent}%</p>
        <div className="stock-info">
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </section>
      <section className="open-close">
        <p>{open}</p>
        <p>{close}</p>
      </section>
    </div>
  );
};

export default StockQuote;
