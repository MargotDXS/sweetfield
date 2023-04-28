import React from "react";
import Cfooter from "../parts/Cfooter";
import './caseStudies.scss';
import CaseStudiesLine from "../moleculs/caseStudiesLine";
import CsTitle from "../moleculs/csTitle";
import Cbutton from "../atoms/Cbutton";

class CaseStudies extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
            <main className="gridContainer caseStudies">
                <h4 className="presentation">Voilà une liste de quelques projets que j'ai réalisé. Ce n'est pas une liste exhaustive mais elle te donnera une idée de ce que je peux faire.</h4>
                <CsTitle />
                <CaseStudiesLine projectName="Adrenaline" projectService="Graphisme" projectYear="2022" />
                <CaseStudiesLine projectName="A l'écoute de l'intime" projectService="Graphisme" projectYear="2022 - xx" />
                <CaseStudiesLine projectName="Swiss Tchoukball" projectService="Photographie" projectYear="2021 - xx" />
                <Cbutton btnType="primary" value="Je veux discuter avec toi" destinationPage="/contact"/>
            </main>
            <div className="bg">
                <div className="grainyBg whiteBlended"></div>
            </div>
            <Cfooter />
            </>
        )
    }
}

export default CaseStudies