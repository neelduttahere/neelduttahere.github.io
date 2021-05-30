import { Typography} from 'antd';
import Fade from 'react-reveal/Fade';
import MyFace from '../static/profile-photo.jpg';
import MyFace2x from '../static/profile-photo-2x.jpg';
import TriangleBg from '../static/bg1.svg';
import PageTwoGraphic from '../static/pagetwographic.svg';
import CirclBg from '../static/bg2.svg';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const { Title } = Typography;
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
            <div className="page-2-title-card">
                <Title className="title-text">I am a passionate UI/UX designer and full stack developer with a really sharp attention to detail.</Title>
            </div>
            <div className="page-2-graphic">
                <img src={PageTwoGraphic} alt=""/>
            </div>
            
            
                                      
        </div>
    )
}

export default PageTwo;