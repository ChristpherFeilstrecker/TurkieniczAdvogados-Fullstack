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

import iconLetterBlue from "../../images/icon-letter-blue.png"
import iconPhoneBlue from "../../images/icon-phone-blue.png"
import iconPointerBlue from "../../images/icon-pointer-blue.png"

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
    const newIndex = produtos && produtos.findIndex((i) => Number(params) === Number(i.fields.codigo_produto))
    
    const index = products.findIndex((i) => Number(params) === Number(i.id))
    let [qtd, setQtd] = useState("1")
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")
    const [imgIndex, setImgIndex] = useState(0)

    const images=[branca,azul,vermelha]
    const imgs=[{id:0, img:branca},{id:1, img:azul},{id:2, img:vermelha}]

    const switchImgToLeft =(()=>{
        if(imgIndex+1 === images.length){
            setImgIndex(0)

        }else{
         setImgIndex(imgIndex+1)   
        }
        
    })

    const switchImgToRigth =(()=>{
        if(imgIndex === 0){
            setImgIndex(images.length-1) 

        }else{
         setImgIndex(imgIndex-1)   
        }

    })

    const getProduct = (() => {
        const product = products[index]
        const produto=produtos && produtos[newIndex]

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

        const listImgs = imgs
        .map((img) => {
            return <div onClick={() => setImgIndex(img.id)} className="img-container">
                <img className="mini-img" src={img.img} alt="produto" />
            </div>    
        })

        return <div>
            <div className="title-detail-products-page">Detalhes do produto</div>
            <div className="container-1-detail-products-page">
                <div className="container-select-img">
                <img onClick={() => switchImgToRigth()} className="arrow" src={arrowLeft} alt="car-icon" /> 
                   <img className="image-product-sector-1" src={imgs[imgIndex].img} alt={produtos &&produto.fields.nome} />
                   <img onClick={() => switchImgToLeft()} className="arrow" src={arrowRigth} alt="car-icon" /> 
                </div>
                
                <div className="box-1-detail-products-page">
                    <div>{produtos && produto.fields.nome}</div>
                    <div>{produtos && produto.fields.descricao1}</div>
                    <div>{produtos && produto.fields.descricao2}</div>
                </div>
            </div>
            <div className="container-btn-product-detail-page">
                <div className="mini-img-container">
                    {listImgs}  
                </div>
               <div className="btns-container-box">
                  <div className="modal-quantiti-product">
                    QUANTIDADE:
                    <div className="modal-counter">
                        <div onClick={() => subCount()} className="modal-counter-add">-</div>
                        <div className="modal-counter-num">{qtd}</div>
                        <div onClick={() => addCount()} className="modal-counter-add">+</div></div>
                </div>
                <div onClick={() => addProductToCart(product)} className="btn-product-sector-1">
                    <div className="add-to-car-btn-text">Adicionar </div>
                    <img className="icon-add-car-btn-sector-1" src={addCar} alt="car-icon" />
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
                            <div className="rigth-box-icon-contact-section-2">
                                <img className="rigth-icon-contact-section-2" src={iconFacebookBlack} alt="facebook-icon" />
                                <img className="rigth-sub-icon-contact-section-2" src={iconFacebookBlue} alt="facebook-icon" />
                            </div>
                            <div className="rigth-box-icon-contact-section-2">
                                <img className="rigth-icon-contact-section-2" src={iconTwiterBlack} alt="twiter-icon" />
                                <img className="rigth-sub-icon-contact-section-2" src={iconTwiterBlue} alt="twiter-icon" />
                            </div>
                            <div className="rigth-box-icon-contact-section-2">
                                <img className="rigth-icon-contact-section-2" src={iconInstaBlack} alt="insta-icon" />
                                <img className="rigth-sub-icon-contact-section-2" src={iconInstaBlue} alt="insta-icon" />
                            </div>
                            <div className="rigth-box-icon-contact-section-2">
                                <img className="rigth-icon-contact-section-2" src={iconGoogleBlack} alt="google-icon" />
                                <img className="rigth-sub-icon-contact-section-2" src={iconGoogleBlue} alt="google-icon" />
                            </div>

                        </div>
                    </div>
                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">TELEFONE</div>
                        <div className="rigth-box-itens-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconPhoneBlue} alt="letter-icon" />
                            <div className="rigth-box-text-contact-section-2">51 99999-9999 | 9999-9999</div>
                        </div>
                    </div>
                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">E-MAIL</div>
                        <div className="rigth-box-itens-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconLetterBlue} alt="letter-icon" />
                            <div className="rigth-box-text-contact-section-2">comercial@comercial.com.br</div>
                        </div>
                    </div>
                    <div className="rigth-last-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">ENDEREÇO</div>
                        <div className="rigth-box-edress-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconPointerBlue} alt="letter-icon" />
                            <div className="rigth-box-text-edress-contact-section-2">Rua Avenida, Número, Cidade, RS, CEP 00000-000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}