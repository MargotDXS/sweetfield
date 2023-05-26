import React from "react";
import './adrenaline.scss';
import Cfooter from "../../parts/Cfooter";
import SubmenuCaseStudy from "../../moleculs/submenuCaseStudy";

class Adrenaline extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
            <main className="gridContainer adrenaline">
                <SubmenuCaseStudy info="Adrenaline | Graphisme | 2022"/>
                <img src="https://picsum.photos/900/800" />
                <p className="black">Dans le cadre d'un projet scolaire, il m'a été demandé de créer un logo et d'autres supports de communication pour une marque nommée Adrenaline active dans le domaine des sports de glisse été comme hiver.</p>
            </main>

            <div className="bg">
                <div className="grainyBg whiteBlended"></div>
            </div>
            <Cfooter />
            </>
        )
    }
}

export default Adrenaline;