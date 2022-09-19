
import { useContext } from "react";
import GlobalContext from "../../components/global/globalContext";
import "./StyledActingPage.css";

export default function ActingPage() {
    const data = useContext(GlobalContext);
    let areas = data.areas
    let setDetailActing = data.setDetailActing
    let detailActing = data.detailActing

    let toDetail= areas && areas.map((area)=>{
        if(area.id === detailActing){
            return <div className="container-acting-text">
                <div className="acting-title">ÁREA {area.nome}</div>
            <div className="acting-text">{area.descricao}</div>
                </div>
        }
    })

    let toDetailActions=()=>{
        if(detailActing === ""){
          return <div key="intro" className="container-initial-text">
            <div className="initial-text">A palavra é o instrumento irresistível da conquista da liberdade.</div>
            <i className="autor-text">Ruy Barbosa</i>
                </div>
        }else{

            return <div key="toDetail">
                {toDetail}
            </div> 
        }
        
    }
    let listActions = areas && areas.map((area) => {
        return <div key={area.id} onClick={() => setDetailActing(area.id)} data-aos="fade-up" className="area-box-ActingPage">
            <img className="img-icon-ActingPage" src={area.imagem} alt={area.nome} />
            <div className="img-text-ActingPage">{area.nome}</div>
        </div>
    })



    return (
        <div className="ActingPage">
            <div className="body-ActingPage">
                <div className="buttons-ActingPage">
                    {listActions}
                </div>
                {toDetailActions()}

            </div>

        </div>
    )
}