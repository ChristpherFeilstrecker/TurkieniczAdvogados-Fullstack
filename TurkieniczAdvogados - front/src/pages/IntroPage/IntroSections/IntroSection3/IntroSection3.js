import { SubTitleTag, SubTitleTagB, TitleTagType } from "../../../../StyledGlobal";
import newYork from "../../../../images/new-york-1920x500.jpg"
import "./StyledIntroSection3.css";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IntroSection3() {
    const data = useContext(GlobalContext);
    const navigate = useNavigate();
    const galerias = data.galerias
    const assistence = data.assistencia
    const setSearch = data.setSearch
    const setTitle = data.setTitle
   

    const allGaleri = galerias && galerias
        .map((galeri) => {
            return <div data-aos="fade-up" key={galeri.id} className="galeria">
                    <div className="galeria-produtos">
                        <div className="text-container-galeri-sector3 to-top-index">
                            <div className="text-box-left-galeri-sector3">
                                {galeri.nome}
                            </div>
                        </div>
                        <img className="image-product-sector3 to-down-index" src={galeri.image} alt="galeria" />
                    </div>
                </div>

        })

    const allAssistence = assistence && assistence
        .map((assis) => {
            return <div key={assis.id} >
                <img className="image-assistence-logo" src={assis.image} alt="galeria" />
            </div>

        })

        const navigateTo=()=>{
            navigate(`/aggostini/produtos`)
            window.scrollTo(0, 0)
            setSearch(`TODOS PRODUTOS`)
    setTitle(`TODOS PRODUTOS`)
        }
    return (
        <div id="intro-section-3">

            <div className="title-container-section3">
                <div className="title-section3">Nossos Produtos</div>
                <div className="text-section3">Temos tudo o que você precisa.</div>
            </div>

            {allGaleri}

            <div className="container-btn">
            <div onClick={() => navigateTo()} className="btn-rigth-container">VEJA NOSSOS PRODUTOS</div>

            </div>

            <div className="title-container-section3 ">
                <div className="title-section3">Assistência Técnica Autorizada</div>
                <div className="text-section3">Nossos parceiros</div>
            </div>
            <div className="image-assistence-logo-container margin-down">
                {allAssistence}
            </div>



        </div>
    )
}