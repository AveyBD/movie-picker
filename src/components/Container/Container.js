import React from "react";
import Movies from "../Movies/Movies";
import Sidearea from "../Sidearea/Sidearea";

const Container = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:px-10">
      <div className="md:col-span-3">
        <Movies></Movies>
      </div>
      <div className="md:col-span-1">
        <Sidearea></Sidearea>
      </div>
    </div>
  );
};

export default Container;
