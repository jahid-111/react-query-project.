import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DetailsContextProvider from "./context/DetailsContextProvider";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DetailsContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />

        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </QueryClientProvider>
    </DetailsContextProvider>
  </React.StrictMode>
);
