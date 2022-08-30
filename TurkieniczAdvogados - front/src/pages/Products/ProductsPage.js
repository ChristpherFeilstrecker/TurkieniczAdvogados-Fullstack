import { useNavigate } from "react-router-dom";
import "./StyledProductsPage.css";
import CardProducts from "./CardProducts";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../components/global/globalContext";



export default function ProductsPage(props) {
    const data = useContext(GlobalContext);
    let navigate = useNavigate();


    return (
        <div id="productsPage">

         

        </div>
    )
}