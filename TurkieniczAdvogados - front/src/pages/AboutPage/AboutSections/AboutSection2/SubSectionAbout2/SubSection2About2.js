import produtoseservicos from "../../../../../images/servicos.jpg"

export default function SubSection2About2() {
    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">SERVIÇOS</div>
            <div data-aos="fade" className="text-left-about-section-2">Descrição dos serviços...  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut luctus risus. Fusce vitae felis tempus, laoreet turpis sed, ultricies ex. Pellentesque ut magna leo. Vestibulum eget tellus enim. Proin feugiat elit aucto.</div>
            <img data-aos="fade" className="image-section-2" src={produtoseservicos} alt="hands" />
        </div>
    )
}