import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyledTopBar.css";
import logo from "../../images/logo.png"

import GlobalContext from "../../components/global/globalContext";

export default function TopBar() {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    const setSearch = data.setSearch
    const setTitle = data.setTitle
    let [menu, setMenu] = useState(true)

    const navigateTo=()=>{
        navigate(`/aggostini/produtos`)
        window.scrollTo(0, 0)
        setSearch(`TODOS PRODUTOS`)
        setTitle(`TODOS PRODUTOS`)
        setMenu(true);
    }

    const menuOpen = () => {

        if (menu === false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }

    const navigateCloseMenu = ((nav) => {
        navigate(nav)
        setMenu(true);
        window.scrollTo(0, 0)
    })

    return (
        <header className="top-bar-container">
            <div className="top-bar">
                <div className="container-logo">
                    <div className="lines" onClick={() => setMenu(!menu)}>
                        <span className={menu?'line1':'line1-active'}></span>
                        <span className='line2'></span>
                        <span className={menu?'line3':'line3-active'}></span>
                    </div>
                    <img onClick={() => navigate(`/`)} className="logo" src={logo} alt="logo" />
                </div>
                <div id='nav-container' className="nav-container">
                    <div className={menu ? 'hide-nav-menu-container' : 'nav-menu-container'}>
                        <div className="nav-section ">
                            <ul className="nav-buttons">
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/`)}>INÍCIO</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/aggostini/sobre`)}>QUEM SOMOS</li>
                                <li className="nav-button" onClick={() => navigateTo()}>PRODUTOS</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/aggostini/assistenciatecnica`)}>ASSISTÊNCIA TÉCNICA</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/aggostini/contato`)}>CONTATO</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}