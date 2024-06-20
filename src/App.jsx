import { useContext } from "react";
import "./App.css";
import DetailsProduct from "./components/DetailsProduct";
import ProducList from "./components/ProducList";
import { DetailContext } from "./context";
import Addproduct from "./components/Addproduct";

// not deletd from Server (copied from AI)
function App() {
  const { data } = useContext(DetailContext);

  let id;
  if (data && data.length > 0) {
    id = data[0].id;
  } else {
    id = null;
  }
  // console.log(id);

  return (
    <div className=" flex m-3  ">
      <Addproduct></Addproduct>
      <ProducList></ProducList>
      <DetailsProduct id={id}></DetailsProduct>
    </div>
  );
}

export default App;
