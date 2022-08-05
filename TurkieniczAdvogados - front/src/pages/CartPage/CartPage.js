import { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";
import GlobalState from "../../components/global/globalState";
import useForm from "../../components/hooks/useForm";
import CartProducts from "./CartProducts";
import "./StyledCartPage.css";


export default function CartPage(props) {
const data = useContext(GlobalContext);

    
    let navigate = useNavigate();


    return (
        <div className="cart-page">
            
        </div>
    )
}