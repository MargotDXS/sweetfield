import React from "react";
import Cfooter from "../parts/Cfooter";
import './homepage.scss';

import Cbackground from "../atoms/background";
import HeroHeader from "../moleculs/HeroHeader";

import Cbutton from "../atoms/Cbutton";

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
                </main>
                <Cbutton destinationPage="/contact" value="Je veux voir plus de projets" />
                <Cbutton destinationPage="/contact" value="Je veux discuter avec toi" btnType="primary"/>
                <Cfooter />
            </>
        )
    }
}

export default Homepage;