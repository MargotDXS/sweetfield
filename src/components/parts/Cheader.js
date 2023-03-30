import React from "react";
import './Cheader.scss';

class Cheader extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <header>
                <nav>
                    <figure>logo</figure>
                    <ul>
                        <li>menu 1</li>
                        <li>menu 2</li>
                        <li>menu 3</li>
                    </ul>
                </nav>
                <hr/>
            </header>
        )
    }
}

export default Cheader;