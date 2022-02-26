import './psycho.less';
import Fade from 'react-reveal/Fade';
import Logo from "./static/psychoperp_logo.png";
import OpenSeaIcon from "./static/opensea.svg";
import InstagramIcon from "./static/instagram.svg";
import twitterIcon from "./static/twitter.svg";
import Gif from "./static/PsychoPerp_GIF.gif";
import background from "./static/background.jpg";
import { Avatar, Row, Col, Tabs, Image } from 'antd';
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import { Typography} from 'antd';
import m1 from "./static/perps/4.png";
import m2 from "./static/perps/13.png";
import m3 from "./static/perps/23.png";
import m4 from "./static/perps/26.png";
import m5 from "./static/perps/28.png";
import m6 from "./static/perps/41.png";
import m7 from "./static/perps/47.png";
import m8 from "./static/perps/51.png";
import m9 from "./static/perps/58.png";
import m10 from "./static/perps/59.png";
import m11 from "./static/perps/67.png";
import m12 from "./static/perps/71.png";
import m13 from "./static/perps/74.png";
import m14 from "./static/perps/82.png";
import m15 from "./static/perps/91.png";


const { TabPane } = Tabs;
const { Title, Text } = Typography;


function App() {
  const pics = [
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    m9,
    m10,
    m11,
    m12,
    m13,
    m14,
    m15
  ];

  return (
    // <div className='PsychoWrapper'>
    //   {/* <div className="main"/> */}
    //   {/* <div className="page">

    //   </div> */}
    //   {/* <Row>
    //     <Col md={12}>
    //       <div className="img-section">
    //         <img src={pics[Math.floor(Math.random()*pics.length)]} alt="PsychoPerp NFT Collection #1" />
    //       </div>
    //     </Col>
    //     <Col md={12}>
    //       <div className='content'>          
    //         <div className='img-div'>
    //           <img src={Logo} alt='psychoPerp'/>
    //         </div>
    //         <Title className='title'>Perps still at bay.</Title>
    //         <Title level={4} className='subtitle'>Coming Soon</Title>
    //       </div>
    //     </Col>
    //   </Row> */}
    <div className='PsychoWrapper'
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(117, 19, 93, 0)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
      <Row className='section1'>
          <Col md={12} xs={24} style={{
            //backgroundColor: "blue"
          }}>
            {/* <div className="img-section">
              <img src={pics[Math.floor(Math.random()*pics.length)]} alt="PsychoPerp NFT Collection #1" />
            </div> */}
            <div className="main-img">
              <Image className='img' preview={false} src={pics[Math.floor(Math.random()*pics.length)]}/>
            </div>            
          </Col>
          <Col md={12} xs={24} style={{
            //backgroundColor: "black"
          }}>
            <div className='content'>
              <Row>
                <div className='img-div'>
                  <img src={Logo} alt='psychoPerp'/>
                </div>
              </Row>
              <Row className='title-div'>
                <Title className='title'>Psycho<span className='accent'>Perp</span></Title>
              </Row>
              <Row className='subtitle-div'>
                <Text className='subtitle'>1000s of Psychotic Perpetuators are about to be let loose onto the Metaverse this March</Text>
              </Row>
            </div>
           
          </Col>
          <Row className='call-to-action'>
            <Col md={12} xs={24}>
              <Title className='action-text'> JOIN US TODAY</Title>
            </Col>
            <Col md={12} xs={24}>
              <div className="icon-div">
                <div className="icon">
                  <a href="https://opensea.io/PsychoPerp" target="_blank"><img src={OpenSeaIcon}/></a>
                </div>
                <div className="icon">
                  <a href="https://www.instagram.com/perpssycho/" target="_blank"><img src={InstagramIcon}/></a>
                </div>
                <div className="icon">
                <a href="https://twitter.com/PsychoPerp" target="_blank"><img src={twitterIcon} style={{
                    marginTop: "4px"
                  }}/></a>
                </div>
              </div>
            </Col>

          </Row>
        </Row>
      
    </div>  
      
     
    
  );
}

export default App;
