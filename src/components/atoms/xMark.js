import React from "react";
import './xMark.scss';

class Xmark extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <svg viewBox="0 0 16.9 16.9" className="xMark">
                <g>
		            <path className="st0" d="M16.1,16.6c-0.1,0-0.3,0-0.4-0.1L0.1,0.9C0,0.7,0,0.3,0.1,0.1s0.5-0.2,0.7,0l15.6,15.6c0.2,0.2,0.2,0.5,0,0.7C16.3,16.5,16.2,16.6,16.1,16.6z"/>
		            <path className="st0" d="M0.5,16.6c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7L15.7,0.1c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7L0.9,16.4C0.8,16.5,0.6,16.6,0.5,16.6z"/>
	            </g>
            </svg>
        )
    }
}

export default Xmark