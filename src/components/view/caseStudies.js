import React from "react";
import Cfooter from "../parts/Cfooter";
import './caseStudies.scss';

class CaseStudies extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
            <div className="bg">
                <div className="grainyBg whiteBlended"></div>
            </div>
            <Cfooter />
            </>
        )
    }
}

export default CaseStudies