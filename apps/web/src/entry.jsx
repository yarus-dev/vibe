import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getRootDomNode } from "@/utils/getRootDomNode";

import { App } from "./App";
import "@/global.css";

const rootId = "🪄";
const $root = getRootDomNode({ id: rootId });
const root = createRoot($root);
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
