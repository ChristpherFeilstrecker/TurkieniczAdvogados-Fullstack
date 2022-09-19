import "./StyledNewsPage.css";
import { useContext } from "react";
import GlobalContext from "../../components/global/globalContext";
import fontIcon from "../../images/font-icon.jpg"


export default function NewsPage() {
    const data = useContext(GlobalContext);
    let noticias = data.noticias


    let newsList = noticias && noticias.map((news)=>{
        
            return <div key={news.id} className="notices-container-news-page">
            <div className="notice-container-intro-news-page">
                <div className="img-container-news-page">
                    <img className="img-icon-news-page" src={news.imagem} alt={news.id} />
                </div>
                <div className="info-container-news-page">
                    <div className="date-container-news-page">
                        <div className="date-news-page">{news.data}</div>
                        <a className="fonte-container-news-page" href={news.fonte} target="_blank" rel="noreferrer">
                            <img className="min-icon-news-page" src={fontIcon} alt="icon" />
                            <div>FONTE</div>
                        </a>
                    </div>
                    <div className="title-news-page">{news.titulo}</div>
                    <div className="text-news-page">{news.descricao}</div>
                </div>
            </div>
        </div>
        
    })

    return (
        <div id="NewsPage">
            <div className="news-page-container">
            <div className="title-container-intro-section-3">
                <div className="news-title-page">Notícias</div>
                <div className="traço"></div>
            </div>

            {newsList}
         </div>   
        </div>
    )
}