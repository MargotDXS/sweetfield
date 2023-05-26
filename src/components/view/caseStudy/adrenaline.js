import React from "react";
import './adrenaline.scss';
import Xmark from "../../atoms/xMark";
import { Link } from "react-router-dom";
import Cfooter from "../../parts/Cfooter";

class Adrenaline extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
            <main className="gridContainer adrenaline">
                <Link to="/caseStudies" className="closeSection">
                    <Xmark />
                    <p>Fermer le projet</p>
                </Link>
                <section className="infoSection">
                    <p>Adrenaline | Graphisme | 2022</p>
                </section>
                <section className="test"></section>
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