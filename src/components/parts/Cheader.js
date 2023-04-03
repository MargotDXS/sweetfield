import React from "react";
import {Link} from 'react-router-dom';
import './Cheader.scss';

class Cheader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
        }
    }

    toggleMenu = () => {
        this.setState({
          isMenuOpen: !this.state.isMenuOpen
        });
      };
      
    render() {
        return(
            <header>
                <nav>
                    <figure>logo</figure>
                    <ul className={this.state.isMenuOpen ? 'active' : ''}>
                        <li>
                            <Link className="navLink" to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link className="navLink" to="/caseStudies">Case studies</Link>
                        </li>
                        <li>
                            <Link className="navLink" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <button className="burgerMenu" onClick={this.toggleMenu}> burger </button>
                </nav>
                <hr/>
            </header>
        )
    }
}

export default Cheader;