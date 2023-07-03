import React from "react";
import './service.scss';

class Service extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="service">
                <div>
                    <h2 className="black">{this.props.serviceTitle}</h2>
                    <p className="black">{this.props.serviceDescription}</p>
                </div>
                <img src={this.props.url} alt={this.props.alt} ></img>
            </section>
        )
    }
}

export default Service;