import "./StyledIntroSection1.css";
import img1 from "../../../../images/carrossel/asa.jpg"
import img2 from "../../../../images/carrossel/escalada.jpg"
import img3 from "../../../../images/carrossel/paraquedas.jpg"
import img4 from "../../../../images/carrossel/trilha.jpg"
import { useEffect, useState } from "react";

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
                <img src={imgs[imgIndex].img} className="slide-img" alt="img1" />

            </div>
            <div className="text-container">
                <div className={"description-text"+efect}>{imgs[imgIndex].description}</div>
            </div>
            
        </div>
    )
}