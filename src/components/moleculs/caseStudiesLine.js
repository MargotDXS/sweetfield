import React from "react";
import './caseStudiesLine.scss';
import { Link } from "react-router-dom";

class CaseStudiesLine extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <article className="csPresentation">
                <Link to={this.props.destinationPage} >
                    <div className="projectsDescription">
                        <p>{this.props.projectName}</p>
                        <p>{this.props.projectService}</p>
                        <p>{this.props.projectYear}</p>
                    </div>
                    <hr />
                </Link>
            </article>
            
        )
    }
}

export default CaseStudiesLine;