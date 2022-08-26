import "./StyledContactSection2.css";
import { useNavigate } from "react-router-dom";
import arrow from "../../../../images/arrow.png";
import useForm from "../../../../components/hooks/useForm";
import axios from "axios";

import { SubTitleTagB } from "../../../../StyledGlobal";

import iconFacebookBlack from "../../../../images/icon_facebook_black.png"
import iconFacebookBlue from "../../../../images/icon_facebook_blue.png"

import iconTwiterBlack from "../../../../images/icon_twiter_black.png"
import iconTwiterBlue from "../../../../images/icon_twiter_blue.png"

import iconInstaBlack from "../../../../images/icon_instagram_black.png"
import iconInstaBlue from "../../../../images/icon_instagram_blue.png"

import iconGoogleBlack from "../../../../images/icon_google_black.png"
import iconGoogleBlue from "../../../../images/icon_google_blue.png"

import iconLetterBlue from "../../../../images/icon-letter-black.png"
import iconPhoneBlue from "../../../../images/icon-phone.png"
import iconPointerBlue from "../../../../images/icon-pointer-black.png"
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";

export default function ContactSection2() {
    let navigate = useNavigate();

    const data = useContext(GlobalContext);
    const parametros = data.parametros

    let dados = {
        "nome": "nome",
        "email": "email",
        "servico": "servico",
        "obs": "obs",
        "tipo": 'contato'
    };


    const sendEmail = () => {
        axios
            .post("http://aggostini.com.br/aggostini/sendmail/", dados)
            .then((response) => {

                console.log("email enviado com sucesso")
            })
            .catch((error) => {
                console.log("erro", error)
            });
    }



    const [form, onChange, clear] = useForm({ name: "", email: "", celPhone: "", phone: "", message: "" })

    const onChangeInputs = (ev) => {
        ev.preventDefault()
        // registDataMessage(form, clear)
        console.log("form", form)
        clear()
    }

    return (
        <div id="contact-section-2">
            <div className="header-container-contact-section-2">
                <div className="header-text-contact-section-2">
                    <div onClick={() => navigate(`/`)} className="nav-word-header-contact-section-2">INÍCIO</div>
                    <img className="arrow-section-2" src={arrow} alt="arrow" /> CONTATO</div>
            </div>

            <div className="body-container-contact-section-2">
                <div className="left-box-contact-section-2">
                    <form action="https://formspree.io/f/mvoljgve" method="POST" className="form-container-box-contact-section-2" >
                        <div className="title-contact-section-2">
                            <SubTitleTagB className="title-word-contact-section-2">Contato</SubTitleTagB>
                        </div>
                        <div className="form-container-contact-section-2">
                            <div className="form-personal-data-container-contact-section-2">
                                <input

                                    placeholder={"Seu nome*"}
                                    type='name'
                                    name="name"
                                    value={form.name}
                                    onChange={onChange}
                                    required
                                />

                                <input

                                    placeholder={"Seu e-mail*"}
                                    type='email'
                                    name="email"
                                    value={form.email}
                                    onChange={onChange}
                                    required
                                />

                                <input

                                    placeholder={"Telefone/Celular*"}
                                    type='number'
                                    name="phone"
                                    value={form.phone}
                                    onChange={onChange}
                                />

                                <input
                                    className="heigth-message"
                                    placeholder={"Mensagem*"}
                                    type='text'
                                    name="message"
                                    value={form.message}
                                    onChange={onChange}
                                    required
                                />

                                <div className="btns-send-container-contact-section-2">
                                    <input type="hidden" name="_captcha" value="false" />
                                    <button type="submit" className="btn-send-contact-section-2">ENVIAR</button>
                                </div>
                            </div>

                            <div className="form-btn-container-contact-section-2">

                            </div>
                        </div>
                    </form>
                </div>
                <div className="rigth-box-contact-section-2">

                    <div className="rigth-first-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">MIDIAS</div>

                        <div className="rigth-box-itens-contact-section-2">

                            <a href="https://www.facebook.com/aggostini.hidraulica" target="_blank">
                                <div className="rigth-box-icon-contact-section-2">
                                    <img className="rigth-icon-contact-section-2" src={iconFacebookBlack} alt="facebook-icon-black" />
                                    <img className="rigth-sub-icon-contact-section-2" src={iconFacebookBlue} alt="facebook-icon-blue" />
                                </div>
                            </a>


                            <a href="https://www.instagram.com/aggostini/" target="_blank">
                                <div className="rigth-box-icon-contact-section-2">
                                    <img className="rigth-icon-contact-section-2" src={iconInstaBlack} alt="insta-icon" />
                                    <img className="rigth-sub-icon-contact-section-2" src={iconInstaBlue} alt="insta-icon-blue" />
                                </div>
                            </a>


                            <a href="https://www.google.com/maps/place/Comercial+e+Instaladora+Hidr%C3%A1ulica+Aggostini/@-29.7702434,-51.1318274,15z/data=!4m5!3m4!1s0x0:0xf5ad04197d8ebfe3!8m2!3d-29.7702439!4d-51.1318263" target="_blank">
                                <div className="rigth-box-icon-contact-section-2">
                                    <img className="rigth-icon-contact-section-2" src={iconGoogleBlack} alt="google-icon" />
                                    <img className="rigth-sub-icon-contact-section-2" src={iconGoogleBlue} alt="google-icon-blue" />
                                </div>
                            </a>


                        </div>
                    </div>

                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">TELEFONE</div>
                        <div className="rigth-box-itens-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconPhoneBlue} alt="letter-icon" />
                            <div className="rigth-box-text-contact-section-2">{parametros && parametros[0].celular} | {parametros && parametros[0].telefone}</div>
                        </div>
                    </div>

                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">E-MAIL</div>
                        <div className="rigth-box-itens-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconLetterBlue} alt="letter-icon" />
                            <div className="rigth-box-text-contact-section-2">{parametros && parametros[0].email}</div>
                        </div>
                    </div>

                    <div className="rigth-last-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">ENDEREÇO</div>
                        <div className="rigth-box-edress-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconPointerBlue} alt="letter-icon" />
                            <div className="rigth-box-text-edress-contact-section-2">{parametros && parametros[0].endereco}</div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="visita-container">
                <strong className="visita-text">Venha nos visitar!</strong>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1456.119677167352!2d-51.13266603468452!3d-29.770245220157214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951969a98343d553%3A0x2bd763cee3937a88!2sR.%20Bento%20Alves%2C%201525%20-%20Rio%20Branco%2C%20S%C3%A3o%20Leopoldo%20-%20RS%2C%2093032-060!5e0!3m2!1spt-BR!2sbr!4v1656527397864!5m2!1spt-BR!2sbr" width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}