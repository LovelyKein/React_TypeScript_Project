import React from "react";
import { RouteObject } from "react-router-dom";

// antd 组件
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

// 路由
import routes from "@/router";

export default function SideBar() {
  const menuRoutes = routes.filter((route) => route.path === "/admin"); // 过滤出 菜单路由
  // 递归遍历出路由
  const recursionRouter = (routes: RouteObject[]): MenuItem[] => {
    let children: MenuItem[] = [];
    routes.forEach((route) => {
      if (route.children && route.children.length) {
        children.push({
          label: route.path,
          key: route.id!,
          icon: null,
          children: recursionRouter(route.children),
        });
      } else {
        children.push({
        label: route.path,
        key: route.id!,
        icon: null
      });
      }
    });
    return children;
  }
  const menuItems: MenuProps["items"] = recursionRouter(menuRoutes[0].children!) // 路由菜单
  return (
    <div>
      <Sider width={260} style={{}}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[]}
          defaultOpenKeys={[]}
          style={{ height: "100%", borderRight: 0 }}
          items={menuItems}
        />
      </Sider>
    </div>
  );
}
