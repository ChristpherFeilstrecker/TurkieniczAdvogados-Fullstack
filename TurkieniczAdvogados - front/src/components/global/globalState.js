import { useEffect, useState } from "react";
import GlobalContext from "./globalContext";
//import useRequestData from "../hooks/useRequestData";
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

export default function GlobalState(props) {
    let [cart, setCart] = useState([])
    let [detailActing, setDetailActing] = useState("")

    /*
    const galerias = useRequestData(BASE_URL+"/galerias/")
    const parametros = useRequestData(BASE_URL+"/parametros/")
    const json = useRequestData(BASE_URL+"/produto/")
    const produtos = json && JSON.parse(json)
    */

    let areas = [
        {
            id: 1,
            nome: "CÍVEL",
            descricao: "Cível descrição - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
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
            titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        },
        {
            id: 2,
            titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        },
        {
            id: 3,
            titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        },
        {
            id: 4,
            titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        },
        {
            id: 5,
            titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        }
        ,
        {
            id: 6,
            titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        }
        ,
        {
            id: 7,
            titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        }
        ,
        {
            id: 8,
            titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        },
        {
            id: 9,
            titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        },
        {
            id: 10,
            titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.",
            descricao: "Consequat orci at, semper turpis. Nunc ac interdum lectus. Morbi pharetra purus augue, vel suscipit ligula mattis ac. Nam in vulputate mi. Nunc rutrum diam et accumsan facilisis. Nullam bibendum magna a condimentum tempus. Etiam ut velit non nunc lobortis lacinia. Curabitur ac felis sed turpis aliquam viverra sed congue diam. Nulla semper lacus vel odio ultrices fermentum.",
            imagem: "https://st2.depositphotos.com/4103319/7182/i/950/depositphotos_71828229-stock-photo-test-square-icon-on-white.jpg",
            data: "15/6/2022",
            fonte: "https://www.stj.jus.br/sites/portalp/Inicio"
        }
    ]

    let videos = [
        {
            id: 1,
            titulo: "Titulo do video.",
            descricao: "Descrição do video - Consequat orci at, semper turpis. Nunc ac interdum lectus. ",
            url: "https://www.youtube.com/embed/3Wf29RiKp70",
        },
        {
            id: 2,
            titulo: "Titulo do video.",
            descricao: "Descrição do video - Consequat orci at, semper turpis. Nunc ac interdum lectus. ",
            url: "https://www.youtube.com/embed/3Wf29RiKp70",
        },
        {
            id: 3,
            titulo: "Titulo do video.",
            descricao: "Descrição do video - Consequat orci at, semper turpis. Nunc ac interdum lectus. ",
            url: "https://www.youtube.com/embed/3Wf29RiKp70",
        },
        {
            id: 4,
            titulo: "Titulo do video.",
            descricao: "Descrição do video - Consequat orci at, semper turpis. Nunc ac interdum lectus. ",
            url: "https://www.youtube.com/embed/3Wf29RiKp70",
        }
    ]

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
        areas,
        detailActing,
        setDetailActing,
        noticias,
        videos
    }

    return (<GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )
}

