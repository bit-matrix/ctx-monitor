import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./app/AppRouter";
import reportWebVitals from "./reportWebVitals";
import { CustomProvider } from "rsuite";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <CustomProvider theme="dark">
      <AppRouter />
    </CustomProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
