import React from "react";
import './caseStudiesLine.scss';

class CaseStudiesLine extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <article className="csPresentation">
                <div className="projectsDescription">
                    <p>{this.props.projectName}</p>
                    <p>{this.props.projectService}</p>
                    <p>{this.props.projectYear}</p>
                </div>
                <hr />
            </article>
        )
    }
}

export default CaseStudiesLine;