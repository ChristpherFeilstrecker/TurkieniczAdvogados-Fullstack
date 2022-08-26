import { SubTitleTagB } from "../../../../StyledGlobal";
import "./StyledIntroSection2.css";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";
import frente from "../../../../images/frente.jpg"
import logo from "../../../../images/logo.png"
import { useNavigate } from "react-router-dom";

export default function IntroSection2() {
  const data = useContext(GlobalContext);
  const galerias = data.galerias
  const navigate = useNavigate();

  const navigateTo=()=>{
    navigate(`/aggostini/sobre`)
    window.scrollTo(0, 0)
}

  return (
    <div id="intro-section-2">
      <div className="img-container-intro">
        <img className="img-fachada" src={frente} alt="fachada" />

      </div>

      <div data-aos="fade-up" className="text-container">
        <div>
          <div className="title-text" >CONHEÇA A</div>
          <img className="logo-footer" src={logo} alt="aggostini" />
        </div>

        <div className="text">Com mais de 30 anos de experiência no mercado, a Comercial e Instaladora Hidráulica Aggostini tem como diferencial o conhecimento que é decisivo, tanto na compra dos produtos, quanto na execução e manutenção de seu projeto.</div>
        <div onClick={() => navigateTo()} className="btn-rigth-container">SAIBA MAIS </div>
      </div>


    </div>
  )
}