import { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";
import GlobalState from "../../components/global/globalState";
import useForm from "../../components/hooks/useForm";
import "./StyledQueryPage.css";


export default function QueryPage(props) {
const data = useContext(GlobalContext);

    
    let navigate = useNavigate();


    return (
        <div className="QueryPage">
            <div>CONULTA DE PROCESSOS</div>
        </div>
    )
}