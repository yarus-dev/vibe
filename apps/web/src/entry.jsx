import { getRootDomNode } from "@/utils/getRootDomNode";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/App";
import "@/global.css";

const $root = getRootDomNode({ id: import.meta.env.VITE_ROOT_ID });
const root = createRoot($root);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
