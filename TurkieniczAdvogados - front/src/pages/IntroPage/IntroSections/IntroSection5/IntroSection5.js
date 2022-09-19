import useForm from "../../../../components/hooks/useForm";
import "./StyledIntroSection5.css";
import { useNavigate } from "react-router-dom";
import back from "../../../../images/consulta.jpg"

export default function IntroSection4() {
    let navigate = useNavigate();

    const navigateVideosPage = (() => {
        navigate("/equipe")
        window.scrollTo(0, 0);
    })

    return (
        <div id="intro-section-5">
            
            <img className="back-img-section5" src={back}></img>
            <div className="container-text-introSection-5">
                <div className="text-introSection-5">CONSULTE SEU PROCESSO</div>
              <div className="btn-introSection-5">
              <a className="tag-a" href="https://integra.adv.br/login-integra.asp" target="_blank" rel="noreferrer">AQUI</a> 
                </div>
            </div>
              
        </div>
    )
}