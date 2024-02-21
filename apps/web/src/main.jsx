import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "@/routes/Root";
import "@/assets/global.css";

const $main = "🪄";

createRoot(document.getElementById($main)).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter } from "react-router-dom";
// import "./assets/global.css";

// import ErrorPage from "./error-page";
// import Root from "./routes/Root";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
// ]);

// const ID = ;
// const $root = document.getElementById(ID);

// const root = createRoot($root);
