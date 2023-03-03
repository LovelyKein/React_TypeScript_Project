import React, { lazy } from "react";
import {
  RouteObject,
  Navigate,
  useLocation,
  useParams,
  useSearchParams,
  useNavigate,
  NavigateFunction,
  Location,
  Params,
} from "react-router-dom";

import { accountRouter, MenuAttribute } from "@/redux/store";

// 路由组件导航
interface RouterNav {
  [key: string]: React.LazyExoticComponent<() => JSX.Element>;
}
const routerNav: RouterNav = {
  Login: lazy(() => import("@/views/login/Login")),
  Layout: lazy(() => import("@/components/layout/Layout")), // 布局组件
  Home: lazy(() => import("@/views/admin/home/Home")),
  UserList: lazy(() => import("@/views/admin/user/user_list/UserList")),
  AddUser: lazy(() => import("@/views/admin/user/add_user/AddUser")),
  Role: lazy(() => import("@/views/admin/authority/role/Role")),
  Permission: lazy(() => import("@/views/admin/authority/permission/Permission")),
  Edit: lazy(() => import("@/views/admin/news/edit/Edit")),
  Draft: lazy(() => import("@/views/admin/news/draft/Draft")),
  Classify: lazy(() => import("@/views/admin/news/classify/Classify")),
  CheckNews: lazy(() => import("@/views/admin/check/check_news/CheckNews")),
  CheckList: lazy(() => import("@/views/admin/check/check_list/CheckList")),
  PublishAwait: lazy(() => import("@/views/admin/publish/await/Await")),
  PublishDone: lazy(() => import("@/views/admin/publish/done/Done")),
  Offline: lazy(() => import("@/views/admin/publish/offline/Offline")),
  Skeleton: lazy(() => import("@/views/helper/skeleton/Skeleton")),
};

// 统一处理参数的包裹组件
interface ElementPropsType {
  navigate: NavigateFunction;
  location: Location;
  params: Readonly<Params<string>>;
  searchQuery: URLSearchParams;
}
function Element(props: {
  component: React.LazyExoticComponent<
    (props: ElementPropsType) => JSX.Element
  >;
}) {
  const { component: ElementComponent } = props;
  // 统一传递路由参数和方法，实现统一传参管理
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [searchQuery] = useSearchParams();

  return (
    <ElementComponent
      navigate={navigate}
      location={location}
      params={params}
      searchQuery={searchQuery}
    />
  );
}

const recursionRouter = (routes: MenuAttribute[]): RouteObject[] => {
  const routeArr: RouteObject[] = [];
  routes.forEach((route) => {
    let childrenRouter: RouteObject[] | undefined = [];
    if (route.children && route.children.length) {
      childrenRouter = recursionRouter(route.children);
      // 找到第一个菜单页面， 给当前路由的子路由中添加一个路径重定向
      const menuPage = route.children.find(
        (item) => item.component.permissionType === "content"
      );
      menuPage &&
        childrenRouter.unshift({
          path: route.path,
          element: <Navigate to={menuPage.path} />,
        });
    } else {
      childrenRouter = undefined;
    }
    if (route.type === "layout") {
      routeArr.push({
        path: route.path,
        id: route.id.toString(),
        // element: React.createElement(routerNav.Layout),
        element: <Element component={routerNav.Layout} />,
        children: childrenRouter,
      });
    } else {
      routeArr.push({
        path: route.path,
        id: route.id.toString(),
        // element: React.createElement(lazy(() => import(/* @vite-ignore */'..' + route.component.file + '.tsx'))),
        // element: React.createElement(routerNav[route.component.name]),
        element: <Element component={routerNav[route.component.name]} />,
        children: childrenRouter,
      });
    }
  });
  return routeArr;
};

const router = recursionRouter(accountRouter);

export default router;
