import React from "react";
import './adrenaline.scss';
import Cfooter from "../../parts/Cfooter";
import SubmenuCaseStudy from "../../moleculs/submenuCaseStudy";
import Cbutton from "../../atoms/Cbutton";

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
                <p className="black description">Dans le cadre d'un projet scolaire, il m'a été demandé de créer un logo et d'autres supports de communication pour une marque nommée Adrenaline active dans le domaine des sports de glisse été comme hiver.</p>

                <p className="black specifications">Je devais réaliser un logo, un design de voile de planche à voile, d'un snow ainsi qu'une affiche pour l'annonce d'un concert au pieds des pistes. La voile et le snow ne devait pas nécessairement respecter l'identité graphique de la marque mais il fallait par contre prendre en compte les spécificités techniques de ses sports.</p>
                <img class="img2" src="https://picsum.photos/900/800" />

                <Cbutton destinationPage="/contact" value="Je veux discuter avec toi" btnType="primary"/>
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