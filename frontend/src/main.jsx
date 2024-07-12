import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


//querClient classından örnek aldık

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  /* provider ile app birleşenini kapsadık */
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* ana uygulama bileşeni */}
      <App />
      <ReactQueryDevtools />
      {/* bildirm bileşeni */}
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);
