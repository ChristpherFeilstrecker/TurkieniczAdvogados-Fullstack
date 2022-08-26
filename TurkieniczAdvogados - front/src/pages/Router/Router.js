import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import "./StyledRouter.css";
import TopBar from '../TopBar/TopBar'
import Footer from '../Footer/Footer';
import IntroPage from '../IntroPage/IntroPage'
import ProductsPage from '../Products/ProductsPage';
import AboutPage from '../AboutPage/AboutPage'
import AssistancePage from '../AssistancePage/AssistancePage'
import ContactPage from '../ContactPage/ContactPage'
import CartPage from '../CartPage/CartPage'
import ErrorPage from '../ErrorPage/ErrorPage'
import DetailProductPage from '../DetailProductPage/DetailProductPage';
import logo from '../../images/logo.png';
import iconWhats from '../../images/whatsapp-fixed.png';

export const Router = () => {
  const [splash, setSplash] = useState(false)
  let [productID, setProductID] = useState('001')

  

useEffect(()=>{
  setSplash(true)
  setTimeout(()=>{
    setSplash(false)
  },4000)
},[])

  return (
<div>
  {splash?
  <div className='splash-screm'><img className="image-splash" src={logo} alt="caneca" /></div>
    :
    <BrowserRouter className="page">
      <div className='whats-icon-container'>
      <a href="https://api.whatsapp.com/send?phone=5551996829993&text=Olá! Gostária de solicitar um orçamento"
    target="_blank">
      <img className="whats-fixed-icon" src={iconWhats} alt="icon-whats"/>
    </a>       
      </div>
      <TopBar/>
      <Routes id="routes">
        <Route exact path={"/"} element={<IntroPage />} />
        <Route exact path={"/aggostini/sobre/*"} element={<AboutPage />} />
        <Route exact path={"aggostini/produtos"} element={<ProductsPage productID={productID} setProductID={setProductID} />} />
        <Route exact path={"/aggostini/assistenciatecnica"} element={<AssistancePage />} />
        <Route exact path={"/aggostini/contato"} element={<ContactPage />} />
        <Route exact path={"/aggostini/carrinho"} element={<CartPage />} />
        <Route exact path={"/aggostini/detalhe_produto"} element={<DetailProductPage productID={productID} />} />
        <Route element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    }
</div>
    


  )

}