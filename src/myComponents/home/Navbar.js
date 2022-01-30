import {Link} from 'react-router-dom';
import logo from "./images/s_icon.png";

export default function Navbar() {
    return (
        <nav>
            {/*<img src={require("./s_Logo.eps").default}/>*/}
            <img src={logo} className="logo" alt="Logo"/>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
            </ul>
        </nav>
    )
}