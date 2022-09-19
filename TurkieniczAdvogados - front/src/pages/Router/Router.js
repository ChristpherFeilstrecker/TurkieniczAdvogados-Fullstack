import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import "./StyledRouter.css";
import logo from '../../images/pclogo.jpg';
import iconWhats from '../../images/whatsapp-fixed.png';

import TopBar from '../TopBar/TopBar'
import Footer from '../Footer/Footer';
import IntroPage from '../IntroPage/IntroPage'
import ActingPage from '../ActingPage/ActingPage'
import AboutPage from '../AboutPage/AboutPage'
import VideosPage from '../VideosPage/VideosPage'
import VideoPlayerPage from '../VideoPlayerPage/VideoPlayerPage'
import NewsPage from '../NewsPage/NewsPage';
import QueryPage from '../QueryPage/QueryPage';
import AdminPage from '../AdminPage/AdminPage';

export const Router = () => {
  const [splash, setSplash] = useState(false)
  let [productID, setProductID] = useState('001')

useEffect(()=>{
  setSplash(false)
  setTimeout(()=>{
    setSplash(false)
  },4000)
},[])

  return (
<div>
  {splash?
  <div className='splash-screm'><img className="image-splash" src={logo} alt="logo" /></div>
    :
    <BrowserRouter className="page">
      <div className='whats-icon-container'>
      <a href="https://api.whatsapp.com/send?phone=5551999999999&text=Olá! Gostária de solicitar um serviço"
    target="_blank" rel="noreferrer">
      <img className="whats-fixed-icon" src={iconWhats} alt="icon-whats"/>
    </a>       
      </div>
      <TopBar/>
      <Routes id="routes">
        <Route exact path={"/"} element={<IntroPage />} />
        <Route exact path={"/atuacao"} element={<ActingPage />} />
        <Route exact path={"/sobre/*"} element={<AboutPage />} />
        <Route exact path={"/equipe"} element={<VideosPage />} />
        <Route exact path={"/consulta"} element={<QueryPage />} />
        <Route exact path={"/noticias"} element={<NewsPage />} />
        <Route exact path={"/player"} element={<VideoPlayerPage />} />
        <Route exact path={"/admin/*"} element={<AdminPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    }
</div>
    


  )

}