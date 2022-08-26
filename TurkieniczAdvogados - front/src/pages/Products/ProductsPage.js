import { useNavigate } from "react-router-dom";
import "./StyledProductsPage.css";
import CardProducts from "./CardProducts";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../components/global/globalContext";
import addCar from "../../images/add-car.png"
import caneca from "../../images/fotos/Canecas e Squeezes/Caneca Capuccino_CC10017-ok.jpg"

import iconFacebookBlack from "../../images/icon_facebook_black.png"
import iconFacebookBlue from "../../images/icon_facebook_blue.png"

import iconWhatsBlack from "../../images/icon-whatss-black.png"
import iconWhatsBlue from "../../images/icon-whatss-blue.png"

import iconTwiterBlack from "../../images/icon_twiter_black.png"
import iconTwiterBlue from "../../images/icon_twiter_blue.png"

import iconLetterBlue from "../../images/icon-letter-blue.png"
import iconLetterBlack from "../../images/icon-letter-black.png"


export default function ProductsPage(props) {
    const data = useContext(GlobalContext);
    const products = data.allProducts.products;
    const galerias = data.galerias;
    const cart = data.cart;
    const setCart = data.setCart;
    const produtos = data.produtos
    const search = data.search
    const setSearch = data.setSearch
    const title = data.title
    const setTitle = data.setTitle

    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")
    let [qtd, setQtd] = useState("1")
    const navigate = useNavigate();

    const showModal = () => {
        let element = document.getElementById("modal");
        element.classList.add("show-modal");
    }

    const hideModal = () => {
        let element = document.getElementById("modal");
        element.classList.remove("show-modal");
    }

    const showDetailProduct = (code) => {
        props.setProductID(code)
        showModal()
    }
    const setSearchFunction=(galeri)=>{
        console.log("id",galeri)
        setSearch(`${galeri.id}`)
        setTitle(`${galeri.nome}`)
    }

    const listGaleri = galerias && galerias
    .map((galeri) => {
  
        return <div key={galeri.id} onClick={() => setSearchFunction(galeri)} className="category-sector-1">{galeri.nome}</div>
    })

    const listProducts = produtos && produtos
        .filter((product) => {

            if (search === "TODOS PRODUTOS") {
                return (product)
            } else { return (product.fields.categoria.includes(search)); }

        })
        .map((product) => {

            return <CardProducts key={product.fields.codigo_produto} product={product.fields} showDetailProduct={showDetailProduct} />
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

    const listProductsDetail = produtos && produtos
        .filter((product) => {
            return (product.fields.codigo_produto === props.productID)
        })
let productToDetail = produtos && listProductsDetail[0]


    const addProductToCart = ((product) => {
        
        const index = cart.findIndex((i) => product.fields.codigo_produto === i.codigo_produto)

        if (index === -1) {
            const newProduct = {
                categoria: product.fields.categoria,
                nome: product.fields.nome,
                descricao1: product.fields.descricao1,
                descricao2: product.fields.descricao2,
                imagem: caneca,
                codigo_produto: product.fields.codigo_produto,
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
    const id = listProductsDetail && listProductsDetail[0]

    const showAlert = () => {
        setTimeout(() => {
            setAlert(false)
            hideModal()
        }, 4000)
    }
    return (
        <div id="productsPage">

            <div className="modal" id="modal">
                <div className="alert-container">
                    <div className={alert ? "alert-add-product-active" : "alert-add-product"}>{message} </div>
                </div>
                <div className="modal-content">
                    <div className="modal-product-container">
                        <div className="modal-title-container-product-title">
                            <div className="modal-title-product">DETALHES DO PRODUTO</div>
                        </div>
                        <img className="modal-image-product-sector-1" src={caneca} alt="caneca" />
                        <div className="title-product-sector-1">{productToDetail && productToDetail.fields.nome}</div>
                        <div className="title-product-sector-1">{productToDetail && productToDetail.fields.descricao1}</div>
                        <div className="modal-counter-product">
                            <div className="modal-quantiti-product">
                                QUANTIDADE:
                                <div className="modal-counter">
                                    <div onClick={() => subCount()} className="modal-counter-add">-</div>
                                    <div className="modal-counter-num">{qtd}</div>
                                    <div onClick={() => addCount()} className="modal-counter-add">+</div></div>
                            </div>
                        </div>
                        <div className="modal-btn-container">
                            <button onClick={() => addProductToCart(listProductsDetail[0])} className="modal-btn">Adicionar
                                <img className="model-icon-add-car-btn" src={addCar} alt="car-icon" />
                            </button>
                        </div>
                        <div className="modal-export-container">
                            <div>compartilhar:</div>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://aggostini-template.herokuapp.com/aggostini/detalhe_produto?` + id} id="facebook-share-btt" rel="nofollow" target="_blank" className="facebook-share-button">
                                <img className="modal-icon" src={iconFacebookBlack} alt="facebook-icon" />
                                <img className="modal-sub-icon" src={iconFacebookBlue} alt="facebook-icon" />
                            </a>
                            <a href="https://api.whatsapp.com/send?text=https://aggostini-template.herokuapp.com/aggostini/detalhe_produto?001" id="whats-share-btt" rel="nofollow" target="_blank" className="facebook-share-button">
                                <img className="modal-icon" src={iconWhatsBlack} alt="twiter-icon" />
                                <img className="modal-sub-icon-1" src={iconWhatsBlue} alt="twiter-icon" />
                            </a>
                            <a href="https://twitter.com/intent/tweet?url=http://aggostini.com.br/aggostini/produtos&text=[TEXTO-DO-TWEET]" id="twiter-share-btt" rel="nofollow" target="_blank" className="facebook-share-button">
                                <img className="modal-icon" src={iconTwiterBlack} alt="whats-icon" />
                                <img className="modal-sub-icon-2" src={iconTwiterBlue} alt="whats-icon" />
                            </a>
                            <a href="mailto:[E-MAIL]?subject=[Aggostini Soluções Hidráulica]&body=[http://aggostini.com.br/aggostini/produtos]" id="email-share-btt" rel="nofollow" target="_blank" className="email-share-button">
                                <img className="modal-icon" src={iconLetterBlack} alt="insta-icon" />
                                <img className="modal-sub-icon-3" src={iconLetterBlue} alt="insta-icon" />
                            </a>
                        </div>
                    </div>
                    <span onClick={() => hideModal()} className="close-modal">&times;</span>
                </div>
            </div>
            <div className="body-products">
                <div className="menu-products-sector-1">
                    <div className="box-menu-products-sector-1">
                        
                        <div className="box-category-menu-products-sector-1">
                            {listGaleri}

                        </div>
                    </div>
                </div>
                <div className="products-sector-1">
                    <div className="box-section-products-sector-1">
                        <div className="tittle-products-sector-1">{title.toUpperCase()}</div>
                        <div className="container-products-sector-1">
                            {listProducts}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}