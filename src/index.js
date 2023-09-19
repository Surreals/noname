import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider, theme } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import MainPage from "./pages/MainPage";
import LineUpPage from "./pages/LineUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  { path: "/line-up", element: <LineUpPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#EB2F96",
          colorInfo: "#EB2F96",
          fontFamily: "'Press Start 2P','Montserrat','Quicksand'",
          colorBgContainer: "#c5c5c521",
        },
        algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
