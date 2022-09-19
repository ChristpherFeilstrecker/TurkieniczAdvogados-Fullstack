import "./StyledIntroSection1.css";
import img1 from "../../../../images/carrossel/asa.jpg"
import img2 from "../../../../images/carrossel/escalada.jpg"
import img3 from "../../../../images/carrossel/paraquedas.jpg"
import img4 from "../../../../images/carrossel/trilha.jpg"
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../../components/global/globalContext";

export default function IntroSection1() {
    const data = useContext(GlobalContext);
    const [imgIndex, setImgIndex] = useState(0)
    let efect = imgIndex.toString()

    const imgs = data.destaques


    useEffect(() => {
        setTimeout(() => {
            nextImage();
        }, 5000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            nextImage();
        }, 5000)
    }, [imgIndex])

    function nextImage() {

        if (imgIndex + 1 === imgs.length) {
            setImgIndex(0)

        } else {
            setImgIndex(imgIndex + 1)
        }
    }

    return (
        <div id="intro-section-1">
            <div className={"slide-container"}>
                <img src={imgs[imgIndex].imagem} className="slide-img" alt="img1" />

            </div>
            <div className="text-container">
                <div className={"description-text"+efect}>{imgs[imgIndex].descricao}</div>
            </div>
            
        </div>
    )
}