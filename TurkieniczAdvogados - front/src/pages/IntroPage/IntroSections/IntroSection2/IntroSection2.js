import { SubTitleTagB } from "../../../../StyledGlobal";
import "./StyledIntroSection2.css";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";
import civel from "../../../../images/fotos/civil.png"

export default function IntroSection2() {
  const data = useContext(GlobalContext);
  const galerias = data.galerias
  const areas = data.areas

  console.log("area = ", areas)

  return (
    <div id="intro-section-2">
      <div className="title-container">
        <SubTitleTagB data-aos="fade-down" className="title-text">ÁREAS DE ATUAÇÃO</SubTitleTagB>
      </div>
      <div className="body-intro-section-2">
        <div className="collumn1">
          <div data-aos="fade-up" className="area-box-section-2">
            <img className="img-icon-section-2" src={areas[0].imagem} />
            <div className="img-text-section-2">{areas[0].nome}</div>
          </div>
          <div data-aos="fade-up" className="area-box-section-2">
            <img className="img-icon-section-2" src={areas[1].imagem} />
            <div className="img-text-section-2">{areas[1].nome}</div>

          </div>

           <div data-aos="fade-up"className="area-box-section-2">
            <img className="img-icon-section-2" src={areas[4].imagem} />
            <div className="img-text-section-2">{areas[4].nome}</div>
          </div>
          <div data-aos="fade-up" className="area-box-section-2">
            <img className="img-icon-section-2" src={areas[2].imagem} />
            <div className="img-text-section-2">{areas[2].nome}</div>
          </div>
          <div data-aos="fade-up" className="area-box-section-2">
            <img className="img-icon-section-2" src={areas[3].imagem} />
            <div className="img-text-section-2">{areas[3].nome}</div>

          </div>
         
        </div>

        <div className="middle_collumn">
          <div className="middle_collumn-text">O Escritório de Advocacia Turkienicz Advogados  é uma equipe multiprofissional ousada, atualizada em conhecimentos e rastreamento de jurisprudências, planejamentos e estratégias, com sólida estrutura de trabalho, técnicas, pesquisas e controles internos e, com advogados compromissados nos múltiplos segmentos do direito.

            Garimpa caso a caso o status da demanda, reconhece onde está, retrata para onde se quer ir e sincroniza objetivamente como ambiciona chegar lá. Por larga experiência no meio forense e arrojo, o escritório se especializou no acompanhamento, interface e controle do seu grande calibre de ações judiciais pregressas, remanescentes e novas, atendendo Clientes com diferencial maestria e excelência, na medida certa de suas necessidades. Não obstante, com foco monitorado nos inalienáveis serviços de êxito em sua assessoria preventiva, assistência corretiva, apoio consultivo ou na advocacia contenciosa, em tempo certo e com a intensidade devida.</div>
        </div>
        <div className="collumn2">
          <div className="area-box-section-2">
            <div className="img-text-section-2">{areas[5].nome}</div>
            <img className="img-icon-section-2" src={areas[5].imagem} />
          </div>

          <div data-aos="fade-up" className="area-box-section-2">
            <div className="img-text-section-2">{areas[6].nome}</div>
            <img className="img-icon-section-2" src={areas[6].imagem} />
          </div>

          <div data-aos="fade-up" className="area-box-section-2">
            <div className="img-text-section-2">{areas[7].nome}</div>
            <img className="img-icon-section-2" src={areas[7].imagem} />
          </div>

          <div data-aos="fade-up" className="area-box-section-2">
            <div className="img-text-section-2">{areas[8].nome}</div>
            <img className="img-icon-section-2" src={areas[8].imagem} />
          </div>

          <div data-aos="fade-up" className="area-box-section-2">
            <div className="img-text-section-2">{areas[9].nome}</div>
            <img className="img-icon-section-2" src={areas[9].imagem} />
          </div>

        </div>
      </div >


    </div>
  )
}