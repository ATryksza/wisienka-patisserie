import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Hero = ({ scrolled }) => {
    const logoContent = (
        <>
            <img
                src={logo}
                alt="Logo cukierni - pyszne ciastko"
                className="hero-logo-image"
                width="870"
                height="870"
            />

            <div className="hero-logo-text carattere-regular">
                <span>Cukiernia</span>
                <span>Wisienka</span>
            </div>
        </>
    );

    return (
        <div className={`hero-logo ${scrolled ? "hero-logo-scrolled" : ""}`}>
            {scrolled ? (
                <Link to="/" className="hero-logo-link">
                    {logoContent}
                </Link>
            ) : (
                logoContent
            )}
        </div>
    );
};

export default Hero;