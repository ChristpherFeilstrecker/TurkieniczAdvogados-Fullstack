import "./StyledFooter.css";
import iconPhone from "../../images/icon-phone.png"
import iconEmail from "../../images/icon-letter-black.png"
import logo from "../../images/logo.png"
import pointer from "../../images/icon-pointer-black.png"
import { useContext } from "react";
import GlobalContext from "../../components/global/globalContext";

export default function Footer() {
    const data = useContext(GlobalContext);
    const parametros = data.parametros

    return (
        <div id="footer">

            <div className="footer-container1">
<div className="footer-colum1-2-container">
    <div className="footer-colum1">
                    <div className="footer-container-phone">
                        <img className="footer-icon" src={iconPhone} alt="icon-phone" />
                        <div className="footer-detail-text">{parametros && parametros[0].celular} | {parametros && parametros[0].telefone}</div>
                    </div>
                    <div className="footer-container-phone">
                        <img className="footer-icon" src={iconEmail} alt="icon-phone" />
                        <div className="footer-detail-text">{parametros && parametros[0].email}</div>
                    </div>
                    


                </div>
                <div className="footer-colum2 border-left">
<div className="footer-container-phone ">
                        <img className="footer-icon" src={pointer} alt="icon-phone" />
                        <div className="footer-detail-text">{parametros && parametros[0].endereco}</div>
                    </div>
                </div>
</div>
                

                <div className="footer-colum3">
                <img className="logo-footer" src={logo} alt="aggostini" />
                    <div className="footer-logo-text">Mão de obra para instalação e
assistência técnica autorizada própria.</div>

                </div>
            </div>

            <div className="footer-container2">
                <div className="footer-detail-container2">
                
                         <div className="footer-detail-text">COPYRIGHT AGGOSTINI 2022. TODOS OS DIREITOS RESERVADOS</div>
       
                </div>
           <a href="https://www.linkedin.com/in/christopher-feilstrecker/" target="_blank" className="tag-a">DEVELOPED BY CFS</a>

            </div>
        </div>
    )
}