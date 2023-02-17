import React, { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

import { accountRouter, MenuAttribute } from "@/redux/store";

// 路由组件导航
const routerNav = {
  'Login':  lazy(() => import('@/views/login/Login')),
  'Layout': lazy(() => import("@/components/layout/Layout")),
  'Home': lazy(() => import("@/views/admin/home/Home")),
  'UserList': lazy(() => import("@/views/admin/user/user_list/UserList")),
  'Role': lazy(() => import("@/views/admin/authority/role/Role")),
  'Permission': lazy(() => import("@/views/admin/authority/permission/Permission")),
  'Edit': lazy(() => import("@/views/admin/news/edit/Edit")),
  'Draft': lazy(() => import("@/views/admin/news/draft/Draft")),
  'Classify': lazy(() => import("@/views/admin/news/classify/Classify")),
  'CheckNews': lazy(() => import("@/views/admin/check/check_news/CheckNews")),
  'CheckList': lazy(() => import("@/views/admin/check/check_list/CheckList")),
  'PublishAwait': lazy(() => import("@/views/admin/publish/await/Await")),
  'PublishDone': lazy(() => import("@/views/admin/publish/done/Done")),
  'Offline': lazy(() => import("@/views/admin/publish/offline/Offline")),
  'Skeleton': lazy(() => import("@/views/helper/skeleton/Skeleton")),
}

const recursionRouter = (routes: MenuAttribute[]): RouteObject[] => {
  const routeArr: RouteObject[] = []
  routes.forEach((route) => {
    let childrenRouter: RouteObject[] | undefined = [];
    if (route.children && route.children.length) {
      childrenRouter = recursionRouter(route.children);
      // 找到第一个菜单页面， 给当前路由的子路由中添加一个路径重定向
      const menuPage = route.children.find((item) => item.component.permissionType === 'content')
      childrenRouter.unshift({
        path: route.path,
        element: <Navigate to={menuPage?.path!} />,
      });
    } else {
      childrenRouter = undefined;
    }
    if (route.type === 'layout') {
      routeArr.push({
        path: route.path,
        id: route.id.toString(),
        element: React.createElement(routerNav.Layout),
        children: childrenRouter
      });
    } else {
      routeArr.push({
        path: route.path,
        id: route.id.toString(),
        element: React.createElement(lazy(() => import(/* @vite-ignore */'..' + route.component.file + '.tsx'))),
        // element: React.createElement(routerNav[route.component.name]),
        children: childrenRouter
      });
    }
  })
  return routeArr
};

const router = recursionRouter(accountRouter);

export default router