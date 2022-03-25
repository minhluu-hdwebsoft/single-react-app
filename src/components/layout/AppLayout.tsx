import { LogoutOutlined, NotificationOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useAuth } from "context";
import React, { ReactChild } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// interface MenuItem {
//   key: string;
//   path?: string;
//   title: string;
//   child?: MenuItem[];
// }

// const MENUS: MenuItem[] = [];

interface AppLayoutProps {
  children: ReactChild;
}

export function AppLayout(props: AppLayoutProps) {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const locaction = useLocation();
  const currentPathname = locaction.pathname.substring(1) || "hello-world";

  const handleMenuOnClick = (e: any) => {
    const nextPath = e.keyPath ? e.keyPath[0] : "/";
    navigate(nextPath, { replace: false });
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header className="header" style={{ textAlign: "right" }}>
        <LogoutOutlined style={{ color: "white", fontSize: 20 }} onClick={signOut} />
      </Header>
      <Layout>
        <Sider width={280} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={[currentPathname]}
            defaultOpenKeys={[currentPathname]}
            onClick={handleMenuOnClick}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="hello-world">Hello World</Menu.Item>

            <Menu.Item key="class">Class Component</Menu.Item>

            <SubMenu key="functional" icon={<NotificationOutlined />} title="Functional Component">
              <Menu.Item key="functional/todo">Todo List</Menu.Item>
            </SubMenu>

            <Menu.Item key="redux">Redux Demo</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
