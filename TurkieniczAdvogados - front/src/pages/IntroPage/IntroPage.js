import IntroSection1 from "./IntroSections/IntroSection1/IntroSection1";
import IntroSection2 from "./IntroSections/IntroSection2/IntroSection2";
import IntroSection3 from "./IntroSections/IntroSection3/IntroSection3";
import IntroSection4 from "./IntroSections/IntroSection4/IntroSection4";
import "./StyledIntroPage.css";

export default function IntroPage() {
    /*
    <IntroSection2/>
                <IntroSection3/>
                <IntroSection4/>
                */
    return (
        <div id="intro-page">
            <IntroSection1 />

        </div>
    )
}