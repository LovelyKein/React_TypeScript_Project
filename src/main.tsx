import React from "react";
import ReactDOM from "react-dom/client"

import { HashRouter } from "react-router-dom" // 路由规则

import App from "./App" // App 组件

import "./index.css" // 样式  

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
