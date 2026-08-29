import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Hero = ({ scrolled }) => {
    return (
        <div className={`hero-logo ${scrolled ? "hero-logo-scrolled" : ""}`}>
            {scrolled ? (
                <Link to="/" className="hero-logo-link">
                    <img
                        src={logo}
                        alt="Logo cukierni - pyszne ciastko"
                        className="hero-logo-image"
                    />

                    <div className="hero-logo-text carattere-regular">
                        <span>Cukiernia</span>
                        <span>Wisienka</span>
                    </div>
                </Link>
            ) : (
                <>
                    <img
                        src={logo}
                        alt="Logo cukierni - pyszne ciastko"
                        className="hero-logo-image"
                    />

                    <div className="hero-logo-text carattere-regular">
                        <span>Cukiernia</span>
                        <span>Wisienka</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Hero;
