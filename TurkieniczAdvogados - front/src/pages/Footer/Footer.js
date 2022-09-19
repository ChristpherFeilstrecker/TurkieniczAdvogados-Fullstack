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
import { FaceRounded } from "@material-ui/icons";

export default function Footer() {
    const data = useContext(GlobalContext);
    const informacoes = data.informacoes
  

let telefone= informacoes && informacoes[0].telefone.split("")
let tel = `(${telefone[0]}${telefone[1]}) ${telefone[2]}`+`${telefone[3]}`+`${telefone[4]}`+`${telefone[5]}-`+`${telefone[6]}`+`${telefone[7]}`+`${telefone[8]}`+`${telefone[9]}`

let celular= informacoes && informacoes[0].whats.split("")
let cel = `(${celular[0]}${celular[1]}) ${celular[2]}`+`${celular[3]}`+`${celular[4]}`+`${celular[5]}`+`${celular[6]}-`+`${celular[7]}`+`${celular[8]}`+`${celular[9]}`+`${celular[10]}`

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

                                <a href={informacoes && informacoes[0].twiter}
                                    target="_blank" rel="noreferrer"><img className="icon-midia-footer" src={twiter} alt="logo" />
                                </a>

                                <a href={informacoes && informacoes[0].instagram}
                                    target="_blank" rel="noreferrer"><img className="icon-midia-footer" src={insta} alt="logo" />
                                </a>

                                <a href={informacoes && informacoes[0].facebook}
                                    target="_blank" rel="noreferrer"><img className="icon-midia-footer" src={face} alt="logo" />
                                </a>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="footer-collumn-bottom">
                    <div className="footer-collumn-left-bottom">
                        <div className="footer-title"> {informacoes && informacoes[0].cidade}</div>
                        <div className="footer-text"> {informacoes && informacoes[0].endereco} </div>
                        <div className="footer-text"> {informacoes && informacoes[0].bairro} - {informacoes && informacoes[0].cidade}</div>
                        <div className="footer-text"> {informacoes && informacoes[0].estadoPaisCep}</div>
                    </div>

                    <div className="footer-collumn-rigth-bottom">
                        <div className="footer-title">Telefone: {tel}</div>
                        <div className="footer-text">Celular/Whats: {cel} </div>
                    </div>
                </div>
            </div>

        </div>
    )
}