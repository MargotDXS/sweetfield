import React from "react";
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
                        <li className="black">menu 1</li>
                        <li className="black">menu 2</li>
                        <li className="black">menu 3</li>
                    </ul>
                    <button className="burgerMenu" onClick={this.toggleMenu}> burger </button>
                </nav>
                <hr/>
            </header>
        )
    }
}

export default Cheader;