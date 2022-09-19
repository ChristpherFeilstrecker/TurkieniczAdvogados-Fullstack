import nossahistoria from "../../../../../images/nossahistoria.jpg"

export default function SubSection3About2() {

    return (
        <div className="left-container-about-sec-2">
            <div data-aos="fade-left" className="title-left-about-sec-2">NOSSA HISTÓRIA</div>
            <div data-aos="fade" className="text-left-about-sec-2">Texto descrição......</div>
            <img data-aos="fade" className="image-sec-2" src={nossahistoria} alt="hands" />
        </div>
    )
}