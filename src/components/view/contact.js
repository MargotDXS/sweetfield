import React from "react";
import Cbackground from "../atoms/background";

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <main className="contact">
                <Cbackground />
                <a href="mailto:margot@douxchamps.ch">margot@douxchamps.ch</a>
            </main>
        )
    }
}

export default Contact