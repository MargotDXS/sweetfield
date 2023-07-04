import React from "react";
import '../caseStudyTemplate.scss';
import Cfooter from "../../parts/Cfooter";
import SubmenuCaseStudy from "../../moleculs/submenuCaseStudy";
import Cbutton from "../../atoms/Cbutton";
import ScrollMagic from 'scrollmagic';

class SwissTchoukball extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo({ top: 0, left: 0 });
        this.splitScroll();
    }
    
    splitScroll() {
        const controller = new ScrollMagic.Controller();
    
        new ScrollMagic.Scene({
          duration: '250%',
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
                <SubmenuCaseStudy info="Swiss Tchoukball | Photographie | 2021 - xx"/>
                <section className="gridContainer">
                    <section className="mandat">
                        <img src="../imagesCaseStudy/swissTchoukball/main.png" />
                        <p className="black description">J'ai l'occasion depuis 2021 de faire des photos pour la fédération suisse de tchoukball ainsi que d'autres organisations de tchoukball en Suisse.</p>
                    </section>
                    <section className="cahierCharge">
                        <p className="black specifications">Depuis décembre 2021, je vais régulièrement faire des photos lors d'évènements de tchoukball en Suisse. Mon rôle est de faire des photos d'ambiance, de jeux, etc. J'ai par exemple pu faire des photos lors des swiss Final Four, des tchoukball Geneva Indoor et du championnat féminin.</p>
                        <div className="scrollWrapper">
                            <img className="img2" src="../imagesCaseStudy/swissTchoukball/_S6A0230.jpg" />
                            <img className="img2" src="../imagesCaseStudy/swissTchoukball/_S6A3920.jpg" />
                            <img className="img2" src="../imagesCaseStudy/swissTchoukball/_S6A4014.jpg" />
                            <img className="img2" src="../imagesCaseStudy/swissTchoukball/_S6A3907.jpg" />
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

export default SwissTchoukball;