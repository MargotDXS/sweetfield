import React from "react";
import Cbackground from "../atoms/background";
import './contact.scss'

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo({ top: 0, left: 0 });
    }
    render() {
        return(
            <main className="contactPage">
                <div className="bg">
                    <div className="grainyBg"></div>
                </div>
                
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