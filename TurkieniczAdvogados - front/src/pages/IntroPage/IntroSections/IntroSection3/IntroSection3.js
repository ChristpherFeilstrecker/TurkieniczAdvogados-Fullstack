import "./StyledIntroSection3.css";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";
import { useNavigate } from "react-router-dom";

export default function IntroSection3() {
    const data = useContext(GlobalContext);
    let noticias = data.noticias
    let navigate = useNavigate();

    const navigateNewsPage = (() => {
        navigate("/noticias")
        window.scrollTo(0, 0);
    })
    return (
        <div id="intro-section-3">
            <div className="title-container-intro-section-3">
                <div className="title-intro-section-3">Listagem de Notícias</div>
                <div className="traço"></div>
            </div>
            <div className="notices-container-intro-section-3">

                <div className="notices-column-intro-section-3">

                    <div className="notice-container-intro-section-3">
                        <div className="img-container-section-3">
                            <img className="img-icon-section-3" src={noticias && noticias[0].imagem} alt={noticias && noticias[0].id} />
                        </div>
                        <div className="info-container">
                            <div className="date-container">
                                <div className="date-section-3">{noticias && noticias[0].data}</div>
                                <a className="fonte-container-section-3" href={noticias && noticias[0].fonte} target="_blank" rel="noreferrer">
                                    <img className="min-icon-section-3" src="https://th.bing.com/th/id/OIP.sTZQwz5SWGcyY-GmnDbcpgHaHa?pid=ImgDet&rs=1" alt="icon"/>
                                    <div>FONTE</div>
                                </a>
                            </div>
                            <div className="text-section-3">{noticias && noticias[0].titulo}</div>
                        </div>
                    </div>

                    <div className="notice-container-intro-section-3">
                        <div className="img-container-section-3">
                            <img className="img-icon-section-3" src={noticias && noticias[1].imagem} alt={noticias && noticias[1].id} />
                        </div>
                        <div className="info-container">
                            <div className="date-container">
                                <div className="date-section-3">{noticias && noticias[1].data}</div>
                                <a className="fonte-container-section-3" href={noticias && noticias[1].fonte} target="_blank" rel="noreferrer">
                                    <img className="min-icon-section-3" src="https://th.bing.com/th/id/OIP.sTZQwz5SWGcyY-GmnDbcpgHaHa?pid=ImgDet&rs=1" alt="icon"/>
                                    <div>FONTE</div>
                                </a>
                            </div>
                            <div className="text-section-3">{noticias && noticias[1].titulo}</div>
                        </div>
                    </div>

                    <div className="notice-container-intro-section-3">
                        <div className="img-container-section-3">
                            <img className="img-icon-section-3" src={noticias && noticias[2].imagem} alt={noticias && noticias[2].id} />
                        </div>
                        <div className="info-container">
                            <div className="date-container">
                                <div className="date-section-3">{noticias && noticias[2].data}</div>
                                <a className="fonte-container-section-3" href={noticias && noticias[2].fonte} target="_blank" rel="noreferrer">
                                    <img className="min-icon-section-3" src="https://th.bing.com/th/id/OIP.sTZQwz5SWGcyY-GmnDbcpgHaHa?pid=ImgDet&rs=1" alt="icon"/>
                                    <div>FONTE</div>
                                </a>
                            </div>
                            <div className="text-section-3">{noticias && noticias[2].titulo}</div>
                        </div>
                    </div>
                </div>

                <div className="notices-column-intro-section-3">

                    <div className="notice-container-intro-section-3">
                        <div className="img-container-section-3">
                            <img className="img-icon-section-3" src={noticias && noticias[0].imagem} alt={noticias && noticias[0].id} />
                        </div>
                        <div className="info-container">
                            <div className="date-container">
                                <div className="date-section-3">{noticias && noticias[0].data}</div>
                                <a className="fonte-container-section-3" href={noticias && noticias[0].fonte} target="_blank" rel="noreferrer">
                                    <img className="min-icon-section-3" src="https://th.bing.com/th/id/OIP.sTZQwz5SWGcyY-GmnDbcpgHaHa?pid=ImgDet&rs=1" alt="icon"/>
                                    <div>FONTE</div>
                                </a>
                            </div>
                            <div className="text-section-3">{noticias && noticias[0].titulo}</div>
                        </div>
                    </div>

                    <div className="notice-container-intro-section-3">
                        <div className="img-container-section-3">
                            <img className="img-icon-section-3" src={noticias && noticias[0].imagem} alt={noticias && noticias[0].id} />
                        </div>
                        <div className="info-container">
                            <div className="date-container">
                                <div className="date-section-3">{noticias && noticias[0].data}</div>
                                <a className="fonte-container-section-3" href={noticias && noticias[0].fonte} target="_blank" rel="noreferrer">
                                    <img className="min-icon-section-3" src="https://th.bing.com/th/id/OIP.sTZQwz5SWGcyY-GmnDbcpgHaHa?pid=ImgDet&rs=1" alt="icon"/>
                                    <div>FONTE</div>
                                </a>
                            </div>
                            <div className="text-section-3">{noticias && noticias[0].titulo}</div>
                        </div>
                    </div>

                    <div className="notice-container-intro-section-3">
                        <div className="img-container-section-3">
                            <img className="img-icon-section-3" src={noticias && noticias[0].imagem} alt={noticias && noticias[0].id} />
                        </div>
                        <div className="info-container">
                            <div className="date-container">
                                <div className="date-section-3">{noticias && noticias[0].data}</div>
                                <a className="fonte-container-section-3" href={noticias && noticias[0].fonte} target="_blank" rel="noreferrer">
                                    <img className="min-icon-section-3" src="https://th.bing.com/th/id/OIP.sTZQwz5SWGcyY-GmnDbcpgHaHa?pid=ImgDet&rs=1" alt="icon"/>
                                    <div>FONTE</div>
                                </a>
                            </div>
                            <div className="text-section-3">{noticias && noticias[0].titulo}</div>
                        </div>
                    </div>
                </div>




            </div>
            <div className="button-container">
                <div onClick={()=>navigateNewsPage()} className="button-vejamais">VEJA MAIS...</div>
            </div>


        </div>
    )
}