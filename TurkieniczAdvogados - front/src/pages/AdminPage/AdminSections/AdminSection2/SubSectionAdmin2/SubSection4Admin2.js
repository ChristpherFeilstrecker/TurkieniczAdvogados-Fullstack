import { useContext, useState } from "react"
import "./StyledSubSection4Admin2.css";
import GlobalContext from "../../../../../components/global/globalContext";
import { useNavigate } from "react-router-dom";
import ListProdCard from "./cards/ListProdCard";
import ProdToEditCard from "./cards/ProdToEditCard";
import { useProtectedPage } from "../../../../../components/hooks/useProtectPage";

export default function SubSection2Admin2() {
    useProtectedPage();
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let setToAdd = data.setToAdd
    let setToEdit = data.setToEdit
 //   let parametros = data.parametros
    let [infoOpen, setInfoOpen] = useState(false)
    let [prodSel, setProdSel] = useState("")
    let informacoes = data.informacoes

    const goToEdit = (edit)=>{
    
        setToEdit(edit)
        setInfoOpen(false)
        setProdSel(informacoes[0])
        navigate("/admin/painel_de_controle/edit")
      }

      const goToAdd = (add)=>{
        setToAdd(add)
        navigate("/admin/painel_de_controle/add")
      }
/*
      const goToEditParams = (edit)=>{
        console.log("params",parametros[0])
        setProdSel(parametros[0])
        setToEdit(edit)
        setInfoOpen(false)
        navigate("/admin/painel_de_controle/edit")
      }
*/

    const edit = ()=>{
        if(infoOpen){
            return <ProdToEditCard prodSel={prodSel}/>
        }else{
            return <ListProdCard setInfoOpen={setInfoOpen} setProdSel={setProdSel} prodSel={prodSel}/>
        }

    }

  //  const goToApp = () => {
  //      navigate("/admin/painel_de_controle")
  //  }


    return (
        <div className="body-subsection4">

            <div className="title-subsection4">Administração: Editar</div>
            <div className="container-body-subsection4">
                <div>
                <div className="services-container-subsection2">
                <div className="title-container-subsection2">APP</div>
                <div className="service-subsection2">
                    <strong className="service-type-subsection2">DESTAQUES</strong>
                    <div className="options-service-subsection2">
                        <div onClick={()=>goToEdit("DESTAQUES")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>
                <div className="service-subsection2">
                    <strong className="service-type-subsection2">NOTICIAS</strong>
                    <div className="options-service-subsection2">
                    <div onClick={()=>goToAdd("NOTICIAS")} className="option-service-subsection2">ADD</div>
                        <div onClick={()=>goToEdit("NOTICIAS")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>

                <div className="service-subsection2">
                    <strong className="service-type-subsection2">ÁREAS</strong>
                    <div className="options-service-subsection2">
                        <div onClick={()=>goToEdit("ÁREAS")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>

                <div className="service-subsection2">
                    <strong className="service-type-subsection2">VIDEOS</strong>
                    <div className="options-service-subsection2">
                        <div onClick={()=>goToAdd("VIDEOS")} className="option-service-subsection2">ADD</div>
                        <div onClick={()=>goToEdit("VIDEOS")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>

                <div className="service-subsection2">
                    <strong className="service-type-subsection2">INFORMAÇÕES</strong>
                    <div className="options-service-subsection2">
                        <div onClick={()=>goToEdit("INFORMAÇÕES")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>
            </div>
            <div className="users-container-subsection2">
            <div className="title-container-subsection2">AUTENTICAÇÃO E AUTORIZAÇÃO</div>
            
                <div className="service-subsection2">
                    <strong className="service-type-subsection2">USUÁRIO</strong>
                    <div className="options-service-subsection2">
                        <div onClick={()=>goToAdd("USUÁRIO")} className="option-service-subsection2">ADD</div>
                        <div onClick={()=>goToEdit("USUÁRIO")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>
            </div>
                </div>
                <div>
                    <div>{edit()}</div>
                </div>
            </div>

        </div>
    )

}