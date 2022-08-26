import hands from "../../../../../images/comercial-aggostini.jpg"

export default function SubSection2About2() {
    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">PRODUTOS E SERVIÇOS</div>
            <div data-aos="fade" className="text-left-about-section-2">Além desse respaldo técnico, o cliente conta com uma completa linha de
materiais hidráulicos, aquecedores de água, pressurizadores, material
para energia solar, louças e metais sanitários das melhores marcas como
Deca, Docol, Meber, Tigre, Aquebem, Bosch, Rinnai e Orbis.</div>
            <img data-aos="fade" className="image-section-2" src={hands} alt="hands" />
        </div>
    )
}