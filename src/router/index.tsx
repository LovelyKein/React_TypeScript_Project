import { lazy } from "react";
import { RouteObject, redirect, Navigate } from "react-router-dom";

const Login = lazy(() => import('@/views/login/Login'))
const Home = lazy(() => import("@/views/home/Home"));

const router: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <Navigate to={'/login'} />,
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