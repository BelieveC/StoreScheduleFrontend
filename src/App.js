import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu } from 'antd';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Retail Store Shift Schedular</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            Hello World
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Retail Store Shift Schedular ©2019 Created by Team IIITA</Footer>
      </Layout>
    </div>
  );
}

export default App;
