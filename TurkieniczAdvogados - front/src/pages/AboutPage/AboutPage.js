
import "./StyledAboutPage.css";
import AboutSection1 from "./AboutSections/AboutSection1/AboutSection1";
import AboutSection2 from "./AboutSections/AboutSection2/AboutSection2";

export default function AboutPage() {
 
    return (
<div className="aboutPage">
<div className="container-about-page margin-top">
            <strong className="container-text-about-page">Energia solar é economia garantida!</strong>
            </div>
    
    <AboutSection2/>
</div>
    )
}