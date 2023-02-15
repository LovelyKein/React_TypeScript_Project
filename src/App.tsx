import "./App.scss";

import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import router from "./router";

// components
import Skeleton from '@/views/helper/skeleton/Skeleton'

function App() {
  const element = useRoutes(router);
  return (
    <div className="App">
      <Suspense fallback={<Skeleton />}>
        { element }
      </Suspense>
    </div>
  );
}

export default App;
