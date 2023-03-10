import React, {useRef} from 'react';
import './styles/main.css';
import Header from "./components/header";
import {Layout, ConfigProvider, Space} from "antd";
import {Content} from "antd/lib/layout/layout";
import Employment from "./components/employment";
import Skills from "./components/skills";

const App: React.FC= () => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#cc89ba',
                },
            }}
        >
            <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
          <Layout>
              <Content style={{ overflow: 'initial' }}>
                <Header/>
                <Employment isMobile={windowSize.current[0] < 768}/>
                <Skills isMobile={windowSize.current[0] < 768}/>
              </Content>
          </Layout>
            </Space>
        </ConfigProvider>
    );
}

export default App;
