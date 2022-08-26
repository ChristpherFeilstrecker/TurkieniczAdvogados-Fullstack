import hands from "../../../../../images/tecnicos.jpg"

const search=(algo)=>{
    if(algo === "Kit_aquecedor_solar_piscina.png"){
        return "link"
    }
}
export default function SubSection3About2() {

    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">NOSSA HISTÓRIA</div>
            <div data-aos="fade" className="text-left-about-section-2">A história da Comercial e Instaladora Hidráulica Aggostini inica em janeiro
de 1987. O fundador Hilton Aggostini começou com as especialidades
hidráulicas e instalação e com o passar dos anos ampliou a gama de
produtos e assistência com a parte de aquecedores e metais sanitários.
Em três décadas de existência, a Aggostini segue com a missão de
satisfazer profissionais e clientes interessados em construir ou reformar
com qualidade. Dessa forma, a Aggostini se destaca a cada dia como uma
empresa séria, com uma equipe de técnicos treinados nas fábricas, em
contato permanente para possíveis soluções, garantindo a qualidade nos
produtos e serviços que presta.</div>
            <img data-aos="fade" className="image-section-2" src={hands} alt="hands" />
        </div>
    )
}