import { useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/BaseURL";

import civil from "../../images/fotos/civil.png"
import previdenciario from "../../images/fotos/previdenciario.png"
import bancario from "../../images/fotos/bancario.png"
import criminal from "../../images/fotos/criminal.png"
import internacional from "../../images/fotos/internacional.png"
import ambiental from "../../images/fotos/ambiental.png"
import portuario from "../../images/fotos/portuario.png"
import marca from "../../images/fotos/marca.png"
import empresarial from "../../images/fotos/empresarial.png"
import trabalhista from "../../images/fotos/trabalhista.png"

export default function GlobalState(props) {
    const [cart, setCart] = useState([])

const galerias = useRequestData(BASE_URL+"/galerias/")
const parametros = useRequestData(BASE_URL+"/parametros/")
const json = useRequestData(BASE_URL+"/produto/")
const produtos = json && JSON.parse(json)

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

    let areas = [
            {
                id: 1,
                nome: "CÍVEL",
                descricao: "Cível descrição",
                imagem: civil,
            },
            {
                id: 2,
                nome: "PREVIDENCIÁRIA",
                descricao: "previdenciario descrição",
                imagem: previdenciario,
            },
            {
                id: 3,
                nome: "BANCÁRIA",
                descricao: "Bancario descrição",
                imagem: bancario,
            },
            {
                id: 4,
                nome: "CRIMINAL",
                descricao: "Criminal descrição",
                imagem: criminal,
            },
            {
                id: 5,
                nome: "INTERNACIONAL",
                descricao: "Internacional Descrição",
                imagem: internacional,
            }
            ,
            {
                id: 6,
                nome: "AMBIENTAL",
                descricao: "Ambiental Descrição",
                imagem: ambiental,
            }
            ,
            {
                id: 7,
                nome: "ADVOCACIA PORTUÁRIA",
                descricao: "Advocacio Portuária descrição",
                imagem: portuario,
            }
            ,
            {
                id:8,
                nome: "MARCAS E PATENTES",
                descricao: "Marcas e Patentes descrição",
                imagem: marca,
            },
            {
                id:9,
                nome: "EMPRESARIAL",
                descricao: "Empresarial descrição",
                imagem: empresarial,
            },
            {
                id:10,
                nome: "TRABALHISTA",
                descricao: "Trabalhista descrição",
                imagem: trabalhista,
            }
        ]
    

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
        galerias,
        parametros,
        produtos,
        areas
    }

    return (<GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )
}

