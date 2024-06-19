import { useContext, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { DetailContext } from "../context";

const retriveProducts = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/products?_page=${queryKey[1].page}&_per_page=8`
  );
  return response.data;
};

const ProducList = () => {
  const { setData } = useContext(DetailContext);
  const [page, setPage] = useState(1);

  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: retriveProducts,
    refetchInterval: 1000,
  });

  function handeDetailsClick(selectedId) {
    console.log("hello From Click Photo");
    const clickedId = products.data.filter((item) => item.id === selectedId);
    setData(clickedId);
  }

  if (isLoading) return <h3 className=" text-green-400">Fetching Data....</h3>;
  if (error)
    return (
      <h3>
        An Error Occured : {error.messsage} <br />
        Select Data
      </h3>
    );

  // console.log(pr)

  return (
    <div className=" flex flex-col justify-center items-center w-3/5">
      <h3 className=" text-3xl my-2">Product List</h3>
      <ul className="flex flex-wrap justify-center items-center">
        {products.data &&
          products.data.map((product) => (
            <li
              className=" flex flex-col items-center m-2 border rounded-md w-52 h-52"
              key={product.id}
            >
              <img
                onClick={() => handeDetailsClick(product.id)}
                className=" object-cover h-28  w-28 rounded-sm"
                src={product.thumbnail}
                alt={product.title}
              ></img>
              <p className=" text-3xl my-3">{product.title}</p>
            </li>
          ))}
      </ul>
      <div className=" flex gap-2">
        {products.prev && (
          <button
            onClick={() => setPage(page - 1)}
            className=" bg-yellow-600 p-3 text-white rounded-md"
          >
            Prev
          </button>
        )}
        {products.next && (
          <button
            onClick={() => setPage(page + 1)}
            className=" bg-green-600 p-3 text-white rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ProducList;
