import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";
import "./StyledAssistancePage.css";


export default function AssistancePage() {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    const assistenciaProdutos = data && data.assistenciaProdutos
    const assistencia = data && data.assistencia

let counter = 1
    const AssistenceProducts = assistenciaProdutos && assistenciaProdutos.map((prod) => {
        
        if (assistenciaProdutos) {
            for (let marca of assistencia) {

                if(marca.id === prod.fields.assistenciaTecnica){
                   counter+=1

                   return <div key={counter} className="product-container">
                   <div className="image-product-container">
                       <img className="image-product" src={`https://aggostini.com.br/media/${prod.fields.image}`} alt={prod.fields.nome} />
                   </div>
                   <div className="assis-detail-product-container">
                       <div className="assis-image-container">
                           <img className="assis-image" src={marca.image} alt={prod.fields.nome} />
                           <div className="text-product">{ prod.fields.nome}</div>
                       </div>
                   </div>
               </div>

                }
            }
        }
    })


    return (
        <div className="assistance-page">
            <div className="videos-container">

                {AssistenceProducts}

            </div>
        </div>
    )
}