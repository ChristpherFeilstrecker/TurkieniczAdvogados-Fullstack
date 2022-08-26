import { useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import caneca from "../../images/fotos/Canecas e Squeezes/Caneca Capuccino_CC10017-ok.jpg"
import botton from "../../images/fotos/Bottons e Pins/Bottons - Diversas Personalizacoes_BT7001-ok.jpg"
import chaveiros from "../../images/fotos/Chaveiros/Chaveiro Couro Costurado_cc5003-ok.jpg"
import cracha from "../../images/fotos/Cordoes para Crachas e Acessorios/Cracha Plastico_cp2003-ok.jpg"
import adesivo from "../../images/fotos/Escritorio/Adesivo Escovado_AE30005-ok.jpg"
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/BaseURL";

export default function GlobalState(props) {
    const [cart, setCart] = useState([])
    let [search, setSearch] = useState("TODOS PRODUTOS");
    let [title, setTitle] = useState("TODOS PRODUTOS");

const galerias = useRequestData(BASE_URL+"/galerias/")
const parametros = useRequestData(BASE_URL+"/parametros/")
const destaques = useRequestData(BASE_URL+"/destaques/")

const json = useRequestData(BASE_URL+"/produto/")
const produtos = json && JSON.parse(json)

const json2 = useRequestData(BASE_URL+"/assistenciasprodutos/")
const assistenciaProdutos = json2 && JSON.parse(json2)

const assistencia = useRequestData(BASE_URL+"/assistencias/")

    const removeFromCart = (item) => {
        const index = cart.findIndex((i) => item.id === i.id)
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }

    const addCountProduct = ((id) => {
        const newCart = [...cart]
        const index = newCart.findIndex((i) => id === i.id)

        const newQtd = Number(newCart[index].quantidade) + 1

        newCart[index].quantidade = newQtd
        setCart(newCart)
    })

    const removeCountProduct = ((id) => {
        const newCart = [...cart]
        const index = newCart.findIndex((i) => id === i.id)

        if (newCart[index].quantidade === 0) {
            return newCart
        } else {
            const newQtd = Number(newCart[index].quantidade) - 1
            newCart[index].quantidade = newQtd
            
        }
        setCart(newCart)

    })

    let allProducts = {
        products: [
            {
                id: "001",
                nome: "Bottons",
                descricao: "Diversas pesonalizações",
                imagem: botton,
                referencia: "cc 17001",

            }
        ]
    }

    useEffect(() => {
        const data = localStorage.getItem('cart')
        if (data) {
            setCart(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    const data = {
        cart,
        setCart,
        removeFromCart,
        addCountProduct,
        removeCountProduct,
        allProducts,
        galerias,
        parametros,
        produtos,
        assistenciaProdutos,
        assistencia,
        search, 
        setSearch,
        title,
        setTitle,
        destaques
    }

    return (<GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )
}

