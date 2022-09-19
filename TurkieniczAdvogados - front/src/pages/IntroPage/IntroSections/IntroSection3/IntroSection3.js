import "./StyledIntroSection3.css";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";
import { useNavigate } from "react-router-dom";
import fontIcon from "../../../../images/font-icon.jpg"
import stjLogo from "../../../../images/stj-logo.jpg"
import tjRSLogo from "../../../../images/tjrs-logo.png"

export default function IntroSection3() {
    const data = useContext(GlobalContext);
    let noticias = data.noticias
    let newsSTJ = data.newsSTJ
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

                    <div onClick={() => navigateNewsPage()} className="notice-container-intro-section-3">
                        <div className="img-container-section-3">
                            <img className="img-icon-section-3" src={noticias && noticias[0].imagem} alt={noticias && noticias[0].id} />
                        </div>
                        <div className="info-container">
                            <div className="date-container">
                                <div className="date-section-3">{noticias && noticias[0].data}</div>
                                <a className="fonte-container-section-3" href={noticias && noticias[0].fonte} target="_blank" rel="noreferrer">
                                    <img className="min-icon-section-3" src={fontIcon} alt="icon" />
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
                                    <img className="min-icon-section-3" src={fontIcon} alt="icon" />
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
                                    <img className="min-icon-section-3" src={fontIcon} alt="icon" />
                                    <div>FONTE</div>
                                </a>
                            </div>
                            <div className="text-section-3">{noticias && noticias[2].titulo}</div>
                        </div>
                    </div>

                    <div className="notice-container-intro-section-3">
                        <div className="img-container-section-3">
                            <img className="img-icon-section-3" src={noticias && noticias[3].imagem} alt={noticias && noticias[3].id} />
                        </div>
                        <div className="info-container">
                            <div className="date-container">
                                <div className="date-section-3">{noticias && noticias[3].data}</div>
                                <a className="fonte-container-section-3" href={noticias && noticias[3].fonte} target="_blank" rel="noreferrer">
                                    <img className="min-icon-section-3" src={fontIcon} alt="icon" />
                                    <div>FONTE</div>
                                </a>
                            </div>
                            <div className="text-section-3">{noticias && noticias[3].titulo}</div>
                        </div>
                    </div>

                    <div className="button-container">
                        <div onClick={() => navigateNewsPage()} className="button-vejamais">VEJA MAIS...</div>
                    </div>

                </div>

                <div className="notices-column-intro-section-3">
                    <div className="img-container-section-3">
                        <div className="container-stj-title-section-3">
                            <img className="stj-logo-section-3" src={stjLogo} alt="icon" />
                            <a href="https://www.stj.jus.br/sites/portalp/Inicio" target="_blank" rel="noreferrer">
                                <div className="title-intro-section-3">Noticias STJ</div>
                            </a>
                        </div>

                    </div>


                    <a href={newsSTJ && newsSTJ[0].link} target="_blank" rel="noreferrer">
                        <div className="notice-container-intro-section-3">
                            <div className="text-section-3">{newsSTJ && newsSTJ[0].titulo}</div>
                        </div>
                    </a>

                    <a href={newsSTJ && newsSTJ[1].link} target="_blank" rel="noreferrer">
                        <div className="notice-container-intro-section-3">
                            <div className="text-section-3">{newsSTJ && newsSTJ[1].titulo}</div>
                        </div>
                    </a>


                    <a href={newsSTJ && newsSTJ[2].link} target="_blank" rel="noreferrer">
                        <div className="notice-container-intro-section-3">
                            <div className="text-section-3">{newsSTJ && newsSTJ[2].titulo}</div>
                        </div>
                    </a>


                    <a href={newsSTJ && newsSTJ[3].link} target="_blank" rel="noreferrer">
                        <div className="notice-container-intro-section-3">
                            <div className="text-section-3">{newsSTJ && newsSTJ[3].titulo}</div>
                        </div>
                    </a>

                    <div className="img-container-section-3">
                        <div className="container-stj-title-section-3">
                            <img className="stj-logo-section-3" src={tjRSLogo} alt="icon" />
                            <a href="https://www.tjrs.jus.br/novo/comunicacao/noticias-do-tjrs/noticias/" target="_blank" rel="noreferrer">
                                <div className="title-intro-section-3">Noticias TJRS</div>
                            </a>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}