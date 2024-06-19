import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retriveProduct = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

// eslint-disable-next-line react/prop-types
const DetailsProduct = ({ id }) => {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: retriveProduct,
  });

  // console.log(product, error, isLoading);

  if (isLoading)
    return <h3 className=" w-1/5 h-96 text-green-400">Fetching Data....</h3>;
  if (error)
    return (
      <h3 className="  w-1/5 h-96 text-3xl text-red-700">
        An Error Occured : {error.messsage}
        <br />
        <li className="  text-green-600">
          {" "}
          Please Select from Product list to View
        </li>
      </h3>
    );

  return (
    <>
      {product && (
        <div className="  w-1/5  text-2xl px-3 py-5 rounded-md shadow-lg">
          <div className="fixed bg-gray-300 top-0 right-0 w-1/5 text-2xl px-3 py-5 rounded-md shadow-lg">
            <h2>Product Details {product.title} </h2>
            <img
              className=" w-52 h-42 rounded-md mx-auto p-3"
              src={product.thumbnail}
              alt={product.title}
            />
            <p>{product.price}</p>
            <p>Rating : {product.price}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsProduct;
