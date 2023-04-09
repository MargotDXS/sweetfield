import React from "react";
import {Link} from 'react-router-dom';

import './Cbutton.scss';

class Cbutton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {btnType} = this.props;
        return(
            <Link to="{this.props.destinationPage}">
                <button className={`btn ${btnType === 'primary' ? 'primaryBtn' : 'secondaryBtn'}`}>{this.props.value}</button>
            </Link>
        )
    }
}

export default Cbutton;