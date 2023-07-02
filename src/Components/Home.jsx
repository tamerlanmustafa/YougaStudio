import { Link } from "react-router-dom";
import API from "./Api";
import classesIntro from "../Media/classesIntro.jpg"
import classesIntro2 from "../Media/classesIntro2.jpg"
import classesIntro3 from "../Media/classesIntro3.jpg"

const Home = () => {
    return ( 
    
    <>
        <div className="hero flex flex-fd-c flex-jc-sa flex-ai-c default-pad">
            <h1>Your <span className="highlight">Space.</span> <br />Your <span className="highlight">Spirit.</span> <br />Your <span className="highlight">Body.</span></h1>
            <div className="join-classes  flex flex-fd-c flex-jc-sa flex-ai-c ">
                <p>Say hello to yoga and fitness classes that will increase your strength, flexibility, and stability, plus improve your mental clarity and calmness.</p>
                <Link to="/classes" className="button">Join classes</Link>
            </div>
            </div>

        {/* Classes Intro     */}
        <div className="classes-intro flex flex-fd-c flex-jc-sa flex-ai-c default-pad">
            <h2>About us</h2>
                <p className="default-pad">Discover the transformative power of yoga and experience a journey towards improved well-being. Our classes are designed to cater to all levels,
                    whether you're a beginner or an advanced practitioner. Join our skilled instructors in a serene and welcoming environment as they guide you through various yoga styles,
                    including <span className="highlight2">Hatha, Vinyasa, </span>  and <span className="highlight2">Restorative</span> yoga. Enhance your flexibility, build strength, and find inner peace through mindful movement and breath.
                    Experience the numerous benefits of yoga, such as stress reduction, increased mindfulness, and a rejuvenated mind-body connection. Embark on
                    this holistic practice that nurtures both your physical and mental health. Reserve your spot today and embark on a path to a healthier and more balanced life through yoga.</p>
            <Link to="/about" className="button">Learn more</Link>
        </div>

        {/* Second Hero */}
        <div className="quotes  flex flex-fd-c flex-jc-sa flex-ai-c default-pad">
            <h2>Your daily <span className="highlight">quote </span>to get started:</h2>
          <API />
        </div>
        <div className="newsletter flex flex-fd-c flex-jc-fe flex-ai-c default-pad">
            <p>Subscribe to receive the latest news, updates and blogs on<span className="highlight"> Youga</span></p>
            <input type="text" placeholder=" Your email" />  
            <button className="button">Subscribe</button> 
        </div>
        {/* <footer>
                
        </footer> */}
    </>
     );
}
 
export default Home;