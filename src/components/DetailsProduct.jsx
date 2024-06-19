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
  // const { data } = useContext(DetailContext);

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: retriveProduct,
  });

  console.log(product, error, isLoading);

  if (isLoading) return <h3 className=" text-green-400">Fetching Data....</h3>;
  if (error)
    return (
      <h3 className=" text-3xl text-red-700">
        An Error Occured : {error.messsage}
      </h3>
    );

  return (
    <>
      {product && (
        <div
          className=" fixed-top w-1/5 h-96
           bg-gray-300 text-2xl px-3 rou"
        >
          <h2>Product Details {product.title} </h2>
          <img
            className=" w-44 h-56 rounded-md mx-auto p-3"
            src={product.thumbnail}
            alt={product.title}
          />
          <p>{product.price}</p>
          <p>Rating : {product.price}</p>
        </div>
      )}
    </>
  );
};

export default DetailsProduct;
