import React, { useState } from "react";

const Addproduct = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 0,
    thumbnail: "",
  });

  function handleChange(e) {
    e.preventDefault();
  }

  return (
    <div className=" m-2 p-2 bg-gray-200 w-1/5 h-1/2">
      <input
        type="text"
        value={state.title}
        name="title"
        onChange={handleChange}
        className="my-3 border rounded"
        placeholder="Enter Product tile"
      />
      <input
        type="text"
        value={state.description}
        name="description"
        onChange={handleChange}
        className="my-3 border rounded"
        placeholder="Enter Product description"
      />
    </div>
  );
};

export default Addproduct;
