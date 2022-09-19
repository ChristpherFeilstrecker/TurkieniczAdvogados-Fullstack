import useForm from "../../../../components/hooks/useForm";
import "./StyledIntroSection4.css";
import { useNavigate } from "react-router-dom";

export default function IntroSection4() {
    let navigate = useNavigate();

    const navigateVideosPage = (() => {
        navigate("/equipe")
        window.scrollTo(0, 0);
    })

    return (
        <div id="intro-section-4">
            <div className="container-section4">
                
                <div className="box-container-section4">
                    <div className="text-container-section4">
                        <h3 className="title-text-section4" data-aos="fade-up">PARA VOCÊ</h3>
                        <h4 className="title-text-section4" data-aos="fade-up">Descrição...</h4>
                        <div onClick={()=>navigateVideosPage()} className="btn-rigth-container-more margin-top" data-aos="fade-up">VER MAIS</div>
                    </div>
                </div>

                <div className="box-container-section4">
                    <div className="text-container-section4">
                        <h3 className="title-text-section4" data-aos="fade-up">PARA SUA EMPRESA</h3>
                        <h4 className="title-text-section4" data-aos="fade-up">Descrição...</h4>
                        <div onClick={()=>navigateVideosPage()} className="btn-rigth-container-more margin-top" data-aos="fade-up">VER MAIS</div>
                    </div>
                </div>

            </div>
        </div>
    )
}