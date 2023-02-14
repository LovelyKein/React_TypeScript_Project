import { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

const Login = lazy(() => import('@/views/login/Login'))
const Layout = lazy(() => import("@/components/layout/Layout"))

const Home = lazy(() => import("@/views/admin/home/Home"))

const AllList = lazy(() => import("@/views/admin/user/user_list/UserList"))

const Role = lazy(() => import("@/views/admin/authority/role/Role"))
const Permission = lazy(() => import("@/views/admin/authority/permission/Permission"))

const Edit = lazy(() => import("@/views/admin/news/edit/Edit"))
const Draft = lazy(() => import("@/views/admin/news/draft/Draft"))
const Classify = lazy(() => import("@/views/admin/news/classify/Classify"))

const CheckNews = lazy(() => import("@/views/admin/check/check_news/CheckNews"))
const CheckList = lazy(() => import("@/views/admin/check/check_list/CheckList"))

const PublishAwait = lazy(() => import("@/views/admin/publish/await/Await"))
const PublishDone = lazy(() => import("@/views/admin/publish/done/Done"))

const Skeleton = lazy(() => import("@/views/helper/skeleton/Skeleton"))

const router: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <Navigate to={"/login"} />, // <Navigate /> 组件被渲染时，就会跳转到 to 的路径页面
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      // 首页
      {
        path: "/admin",
        element: <Navigate to={"/admin/home"} />, // 重定向
      },
      {
        path: "home",
        element: <Home />,
        index: true,
      },
      // 用户
      {
        path: "user",
        children: [
          {
            path: "/admin/user",
            element: <Navigate to={"/admin/user/all_list"} />,
          },
          {
            path: "all_list",
            element: <AllList />,
            index: true,
          },
        ],
      },
      // 权限
      {
        path: "authority",
        children: [
          {
            path: "/admin/authority",
            element: <Navigate to={"/admin/authority/role"} />,
          },
          {
            path: "role",
            element: <Role />,
            index: true,
          },
          {
            path: "permission",
            element: <Permission />,
          },
        ],
      },
      // 新闻
      {
        path: "news",
        children: [
          {
            path: "/admin/news",
            element: <Navigate to={"/admin/news/edit"} />,
          },
          {
            path: "edit",
            element: <Edit />,
            index: true,
          },
          {
            path: "draft",
            element: <Draft />,
          },
          {
            path: "classify",
            element: <Classify />,
          },
        ],
      },
      // 审核
      {
        path: "check",
        children: [
          {
            path: "/admin/check",
            element: <Navigate to={"/admin/check/news"} />,
          },
          {
            path: "news",
            element: <CheckNews />,
            index: true,
          },
          {
            path: "list",
            element: <CheckList />,
          },
        ],
      },
      // 发布
      {
        path: "publish",
        children: [
          {
            path: "/admin/publish",
            element: <Navigate to={"/admin/publish/await"} />,
          },
          {
            path: "await",
            element: <PublishAwait />,
            index: true,
          },
          {
            path: "done",
            element: <PublishDone />,
          },
        ],
      },
    ],
  },
  {
    path: "*", // * 以上路径都不匹配的情况
    element: <Skeleton />,
  },
];

export default router