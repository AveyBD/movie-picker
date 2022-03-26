import React from "react";

const Container = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:px-10">
      <div className="md:col-span-3">
        <h2>Hello Container</h2>
      </div>
      <div className="md:col-span-1">
        <h2>Hello Sidebar</h2>
      </div>
    </div>
  );
};

export default Container;
