import React from "react";
import './Cfooter.scss';

class Cfooter extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <footer>
                <main>
                    <figure>logo</figure>
                    <div>contact</div>
                    <a>instagram</a>
                </main>
                <hr/>
                <p className="little copyright">
                    ©Sweetfield - 2023 
                </p>
            </footer>
        )
    }
}

export default Cfooter