import { Route, Routes } from "react-router-dom";
import "./StyledAboutSection2.css";
import SubSection1About2 from "./SubSectionAbout2/SubSection1About2";
import { useNavigate } from "react-router-dom";
import SubSection2About2 from "./SubSectionAbout2/SubSection2About2";
import SubSection3About2 from "./SubSectionAbout2/SubSection3About2";
import arrow from "../../../../images/arrow.png"



export default function AboutSection2() {
    let navigate = useNavigate();

    const navigateTo=()=>{
        navigate(`/aggostini/contato`)
        window.scrollTo(0, 0)
        
    }

    return (
        <div id="about-section-2">
           
            <div className="body-container-about-section-2">

                <Routes id="routes" className="routes-container-about-section-2">
                    <Route exact path={""} element={<SubSection1About2 />} />
                    <Route exact path={"2"} element={<SubSection2About2 />} />
                    <Route exact path={"3"} element={<SubSection3About2 />} />
                </Routes>


                <div className="rigth-container-about-section-2">
                    <div className="title-rigth-container-about-section-2">
                        <div data-aos="fade-left" className="title-rigth-about-section-2">Mais de três décadas de experiência</div>
                    </div>
                    <ul data-aos="fade" className="nav-container-rigth-about-section-2">
                        <li onClick={() => navigate(``)} className="nav-button-container-about-section-2" href="">
                            <div className="nav-button-about-section-2">SOBRE NÓS</div>
                        </li>
                        <li onClick={() => navigate(`2`)} className="nav-button-container-about-section-2">
                            <div className="nav-button-about-section-2">PRODUTOS E SERVIÇOS</div>
                        </li>
                        <li onClick={() => navigate(`3`)} className="nav-button-container-about-section-2">
                            <div className="nav-button-about-section-2">NOSSA HISTÓRIA</div>
                        </li>
                    </ul>
                    <div data-aos="fade" className="button-container-rigth-about-section-2">
                        <div onClick={() => navigateTo()} className="button-rigth-about-section-2">CONTATO</div>
                    </div>
                </div>
            </div>
        </div>
    )
}