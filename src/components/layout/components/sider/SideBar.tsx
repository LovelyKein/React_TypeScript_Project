import React from "react";
import { RouteObject } from "react-router-dom";

// 样式
import './SideBar.scss'

// antd 组件
import { Layout, Menu, theme } from "antd";
const { Sider } = Layout;
import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

// 账号路由
import { accountRouter, MenuAttribute } from "@/redux/store";

/* 辅助方法 */

// 递归解析路由
const recursionRouter = (routes: MenuAttribute[]): MenuItem[] => {
  let children: MenuItem[] = [];
  routes.forEach((route) => {
    if (route.children && route.children.length) {
      children.push({
        label: route.label,
        key: route.id,
        icon: null,
        children: recursionRouter(route.children),
      });
    } else {
      children.push({
        label: route.label,
        key: route.id,
        icon: null,
      });
    }
  });
  return children;
};

interface Props {
  width: number
}
export default function SideBar(props: Props) {
  const { token: { colorBgContainer }} = theme.useToken() // abtd 主题

  const menuRoutes = accountRouter.filter((route) => route.type === "layout" && route.layoutComponent === 'Layout'); // 过滤出 菜单路由
  // 递归遍历出路由
  const menuItems: MenuProps["items"] = recursionRouter(menuRoutes); // 路由菜单
  return (
    <div className="siderBar">
      <Sider
        width={props.width}
        style={{ background: colorBgContainer }}
        className="sider"
      >
        <Menu
          className="sider_Menu"
          mode="inline"
          defaultSelectedKeys={[]}
          defaultOpenKeys={[]}
          style={{ borderRight: 0 }}
          items={ menuItems }
        />
      </Sider>
    </div>
  );
}
