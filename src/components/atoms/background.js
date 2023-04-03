import React from "react";
import './background.scss';

class Cbackground extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="bg whiteBlended">
                    <div className="grainyBg whiteBlended"></div>
                </div>
                
            </>
        )
    }
}

export default Cbackground;