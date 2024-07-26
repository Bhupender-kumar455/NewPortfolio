import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import toast, { Toaster } from 'react-hot-toast';

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster  toastOptions={{
    className: '',
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
  }}/>
  </React.StrictMode>
);
