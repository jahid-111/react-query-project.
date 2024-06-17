import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const retriveProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);
  return response.data;
};

const ProducList = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retriveProducts,
    refetchInterval: 1000,
  });

  if (isLoading) return <h3 className=" text-green-400">Fetching Data....</h3>;
  if (error) return <h3>An Error Occured : {error.messsage}</h3>;

  return (
    <div className=" flex flex-col justify-center items-center w-3/5">
      <h3 className=" text-3xl my-2">Product List</h3>
      <ul className="flex flex-wrap justify-center items-center">
        {products &&
          products.map((product) => (
            <li
              className=" flex flex-col items-center m-2 border rounded-md"
              key={product.id}
            >
              <img
                className=" object-cover h-52 w-80 rounded-sm"
                src={product.thumbnail}
                alt={product.title}
              ></img>
              <p className=" text-3xl my-3">{product.title}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProducList;
