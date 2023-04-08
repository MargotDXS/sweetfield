import React from "react";
import Cbackground from "../atoms/background";
import './contact.scss'

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <main className="contactPage">
                <Cbackground />
                <a href="mailto:margot@douxchamps.ch">
                    <h1>margot@douxchamps.ch</h1>
                </a>
                <a href="tel: +41 79 122 79 36">
                    <h4>+41 79 122 79 36</h4>
                </a>
            </main>
        )
    }
}

export default Contact