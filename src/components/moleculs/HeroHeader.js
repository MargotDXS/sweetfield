import React from "react";
import './HeroHeader.scss'

class HeroHeader extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <section className="heroHeader">
                <h1>Je m'appelle <span className="emph">Margot Douxchamps</span></h1>
                <br />
                <h1>Je suis <span className="emph">créative multidisciplinaire</span></h1>
                <h4>J'ai 21 ans et suis basée en Suisse mais travail volontiers pour des projets à l'étranger. Ouvertures d'esprit et curiosité sont mes principales valeurs.</h4>
            </section>
        )
    }
};

export default HeroHeader;