import logo from './myAvatar.png';
import './app.css';
import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="About">
            <header className="About-header">
                <Link to="/">
                    <img src={logo} className="About-logo" alt="logo" />
                    <p className="AboutClick">click on me</p>
                    
                </Link>
            </header>
        </div>
    );
}

export default About;