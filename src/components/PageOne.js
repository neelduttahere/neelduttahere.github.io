import { Typography} from 'antd';
import Fade from 'react-reveal/Fade';
import MyFace from '../static/profile-photo.jpg';
import MyFace2x from '../static/profile-photo-2x.jpg';
import TriangleBg from '../static/bg1.svg';
import CirclBg from '../static/bg2.svg';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const { Title } = Typography;
function PageOne() {
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
        <div className="page-one-wrapper">
            <br/>
            <>
                <Fade top>
                    <div className="title-card">
                        <Title className="title-text">Full Stack Developer & UI/UX Designer</Title>
                        <span className="subtitle-text">
                            Hello there! I am Neel. A passionate UI/UX designer and Full stack developer at India.
                        </span>
                    </div>
                </Fade>
                <Fade top>
                    <div className="profile-bubble">
                        {/* <img src={MyFace} alt=""/> */}
                        <LazyLoadImage
                            alt={MyFace2x}
                            effect="blur"
                            src={MyFace} />
                    </div>
                </Fade> 
            </>
            
            <div className="backgroundScroll" style={{transform: `translateY(${offsetY * 0.1}px)`}}>
                <Fade bottom>
                    <img src={TriangleBg} alt=""/>
                </Fade>                
            </div>
            <div className="background-circle" style={{transform: `translateY(${offsetY * 0.2}px)`}}>
                <Fade right>
                    <img src={CirclBg} alt=""/>
                </Fade>
            </div>                           
        </div>
    )
}

export default PageOne;