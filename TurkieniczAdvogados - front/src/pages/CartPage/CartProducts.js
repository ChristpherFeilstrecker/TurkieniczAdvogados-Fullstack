import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";

export default function CartProducts(props) {
   
    const data = useContext(GlobalContext);
   
    let navigate = useNavigate();

    return (
        <div id="cartProducts">
           
        </div>
    )
}