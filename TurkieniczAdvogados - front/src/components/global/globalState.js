import { useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import useRequestData from "../hooks/useRequestData";
//import { BASE_URL } from "../constants/BaseURL";

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
import img1 from "../../images/carrossel/asa.jpg"
import img2 from "../../images/carrossel/escalada.jpg"
import img3 from "../../images/carrossel/paraquedas.jpg"
import img4 from "../../images/carrossel/trilha.jpg"


export default function GlobalState(props) {
    let [cart, setCart] = useState([])
    let [detailActing, setDetailActing] = useState("")
    const [prodToDetail, setProdToDetail] = useState([""]);
    let [refresh, setRefresh] = useState(false);
    let [toAdd, setToAdd] = useState("");
    let [toEdit, setToEdit] = useState("");
    let [token, setToken] = useState("")

    /*
    const galerias = useRequestData(BASE_URL+"/galerias/")
    const parametros = useRequestData(BASE_URL+"/parametros/")
    
    const test = json && JSON.parse(json)
    */

  

const xml = useRequestData("https://feeds.feedburner.com/STJNoticias") //retorna todas noticias

let tittle1 = xml && xml.slice(xml.indexOf("<title><![CDATA[")+ 16,xml.indexOf("]]></title>")); //retorna primeira noticia
let link1 = xml && xml.slice(xml.indexOf("<link><![CDATA[")+15,xml.indexOf("]]></link>"));//retorna primeiro link

let nextXml2 = link1 && xml.slice(xml.indexOf(link1+"]]></link>")); //pega xml inicial e retorna a aprtir do link

let xml2 = nextXml2 && nextXml2.slice(nextXml2.indexOf("<title><![CDATA[")); //retira  primeiro link

let tittle2 = xml2 && xml2.slice(xml2.indexOf("<title><![CDATA[")+ 16,xml2.indexOf("]]></title>")); // retorna segunda noticia
let link2 = xml2 && xml2.slice(xml2.indexOf("<link><![CDATA[")+15,xml2.indexOf("]]></link>"));// retorna segundo link

let nextXml3 = link2 && xml2.slice(xml2.indexOf(link2+"]]></link>"));

let xml3 = nextXml3 && nextXml3.slice(nextXml3.indexOf("<title><![CDATA["));

let tittle3 = xml3 && xml3.slice(xml3.indexOf("<title><![CDATA[")+ 16,xml3.indexOf("]]></title>"));
let link3 = xml3 && xml3.slice(xml3.indexOf("<link><![CDATA[")+15,xml3.indexOf("]]></link>"));

let nextXml4 = link3 && xml3.slice(xml3.indexOf(link3+"]]></link>"));

let xml4 = nextXml4 && nextXml4.slice(nextXml4.indexOf("<title><![CDATA["));

let tittle4 = xml4 && xml4.slice(xml4.indexOf("<title><![CDATA[")+ 16,xml4.indexOf("]]></title>"));
let link4 = xml4 && xml4.slice(xml4.indexOf("<link><![CDATA[")+15,xml4.indexOf("]]></link>"));


let newsSTJ = [
    {
        id:1,
        titulo: link4 && tittle1,
        link:link4 && link1
    },
    {
        id:2,
        titulo:link4 && tittle2,
        link:link4 && link2
    },
    {
        id:3,
        titulo:link4 && tittle3,
        link:link4 && link3
    },
    {
        id:4,
        titulo:link4 && tittle4,
        link:link4 && link4
    }
]


    let destaques = [
    { id: 0, imagem: img1, descricao: "Um bom desafio tem em si sua recompensa" },
    { id: 1, imagem: img2, descricao: "Na estratégia, decisiva é a aplicação" },
    { id: 2, imagem: img3, descricao: "A dedicação é fruto da persistência" },
    { id: 3, imagem: img4, descricao: "Turkienicz Advogados Associados" }
    ]

    let areas = [
        {
            id: 1,
            nome: "CÍVEL",
            descricao: "Cível descrição - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto. ",
            imagem: civil,
        },
        {
            id: 2,
            nome: "PREVIDENCIÁRIA",
            descricao: "previdenciario descrição  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            imagem: previdenciario,
        },
        {
            id: 3,
            nome: "BANCÁRIA",
            descricao: "Bancario descrição  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            imagem: bancario,
        },
        {
            id: 4,
            nome: "CRIMINAL",
            descricao: "Criminal descrição  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            imagem: criminal,
        },
        {
            id: 5,
            nome: "INTERNACIONAL",
            descricao: "Internacional Descrição - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            imagem: internacional,
        }
        ,
        {
            id: 6,
            nome: "AMBIENTAL",
            descricao: "Ambiental Descrição - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            imagem: ambiental,
        }
        ,
        {
            id: 7,
            nome: "ADVOCACIA PORTUÁRIA",
            descricao: "Advocacio Portuária descrição - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            imagem: portuario,
        }
        ,
        {
            id: 8,
            nome: "MARCAS E PATENTES",
            descricao: "Marcas e Patentes descrição - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            imagem: marca,
        },
        {
            id: 9,
            nome: "EMPRESARIAL",
            descricao: "Empresarial descrição - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            imagem: empresarial,
        },
        {
            id: 10,
            nome: "TRABALHISTA",
            descricao: "Trabalhista descrição - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            imagem: trabalhista,
        }
    ]

    let noticias = [
        {
            id: 1,
            titulo: "Titulo da noticia com breve descriçao - Útltima noticia postada.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        },
        {
            id: 2,
            titulo: "Titulo da noticia com breve descriçao - Consequat orci at, semper turpis.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        },
        {
            id: 3,
            titulo: "Titulo da noticia com breve descriçao - Consequat orci at, semper turpis.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        },
        {
            id: 4,
            titulo: "Titulo da noticia com breve descriçao - ",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        },
        {
            id: 5,
            titulo: "Titulo da noticia com breve descriçao - ",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        }
        ,
        {
            id: 6,
            titulo: "Titulo da noticia com breve descriçao - ",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        }
        ,
        {
            id: 7,
            titulo: "Titulo da noticia com breve descriçao - ",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        }
        ,
        {
            id: 8,
            titulo: "Titulo da noticia com breve descriçao - ",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        },
        {
            id: 9,
            titulo: "Titulo da noticia com breve descriçao - ",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        },
        {
            id: 10,
            titulo: "Titulo da noticia com breve descriçao - Consequat orci at, semper turpis.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        }
    ]

    let videos = [
        {
            id: "1",
            titulo: "Titulo do video 1.",
            descricao: "Descrição do video - Consequat orci at, semper turpis. Nunc ac interdum lectus. Consequat orci at, semper turpis. Nunc ac interdum lectus. ",
            url: "https://www.youtube.com/embed/3Wf29RiKp70",
        },
        {
            id: "2",
            titulo: "Titulo do video 2.",
            descricao: "Descrição do video - Consequat orci at, semper turpis. Nunc ac interdum lectus. ",
            url: "https://www.youtube.com/embed/3Wf29RiKp70",
        },
        {
            id: "3",
            titulo: "Titulo do video 3.",
            descricao: "Descrição do video - Consequat orci at, semper turpis. Nunc ac interdum lectus. ",
            url: "https://www.youtube.com/embed/3Wf29RiKp70",
        },
        {
            id: "4",
            titulo: "Titulo do video 4.",
            descricao: "Descrição do video - Consequat orci at, semper turpis. Nunc ac interdum lectus. ",
            url: "https://www.youtube.com/embed/3Wf29RiKp70",
        }
    ]

    let informacoes = [
        {
            id: 1,
            endereco: "Rua Vereador Adão Rodrigues de Oliveira, 206",
            bairro: "Bairro Ideal",
            cidade: "Novo Hamburgo",
            estadoPaisCep: "Rio Grande do Sul - Brasil - CEP.93.334-290",
            telefone: "5131700333",
            whats: "51999999999",
            twiter: "https://twitter.com/",
            instagram: "https://www.instagram.com/",
            facebook: "https://www.facebook.com/"
        }
    ]

    let usuarios = [
        {
            id: "1",
            nome: "admin",
            senha: "admin"
        }
    ]

  /*   
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
*/
/*
    useEffect(() => {
        const data = localStorage.getItem('cart')
        if (data) {
            setCart(JSON.parse(data))
        }
    }, [])

    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
*/

  useEffect(() => {
        const data = localStorage.getItem('token')
        if (data) {
            setToken(JSON.parse(data))
        }
    }, [])

    const data = {
        cart,
        setCart,
        areas,
        detailActing,
        setDetailActing,
        noticias,
        videos,
        informacoes,
        destaques,
        usuarios,
        toAdd,
        setToAdd,
        toEdit, 
        setToEdit,
        token, 
        setToken,
        newsSTJ
        
    }

    return (<GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )
}

