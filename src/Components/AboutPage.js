import personalPic from './media/circle-cropped.png';
import gitHubLogo from "./media/github.png";
import { Link } from 'react-router-dom';

const AboutPage =()=>{
    return (
        <main className="ali">
            <h1>About US</h1>
            <p>
                avocation is a personal space where you can save, practice and 
                share your hobbies with others fearlessly and with complete freedome. <br/>
                Also, browsing the latest shares to feel inspired 
                everyday !. <br/>
                Here, Looks and appearances don't make 
                an impact, only talents do.
            </p>
            <br />
            <p>this website was built and is maintaned by <br />
                <a 
                href='https://www.linkedin.com/in/ali-khaled-130013/' 
                target="_blank"
                rel="noreferrer"
                >Ali Khaled Said</a>
            </p> 
            <img src={personalPic} alt="author" />
                <br />
            <p>
                other Projects:  
                <a href='https://github.com/ALI-KHALED-13' target="_blank"  rel="noreferrer">
                    <img src={gitHubLogo} alt='github' 
                         style={{width: '8%', verticalAlign: 'middle', margin:'1%'}} 
                    /> 
                </a>
            </p>
            <br />
            <Link to="/contact">Get In Touch</Link>
        </main>
    )
}
export default AboutPage;