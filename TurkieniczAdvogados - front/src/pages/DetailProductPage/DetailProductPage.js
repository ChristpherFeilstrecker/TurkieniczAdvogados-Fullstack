import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";
import "./StyledDetailProductPage.css";
import addCar from "../../images/add-car.png"
import iconFacebookBlack from "../../images/icon_facebook_black.png"
import iconFacebookBlue from "../../images/icon_facebook_blue.png"

import iconTwiterBlack from "../../images/icon_twiter_black.png"
import iconTwiterBlue from "../../images/icon_twiter_blue.png"

import iconInstaBlack from "../../images/icon_instagram_black.png"
import iconInstaBlue from "../../images/icon_instagram_blue.png"

import iconGoogleBlack from "../../images/icon_google_black.png"
import iconGoogleBlue from "../../images/icon_google_blue.png"

import iconLetterBlue from "../../images/icon-letter-black.png"
import iconPhoneBlue from "../../images/icon-phone.png"
import iconPointerBlue from "../../images/icon-pointer-black.png"

import branca from "../../images/fotos_iniciais/detalhes/camisetabranca.jpg"
import azul from "../../images/fotos_iniciais/detalhes/camisetaazul.jpg"
import vermelha from "../../images/fotos_iniciais/detalhes/camisetavermelha.jpg"

import arrowLeft from "../../images/arrow-to-left.png"
import arrowRigth from "../../images/arrow-to-rigth.png"


export default function DetailProductPage(props) {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    const cart = data.cart;
    const setCart = data.setCart;
    const params = window.location.search.substring(1).split('?');
    const products = data.allProducts.products
    const produtos = data.produtos
    const parametros = data.parametros
    const newIndex = produtos && produtos.findIndex((i) => Number(params) === Number(i.fields.codigo_produto))

    const index = products.findIndex((i) => Number(params) === Number(i.id))
    let [qtd, setQtd] = useState("1")
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")
    const [imgIndex, setImgIndex] = useState(0)


    const images = [branca, azul, vermelha]
    const imgs = [{ id: 0, img: branca }, { id: 1, img: azul }, { id: 2, img: vermelha }]

    const switchImgToLeft = (() => {
        if (imgIndex + 1 === images.length) {
            setImgIndex(0)

        } else {
            setImgIndex(imgIndex + 1)
        }

    })

    const switchImgToRigth = (() => {
        if (imgIndex === 0) {
            setImgIndex(images.length - 1)

        } else {
            setImgIndex(imgIndex - 1)
        }

    })

    const getProduct = (() => {
        const product = products[index]
        const produto = produtos && produtos[newIndex]

        const addProductToCart = ((product) => {

            const index = cart.findIndex((i) => product.id === i.id)

            if (index === -1) {
                const newProduct = {
                    id: product.id,
                    nome: product.nome,
                    descricao: product.descricao,
                    imagem: product.imagem,
                    referencia: product.referencia,
                    quantidade: qtd
                }
                const newCart = [...cart, newProduct]
                setCart(newCart)
                setMessage("Produto adicionado no carrinho")
                setAlert(true)
                showAlert()
            } else {
                setMessage("Produto ja consta no carrinho")
                setAlert(true)
                showAlert()
            }

        })

        const addCount = (() => {
            const newQtd = Number(qtd) + 1
            setQtd(newQtd)
        })

        const subCount = (() => {
            if (qtd === 0) {
                return qtd
            } else {
                const newQtd = Number(qtd) - 1
                setQtd(newQtd)
            }

        })

        const showAlert = () => {
            setTimeout(() => {
                setAlert(false)
            }, 4000)
        }



        return <div>
            <div className="title-detail-products-page">Detalhes do produto</div>
            <div className="container-1-detail-products-page">
                <div className="container-select-img">
                    <img className="image-product-sector-1" src={`https://aggostini.com.br/media/${produtos && produto.fields.image}`} alt={produtos && produto.fields.nome} />
                </div>

                <div className="box-1-detail-products-page">
                    <strong>{produtos && produto.fields.nome}</strong>
                    <div>{produtos && produto.fields.descricao1}</div>
                    <div className="sub-description">{produtos && produto.fields.descricao2}</div>

                    <div className="container-btn-product-detail-page">


                    </div>
                </div>

            </div>

            <div className="align-container">
                <div className="btns-rigth-container">
                    <div onClick={() => navigate(`/aggostini/produtos`)} className="btn-rigth-container-more">VOLTAR</div>
                    <div className="btn-rigth-container">
                        <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros[0].whats)}&text=Olá! Gostária de solicitar um orçamento de ${produtos && produto.fields.nome}`}
                            target="_blank">ORÇAMENTO</a>
                    </div>
                </div>
            </div>


        </div>
    })


    return (
        <div id="detailProductpage">

            <div className="alert-container">
                <div className={alert ? "alert-add-product-active" : "alert-add-product"}>{message} </div>
            </div>
            <div className="body-container-detail-page">
                <div className="container-products-detail-products-page">
                    {getProduct()}
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
        </div>
    )
}