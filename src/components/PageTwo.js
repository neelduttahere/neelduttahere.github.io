import { Row, Col, Typography, Space} from 'antd';
import Fade from 'react-reveal/Fade';
import MyFace from '../static/profile-photo.jpg';
import MyFace2x from '../static/profile-photo-2x.jpg';
import TriangleBg from '../static/bg1.svg';
import PageTwoGraphic from '../static/pagetwographic.svg';
import BackgroundPageTwo from '../static/page_two_bg.svg';
import SquareOne from '../static/square_1.svg';
import SquareTwo from '../static/square_2.svg';
import CircleOne from '../static/circle_1.svg';
import CircleTwo from '../static/circle_2.svg';
import CirclBg from '../static/bg2.svg';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const { Title, Text } = Typography;
function PageTwo() {
    const [offsetY, setOffsetY] = useState(0);
    function handleScroll (event) {
        //console.log(window.pageYOffset);
        setOffsetY(window.pageYOffset);
    }
    
    //scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', event => {handleScroll(event)}, true);

        return () => window.removeEventListener('scroll', event => {handleScroll(event)}, true);
    },[]);

    console.log(offsetY);
    return(
        <div className="page-two-wrapper">
            <br/>
            <Row>
              <div className="page-2-title-card">
                  <Title className="title-text">I am a passionate UI/UX designer and full stack developer with a really sharp attention to detail.</Title>
              </div>
              <div className="page-2-graphic">
                  <img src={PageTwoGraphic} alt=""/>
              </div>
            </Row>
            <div className='page-two-content'>
              <Row>
                <Col md={5}>
                  <p className='heading'>01 Story</p>
                </Col>
                <Col md={19}>
                  <p className='body-text'>Hi! I am Neel Dutta (Shubhranil Dutta). Art and design has been a strong forte all my life
since middle school to high school. Ever since I started writing my own codes in HTML and
CSS, I became more intrigued and inclined towards the UI/UX aspect of a website/web-app. I
love creating and designing user interfaces and websites, till its pixel perfect.</p>
                <p className='body-text'>I live in Kolkata, India. I am a Computer Science post graduate student from West Bengal
University of Technology (AKA MAKAUT). I was introduced to programming when I was in
high school and that really propelled my interest and passion in designing websites and
interfaces. I mad my first responsive website during high school at age 16 using HTML and
CSS only. Since then, I have been learning different languages and tools to broadly expand
my expertise and knowledge in the world of programming and design. During this time, I also
developed a profound interest in graphic design as I am also an artist. This made me dig
more deeper into graphic designing tools such as the whole Adobe suite. Tools like
Photoshop and Illustrator has enabled me to give a different depth to my designs.</p>
                <p className='body-text'>My goal is to build something new and completely out of scratch, provided any platform I am
given, and to consistently design and build usable and elegant user interfaces and websites/
web-apps.</p>
                </Col>
              </Row>
              <br/>
              <br/>
              <Row>
                <Col md={5}>
                  <div className='heading'>
                    <p>02 The Tools</p>
                  </div>
                </Col>
                <Col md={19}>
                      <p className='body-text'>I use a number of tools and technologies that make design and development easier and
  more convenient. I mainly use Adobe XD for prototyping, visual design and wireframing.
  Apart from that I leverage tools like photoshop and illustrator to create custom design
  elements which I can add to my designs. For development, I use different tools specific to
  the development of the application or website. Listed below are the tools and technologies I
  use and I'm knowledgeable with.</p>
                    <div className='skillsets'>
                      <Row>
                        <Col md={8}>
                          <p className='skillset-heading'>Creative Design</p>
                        </Col>
                        <Col md={16}>
                          <p className='skillset-heading'>Languages and Tools</p>
                        </Col>                        
                      </Row>
                      <div className='skillset-list'>
                        <Row>
                          <Col md={8}>
                            <Space direction='vertical'>
                              <Text>Adobe XD</Text>
                              <Text>Figma</Text>
                              <Text>Photoshop</Text>
                              <Text>Lightroom</Text>
                              <Text>Premiere Pro</Text>
                            </Space>
                          </Col>
                          <Col md={16}>
                            <Row>
                              <Col md={6}>
                                <Space direction='vertical'>
                                  <Text>HTML5</Text>
                                  <Text>CSS3</Text>
                                  <Text>Less</Text>
                                  <Text>Typescript</Text>
                                  <Text>Javascript</Text>
                                </Space>
                              </Col>
                              <Col md={6}>
                                <Space direction='vertical'>
                                  <Text>ReactJs</Text>
                                  <Text>AntDesign</Text>
                                  <Text>MongoDB</Text>
                                  <Text>MySQL</Text>
                                  <Text>Python</Text>                                
                                </Space>
                              </Col>
                              <Col md={6}>
                                <Space direction='vertical'>
                                  <Text>Deck.gl</Text>
                                  <Text>Nebula.gl</Text>
                                  <Text>Google Maps</Text>
                                  <Text>GDAL</Text>
                                  <Text>Leaflet</Text>
                                </Space>
                              </Col>
                              <Col md={6}>
                                <Space direction='vertical'>
                                  <Text>Docker</Text>
                                  <Text>AWS EC2 & EFS</Text>
                                  <Text>Socket.io</Text>
                                  <Text>RTMP/HLS</Text>
                                  <Text>Nginx</Text>
                                </Space>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>                      
                    </div>
                    
                </Col>
              </Row>
            </div>
            {/* Backgroun parallax */}
            <div className="background-scroll-2" style={{transform: `translateY(${offsetY * 0.1}px)`}}>
              <img src={BackgroundPageTwo}/>
            </div>
            
            
                                      
        </div>
    )
}

export default PageTwo;