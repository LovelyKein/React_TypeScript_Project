import { lazy } from "react";
import { RouteObject, redirect, Navigate } from "react-router-dom";

const Login = lazy(() => import('@/views/login/Login'))
const Home = lazy(() => import("@/views/home/Home"));

const router: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <Navigate to={"/login"} />, // <Navigate /> 组件被渲染时，就会跳转到 to 的路径页面
    // loader: () => {
    //   redirect('/login')
    // }
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];

export default router