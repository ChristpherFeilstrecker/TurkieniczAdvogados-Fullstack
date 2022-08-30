import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyledTopBar.css";
import logo from "../../images/pclogo.jpg"

export default function TopBar() {
    let navigate = useNavigate();
    let [menu, setMenu] = useState(true)

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
    })

    return (
        <header className="top-bar-container">
            <div className="top-bar">


                <div className="lines" onClick={() => setMenu(!menu)}>
                    <span className={menu ? 'line1' : 'line1-active'}></span>
                    <span className='line2'></span>
                    <span className={menu ? 'line3' : 'line3-active'}></span>
                </div>
                <div className="container-logo">
                    <img onClick={() => navigate(`/`)} className="logo" src={logo} alt="logo" />
                </div>
                <div id='nav-container' className="nav-container">
                    <div className={menu ? 'hide-nav-menu-container' : 'nav-menu-container'}>
                        <div className="nav-section ">
                            <ul className="nav-buttons">
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/`)}>Início</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/atuacao`)}>Áreas de Atuação</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/sobre`)}>Quem Somos</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/videos`)}>Videos</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/consulta`)}>Consulta Processo</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/consulta`)}>Noticias</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}