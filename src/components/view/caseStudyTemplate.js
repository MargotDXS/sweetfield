import React from "react";
import '../caseStudyTemplate.scss';
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
            //Changer le duration selon le nombre d'image: 100% si 2 images, 200% si 3 images, etc
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
            <main className="projet">
                {/* a remplir              ↓         ↓        ↓*/}
                <SubmenuCaseStudy info="Projet | Services | année"/>
                <section className="gridContainer">
                    <section className="mandat">
                        {/* mettre image de garde  ↓ */}
                        <img src="https://picsum.photos/900/800" />
                        {/* a remplir                           ↓        */}
                        <p className="black description">Description du projet</p>
                    </section>
                    <section className="cahierCharge">
                        {/* a remplir                           ↓        */}
                        <p className="black specifications">Description du cahier des charges</p>
                        <div className="scrollWrapper">
                            {/* mettre image dans l'animation scroll     ↓        */}
                            <img className="img2" src="https://picsum.photos/900/800" />
                            <img className="img2" src="https://picsum.photos/900/800" />
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