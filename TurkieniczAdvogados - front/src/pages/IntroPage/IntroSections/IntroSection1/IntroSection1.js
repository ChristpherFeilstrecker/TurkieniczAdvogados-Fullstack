import "./StyledIntroSection1.css";
import aquecedores from "../../../../images/intro/aquecedores.jpg"
import solar from "../../../../images/intro/solar.jpg"
import reparos from "../../../../images/intro/reparos.jpg"
import pressurizadores from "../../../../images/intro/pressurizadores.jpg"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";

export default function IntroSection1() {
    const navigate = useNavigate();
    const data = useContext(GlobalContext);
    const parametros = data.parametros
    const setSearch = data.setSearch
    const setTitle = data.setTitle
    const destaques = data.destaques

    let dest1 =destaques && destaques[0]
    let dest2 =destaques && destaques[1]
    let dest3 =destaques && destaques[2]
    let dest4 =destaques && destaques[3]


    const setSearchFunction=(id,title)=>{
        
        setSearch(`${id}`)
        navigate(`/aggostini/produtos`)
        setTitle(title)
    }


    return (
        <div id="intro-section-1">

            <div className="body-intro-section-1">
                <div>
                <img className="img-intro-section-1" src={dest1 && dest1.image} alt="destaque1"/>
                </div>
                
                <div className="body-rigth-container">
                    
                    <div className="title-rigth-container">{dest1 && dest1.titulo}</div>
                    <div className="text-rigth-container">{dest1 && dest1.descricao}</div>
                    <div className="btns-rigth-container">
                     <div onClick={() => setSearchFunction(dest1 && dest1.categoria,"PRODUTOS")} className="btn-rigth-container-more">VER PRODUTOS</div>  
                     <div  className="btn-rigth-container">
                     <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].whats)}&text=Olá! Gostária de solicitar um orçamento de ${dest1 && dest1.titulo}.`}target="_blank">
                        ORÇAMENTO
                        </a>
                            </div> 
                    </div>
                </div>
            </div>

            <div className="body-intro-section-1">
                <div>
                <img className="img-intro-section-1" src={dest2 && dest2.image} alt="destaque1"/>
                </div>
                
                <div className="body-rigth-container">
                    
                    <div className="title-rigth-container">{dest2 && dest2.titulo}</div>
                    <div className="text-rigth-container">{dest2 && dest2.descricao}</div>
                    <div className="btns-rigth-container">
                     <div onClick={() => setSearchFunction(dest2 && dest2.categoria,"PRODUTOS")} className="btn-rigth-container-more">VER PRODUTOS</div>  
                     <div  className="btn-rigth-container">
                     <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].whats)}&text=Olá! Gostária de solicitar um orçamento de ${dest2 && dest2.titulo}.`}target="_blank">
                        ORÇAMENTO
                        </a>
                            </div> 
                    </div>
                </div>
            </div>

            <div className="body-intro-section-1">
                <div>
                <img className="img-intro-section-1" src={dest3 && dest3.image} alt="destaque1"/>
                </div>
                
                <div className="body-rigth-container">
                    
                    <div className="title-rigth-container">{dest3 && dest3.titulo}</div>
                    <div className="text-rigth-container">{dest3 && dest3.descricao}</div>
                    <div className="btns-rigth-container">
                     <div onClick={() => setSearchFunction(dest3 && dest3.categoria,"PRODUTOS")} className="btn-rigth-container-more">VER PRODUTOS</div>  
                     <div  className="btn-rigth-container">
                     <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].whats)}&text=Olá! Gostária de solicitar um orçamento de ${dest3 && dest3.titulo}.`}target="_blank">
                        ORÇAMENTO
                        </a>
                            </div> 
                    </div>
                </div>
            </div>

            <div className="body-intro-section-1">
                <div>
                <img className="img-intro-section-1" src={dest4 && dest4.image} alt="destaque1"/>
                </div>
                
                <div className="body-rigth-container">
                    
                    <div className="title-rigth-container">{dest4 && dest4.titulo}</div>
                    <div className="text-rigth-container">{dest4 && dest4.descricao}</div>
                    <div className="btns-rigth-container">
                     <div onClick={() => setSearchFunction(dest4 && dest4.categoria,"PRODUTOS")} className="btn-rigth-container-more">VER PRODUTOS</div>  
                     <div  className="btn-rigth-container">
                     <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].whats)}&text=Olá! Gostária de solicitar um orçamento de ${dest4 && dest4.titulo}.`}target="_blank">
                        ORÇAMENTO
                        </a>
                            </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}