import React from "react";
import Cfooter from "../parts/Cfooter";
import './homepage.scss';

import Cbackground from "../atoms/background";
import HeroHeader from "../moleculs/HeroHeader";

import Cbutton from "../atoms/Cbutton";
import Service from "../atoms/service";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <main className="gridContainer homepage">
                    <Cbackground />
                    <HeroHeader />
                    <Service serviceTitle="Graphisme" serviceDescription="Lorem ipsum just for testign stuff... and some more lorem ipsum always for testing stuff" url="https://picsum.photos/900/800"/>
                    <section className="buttons">
                        <Cbutton destinationPage="/contact" value="Je veux discuter avec toi" btnType="primary"/>
                        <Cbutton destinationPage="/caseStudies" value="Je veux voir plus de projets" />
                    </section>
                </main>
                <Cfooter />
            </>
        )
    }
}

export default Homepage;