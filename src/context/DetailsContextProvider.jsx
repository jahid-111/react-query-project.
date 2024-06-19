import { useState } from "react";
import { DetailContext } from ".";

// eslint-disable-next-line react/prop-types
const DetailsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <DetailContext.Provider value={{ data, setData }}>
      {children}
    </DetailContext.Provider>
  );
};

export default DetailsContextProvider;
