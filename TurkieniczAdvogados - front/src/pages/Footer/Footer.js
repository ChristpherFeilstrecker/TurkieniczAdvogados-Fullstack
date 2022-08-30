import "./StyledFooter.css";
import aca from "../../images/aca-icon.png"
import csa from "../../images/csa-icon.png"
import cla from "../../images/cla-icon.png"
import hkc from "../../images/hkc-icon.png"
import iacc from "../../images/iacc-icon.png"
import narca from "../../images/narca-icon.png"
import twiter from "../../images/icon_twiter_cinza.png"
import insta from "../../images/icon_insta_cinza.png"
import face from "../../images/icon_face_cinza.png"

import { useContext } from "react";
import GlobalContext from "../../components/global/globalContext";
import logo from "../../images/pclogo.jpg"

export default function Footer() {
    const data = useContext(GlobalContext);
    const parametros = data.parametros

    return (
        <div id="footer">

            <div className="footer-container-left">
                <div className="footer-collumn-top">
                    <div className="footer-conteiner-top">

                        <div className="footer-conteiner-icons-top">
                            <div className="left-conteiner-icons">
                                <div className="logo-container">
                                    <img className="logo-footer" src={logo} alt="logo" />
                                </div>

                                <div className="footer-conteiner-icons">

                                    <img className="icon-footer" src={aca} alt="logo" />
                                    <img className="icon-footer" src={csa} alt="logo" />
                                    <img className="icon-footer" src={cla} alt="logo" />
                                    <img className="icon-footer" src={hkc} alt="logo" />
                                    <img className="icon-footer" src={iacc} alt="logo" />
                                    <img className="icon-footer" src={narca} alt="logo" />
                                    
                                </div>
                            </div>
                            <div className="icon-container-midia-footer">
                                <img className="icon-midia-footer" src={twiter} alt="logo" />
                                <img className="icon-midia-footer" src={insta} alt="logo" />
                                <img className="icon-midia-footer" src={face} alt="logo" />
                               
                            </div>
                        </div>



                    </div>

                </div>
                <div className="footer-collumn-bottom">
                    <div className="footer-collumn-left-bottom">
                        <div className="footer-title"> NOVO HAMBURGO</div>
                        <div className="footer-text"> Rua Vereador Adão Rodrigues de Oliveira, 206, </div>
                        <div className="footer-text"> Bairro Ideal - Novo Hamburgo</div>
                        <div className="footer-text"> Rio Grande do Sul - Brasil - CEP.93.334-290</div>
                    </div>
                </div>
            </div>



        </div>
    )
}