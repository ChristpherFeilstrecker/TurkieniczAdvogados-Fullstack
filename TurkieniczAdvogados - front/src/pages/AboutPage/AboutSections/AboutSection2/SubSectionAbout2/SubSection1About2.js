import hands from "../../../../../images/manutencao-aquecedor.jpg"

export default function SubSection1About2() {


    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">SOBRE NÓS</div>
            <div data-aos="fade" className="text-left-about-section-2">Com mais de três décadas de experiência no mercado, a Comercial e
Instaladora Hidráulica Aggostini tem como diferencial os melhores
profissionais e uma gama completa de produtos, garantindo a qualidade
na execução e manutenção de seu projeto.</div>
            <img data-aos="fade" className="image-section-2" src={hands} alt="manutenção" />
        </div>
    )
}