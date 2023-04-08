import React from "react";
import Cfooter from "../parts/Cfooter";
import './homepage.scss';

import Cbackground from "../atoms/background";
import HeroHeader from "../moleculs/HeroHeader";

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
                <Cfooter />
            </>
        )
    }
}

export default Homepage;