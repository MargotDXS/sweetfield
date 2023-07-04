import React from "react";
import './adrenaline.scss';
import Cfooter from "../../parts/Cfooter";
import SubmenuCaseStudy from "../../moleculs/submenuCaseStudy";
import Cbutton from "../../atoms/Cbutton";
import ScrollMagic from 'scrollmagic';

class Adrenaline extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.splitScroll();
      }
    
      splitScroll() {
        const controller = new ScrollMagic.Controller();
    
        new ScrollMagic.Scene({
          duration: '100%',
          triggerElement: '.specifications',
          triggerHook: 0.4,
        })
        .setPin('.specifications')
        .addTo(controller);
      }

    render() {
        return(
            <>
            <main className="adrenaline">
                <SubmenuCaseStudy info="Adrenaline | Graphisme | 2022"/>
                <section className="gridContainer">
                    <section className="mandat">
                        <img src="https://picsum.photos/900/800" />
                        <p className="black description">Dans le cadre d'un projet scolaire, il m'a été demandé de créer un logo et d'autres supports de communication pour une marque nommée Adrenaline active dans le domaine des sports de glisse été comme hiver.</p>
                    </section>
                    <section className="cahierCharge">
                        <p className="black specifications">Je devais réaliser un logo, un design de voile de planche à voile, d'un snow ainsi qu'une affiche pour l'annonce d'un concert au pieds des pistes. La voile et le snow ne devait pas nécessairement respecter l'identité graphique de la marque mais il fallait par contre prendre en compte les spécificités techniques de ses sports.</p>
                        <div className="scrollWrapper">
                            <img class="img2" src="https://picsum.photos/900/800" />
                            <img class="img2" src="https://picsum.photos/900/800" />
                        </div>
                    </section>

                    <Cbutton destinationPage="/contact" value="Je veux discuter avec toi" btnType="primary"/>
                </section>
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