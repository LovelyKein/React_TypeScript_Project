import "./App.scss";

import { Suspense } from "react";

// 路由
import { useRoutes } from "react-router-dom";

import router from "./router";

function App() {
  const element = useRoutes(router);
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        {element}
      </Suspense>
    </div>
  );
}

export default App;
