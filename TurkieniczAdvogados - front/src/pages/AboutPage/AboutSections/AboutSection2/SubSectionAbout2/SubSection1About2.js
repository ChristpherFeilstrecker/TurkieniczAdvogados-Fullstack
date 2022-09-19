import sobrenos from "../../../../../images/sobrenos.jpg"

export default function SubSection1About2() {


    return (
        <div className="left-container-about-sec-2">
            <div data-aos="fade-left" className="title-left-about-sec-2">SOBRE NÓS</div>
            <div data-aos="fade" className="text-left-about-section-2">Texto descrição......</div>
            <img data-aos="fade" className="image-sec-2" src={sobrenos} alt="hands" />
        </div>
    )
}