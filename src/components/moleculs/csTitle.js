import React from "react";
import './csTitle.scss';

class CsTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <article className="csTitle">
                <div className="projectsDescription">
                    <h3>Projet</h3>
                    <h3>Service</h3>
                    <h3>Année</h3>
                </div>
                <hr />
            </article>
        )
    }
}

export default CsTitle;