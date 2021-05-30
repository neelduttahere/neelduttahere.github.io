import './App.less';
import { Avatar, Row, Col, Tabs } from 'antd';
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
const { TabPane } = Tabs;
function App() {
    
  return (
    <div className="main-wrapper">
      <div className="header-wrapper">
            <Row className="header-content">
                <Col span={16}>
                    <Avatar className="header-avatar">ND</Avatar>
                    <span className="header-title">shubhranil_dutta@hotmail.com</span>
                </Col>
                <Col span={8}>
                    <div className="nav-menu">
                        <Tabs defaultActiveKey="0">
                            <TabPane tab="Welcome" key="1"/>                            
                            <TabPane tab="About" key="2"/>                            
                            <TabPane tab="Experience" key="3"/>
                            <TabPane tab="Contact" key="4"/>                            
                        </Tabs>
                    </div>
                </Col>
            </Row>
            
        </div>
        <PageOne/>
        <PageTwo/>
    </div>
  );
}

export default App;
