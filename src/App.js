import './psycho.less';
import Fade from 'react-reveal/Fade';
import Logo from "./static/psychoperp_logo.png";
import { Avatar, Row, Col, Tabs } from 'antd';
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import { Typography} from 'antd';
const { TabPane } = Tabs;
const { Title } = Typography;
function App() {
    
  return (
    <div className='PsychoWrapper'>
      <div className='content'>
        <div className='img-div'>
          <img src={Logo} alt='psychoPerp'/>
        </div>
        <Title className='title'>Perps still at bay.</Title>
        <Title level={4} className='subtitle'>Coming Soon</Title>
      </div>
      
      
    </div>
  );
}

export default App;
