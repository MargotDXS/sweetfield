import React from "react";
import './submenuCaseStudy.scss'
import { Link } from "react-router-dom";
import Xmark from "../atoms/xMark" 

class SubmenuCaseStudy extends React.Component {
    constructor(props) {
        super(props)
    };
    render() {
        return(
            <section className="submenu">
                <Link to="/caseStudies" className="closeSection">
                    <Xmark />
                    <p>Fermer le projet</p>
                </Link>
                <section className="infoSection">
                    <p>{this.props.info}</p>
                </section>
            </section>
        )
    }
}
export default SubmenuCaseStudy