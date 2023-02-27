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
      {/* 使用 lazy 懒加载，需要在外层加上 Suspense 缓冲 */}
      <Suspense fallback={<Skeleton />}>
        { element }
      </Suspense>
    </div>
  );
}

export default App;
