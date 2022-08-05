import "./StyledIntroSection1.css";
import img1 from "../../../../images/fotos_iniciais/carrossel/asa.jpg"
import img2 from "../../../../images/fotos_iniciais/carrossel/escalada.jpg"
import img3 from "../../../../images/fotos_iniciais/carrossel/paraquedas.jpg"
import img4 from "../../../../images/fotos_iniciais/carrossel/trilha.jpg"
import { useEffect, useState } from "react";

import arrowLeft from "../../../../images/arrow-to-left.png"
import arrowRigth from "../../../../images/arrow-to-rigth.png"

export default function IntroSection1() {

    const [imgIndex, setImgIndex] = useState(0)
    let efect = imgIndex.toString()
    const imgs = [{ id: 0, img: img1, description: "Um bom desafio tem em si sua recompensa" },
    { id: 1, img: img2, description: "Na estratégia, decisiva é a aplicação" },
    { id: 2, img: img3, description: "A dedicação é fruto da persistência" },
    { id: 3, img: img4, description: "Turkienicz Advogados Associados" }]

    const switchImgToLeft = (() => {
        if (imgIndex + 1 === imgs.length) {
            setImgIndex(0)

        } else {
            setImgIndex(imgIndex + 1)
        }

    })

    const switchImgToRigth = (() => {
        if (imgIndex === 0) {
            setImgIndex(imgIndex - 1)

        } else {
            setImgIndex(imgIndex - 1)
        }

    })

    useEffect(() => {
        console.log("entrou")
        setTimeout(() => {
            nextImage();
        }, 5000)
    }, [])

    useEffect(() => {
        console.log("entrou")
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

/*
            <div className="arrow-container">
                <img onClick={() => switchImgToRigth()} className="arrow" src={arrowLeft} alt="car-icon" />
                <img onClick={() => switchImgToLeft()} className="arrow" src={arrowRigth} alt="car-icon" />
            </div>
            */
    return (
        <div id="intro-section-1">
            <div className={"slide-container"}>
                <img src={imgs[imgIndex].img} className="slide-img" alt="img1" />

            </div>
            <div className="text-container">
                <div className={"description-text"+efect}>{imgs[imgIndex].description}</div>
            </div>
            
        </div>
    )
}