import useForm from "../../../../components/hooks/useForm";
import "./StyledIntroSection4.css";

export default function IntroSection4() {




    return (
        <div id="intro-section-4">
            <div className="container-section4">
                <div className="box-container-video-section4">
                    <div className="video-container">
                        <iframe className="video" src="https://www.youtube.com/embed/3Wf29RiKp70" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="box-container-section4">
                    <div className="text-container-section4">
                        <h3 className="title-text-section4" data-aos="fade-up">VIDEOS</h3>
                        <h4 className="title-text-section4" data-aos="fade-up">Descrição texto para seção dos videos etc...</h4>
                        <div className="btn-rigth-container-more margin-top" data-aos="fade-up">VER VIDEOS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}