import "./App.scss";

import { Suspense, lazy } from "react";

// 路由
import { useRoutes } from "react-router-dom";

import router from "./router";

// 骨架屏
// const Skeleton = lazy(() => import('@/views/helper/skeleton/Skeleton'))
import Skeleton from '@/views/helper/skeleton/Skeleton'

function App() {
  const element = useRoutes(router);
  return (
    <div className="App">
      <Suspense fallback={<Skeleton />}>
        {element}
      </Suspense>
    </div>
  );
}

export default App;
