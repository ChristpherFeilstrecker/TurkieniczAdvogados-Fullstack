import "./StyledFooter.css";
import iconPhone from "../../images/icon-phone.png"
import iconEmail from "../../images/icon-letter.png"
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
                        <div className="footer-conteiner-title-top">
                            <div className="footer-title-top">Associações Parceiras</div>
                            <div className="footer-title-top">Redes Sociais</div>
                        </div>

                        <div className="footer-conteiner-icons-top">
                            <div className="footer-conteiner-icons">
                                <img className="icon-footer" src="https://seeklogo.com/images/A/aca-international-logo-332DD67B99-seeklogo.com.png" alt="logo" />
                                <img className="icon-footer" src="https://seeklogo.com/images/A/aca-international-logo-332DD67B99-seeklogo.com.png" alt="logo" />
                                <img className="icon-footer" src="https://seeklogo.com/images/A/aca-international-logo-332DD67B99-seeklogo.com.png" alt="logo" />
                                <img className="icon-footer" src="https://seeklogo.com/images/A/aca-international-logo-332DD67B99-seeklogo.com.png" alt="logo" />
                                <img className="icon-footer" src="https://seeklogo.com/images/A/aca-international-logo-332DD67B99-seeklogo.com.png" alt="logo" />
                                <img className="icon-footer" src="https://seeklogo.com/images/A/aca-international-logo-332DD67B99-seeklogo.com.png" alt="logo" />
                            </div>
                            <div>
                                <img className="icon-footer" src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt="logo" />
                                <img className="icon-footer" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="logo" />
                                <img className="icon-footer" src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/%C3%8Dcone-logo-Facebook-PNG.png" alt="logo" />

                            </div>
                        </div>



                    </div>

                </div>
                <div className="footer-collumn-bottom">
                    <div className="footer-collumn-left-bottom">
                        <div> Telefone: (51) 3170-0333</div>
                        <div> Email: email@email.com</div>
                           
                    </div>
                    <div className="footer-collumn-rigth-bottom">
                        <div>Rua Vereador Adão Rodrigues de Oliveira, 206</div>
                        <div>Bairro Ideal - Novo Hamburgo</div>
                        <div>Rio Grande do Sul - Brasil - CEP.93.334-290</div>

                    </div>
                </div>
            </div>

            <div className="footer-container-rigth">
                <img className="logo" src={logo} alt="logo" />
            </div>

        </div>
    )
}