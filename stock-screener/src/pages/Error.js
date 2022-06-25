import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <div>
        <h1>This page does not exist!</h1>
        <Link to="/">Back Home</Link>
      </div>
    </section>
  );
};

export default Error;
