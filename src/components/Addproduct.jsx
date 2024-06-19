import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const Addproduct = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 5,
    thumbnail: "",
  });

  const mutation = useMutation({
    mutationFn: (newProduct) =>
      axios.post("http://localhost:3000/products", newProduct),

    onSuccess: (data, variables, context) => {
      console.log(context); //calling OnMutate var
      QueryClient.invalidateQueries(["products"]);
    },
    onMutate: (variables) => {
      //call before mutation
      return { greeting: "hello" };
    },
  });

  function submitData(event) {
    event.preventDefault();
    console.log(state);

    const newData = { ...state, id: crypto.randomUUID().toString() };
    mutation.mutate(newData);
  }

  function handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value =
      e.target.value === "number"
        ? event.target.valueAsNumber
        : event.target.value;
    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <form
      onSubmit={submitData}
      className="m-2 p-2 relative rounded-md bg-gray-200 w-1/5 h-1/2 mx-auto"
    >
      <h2 className=" bg-yellow-500 text-2xl p-2 font-semibold text-center">
        Add product UI
      </h2>
      <div className="flex items-center my-3">
        <p className="w-1/3">Title:</p>
        <input
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
          className=" h-10 p-2 border rounded w-2/3"
          placeholder="Enter Product Title"
        />
      </div>
      <div className="flex items-center my-3">
        <p className="w-1/3">Description:</p>
        <input
          type="text"
          value={state.description}
          name="description"
          onChange={handleChange}
          className=" h-16 p-2 border rounded w-2/3 "
          placeholder="Enter Product Description"
        />
      </div>
      <div className="flex items-center my-3">
        <p className="w-1/3">Price:</p>
        <input
          type="number"
          value={state.price}
          name="price"
          onChange={handleChange}
          className=" h-10 p-2 border rounded w-2/3"
          placeholder="Price"
        />
      </div>
      <div className="flex items-center my-3">
        <p className="w-1/3">Rating:</p>
        <input
          type="number"
          value={state.rating}
          name="rating"
          onChange={handleChange}
          className=" h-10 p-2 border rounded w-2/3"
          placeholder="Rating"
        />
      </div>
      <div className="flex items-center my-3">
        <p className="w-1/3">Image:</p>
        <input
          type="text"
          value={state.thumbnail}
          name="thumbnail"
          onChange={handleChange}
          className=" h-10 p-2 border rounded w-2/3"
          placeholder="Thumbnail"
        />
      </div>
      <div className="flex items-center  my-7">
        <button
          type="submit"
          className=" bg-green-500 px-4 absolute bottom-0 left-0 w-full rounded-md py-2 mx-auto text-white hover:bg-green-400"
        >
          Add Product{" "}
        </button>
      </div>
    </form>
  );
};

export default Addproduct;
