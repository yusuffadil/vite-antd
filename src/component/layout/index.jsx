import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, theme, FloatButton } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import ListMenu from './ListMenu';
import reactLogo from '../../assets/react.svg';
import BreadCrumb from './Breadcrumb';

const { Header, Content, Footer, Sider } = Layout;
const LayoutApp = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();

    return (
        <Layout className='layout'>
            <Sider
                collapsible
                theme='light'
                trigger={null}
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                className='sider'
            >
                <div className='logo'>
                    <img src={reactLogo} alt='React Logo' />
                </div>
                <Menu
                    theme='light'
                    defaultSelectedKeys={['/']}
                    selectedKeys={[location.pathname]}
                    mode='inline'
                    items={ListMenu}
                    onClick={({ key }) => navigate(key)}
                />
            </Sider>
            <Layout>
                <Header
                    className='header'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                </Header>
                <Content className='content'>
                    <BreadCrumb />
                    <Outlet />
                </Content>
                <FloatButton.BackTop />
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Vite Antd ©2022 YF
                </Footer>
            </Layout>
        </Layout>
    );
};
export default LayoutApp;
