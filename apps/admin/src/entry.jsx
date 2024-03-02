import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { getRootDomNode } from "@/utils/getRootDomNode";

import { App } from "@/App";
import "@/global.css";

const $root = getRootDomNode({ id: '🪄' });
const root = createRoot($root);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
