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
      // {
      //   path: "/admin",
      //   element: <Navigate to={"home"} />, // 重定向
      // },
      {
        path: "home",
        element: <Home />,
        index: true,
        id: '1'
      },
      // 用户
      {
        path: "user",
        id: '2',
        children: [
          {
            path: "/admin/user",
            element: <Navigate to={"all_list"} />,
            id: '3'
          },
          {
            path: "all_list",
            element: <AllList />,
            index: true,
            id: '4'
          },
        ],
      },
      // 权限
      {
        path: "authority",
        id: '5',
        children: [
          {
            path: "/admin/authority",
            element: <Navigate to={"role"} />,
            id: '6'
          },
          {
            path: "role",
            element: <Role />,
            index: true,
            id: '7'
          },
          {
            path: "permission",
            element: <Permission />,
            id: '8'
          },
        ],
      },
      // 新闻
      {
        path: "news",
        id: '9',
        children: [
          {
            path: "/admin/news",
            element: <Navigate to={"edit"} />,
            id: '10'
          },
          {
            path: "edit",
            element: <Edit />,
            index: true,
            id: '11'
          },
          {
            path: "draft",
            element: <Draft />,
            id: '12'
          },
          {
            path: "classify",
            element: <Classify />,
            id: '13'
          },
        ],
      },
      // 审核
      {
        path: "check",
        id: '14',
        children: [
          {
            path: "/admin/check",
            element: <Navigate to={"news"} />,
            id: '15'
          },
          {
            path: "news",
            element: <CheckNews />,
            index: true,
            id: '16'
          },
          {
            path: "list",
            element: <CheckList />,
            id: '17'
          },
        ],
      },
      // 发布
      {
        path: "publish",
        id: '18',
        children: [
          {
            path: "/admin/publish",
            element: <Navigate to={"await"} />,
            id: '19'
          },
          {
            path: "await",
            element: <PublishAwait />,
            index: true,
            id: '20'
          },
          {
            path: "done",
            element: <PublishDone />,
            id: '21'
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