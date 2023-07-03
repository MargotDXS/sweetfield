import React from "react";
import './submenuCaseStudy.scss'
import { Link } from "react-router-dom";
import Xmark from "../atoms/xMark" 

class SubmenuCaseStudy extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    
      handleScroll = () => {
        const submenu = document.querySelector('.submenu');
        const subMenuInfo = document.querySelectorAll('.submenu p')
        if (window.scrollY > 150) {
          submenu.classList.add('submenuScroll');
          subMenuInfo.forEach(el => el.classList.add('black'))
        } else {
          submenu.classList.remove('submenuScroll');
          subMenuInfo.forEach(el => el.classList.remove('black'))
        }
      };

    render() {
        return(
            <section className="submenu">
                <Link to="/caseStudies" className="closeSection">
                    <Xmark />
                    <p>Fermer le projet</p>
                </Link>
                <section className="infoSection">
                    <p>{this.props.info}</p>
                </section>
            </section>
        )
    }
}
export default SubmenuCaseStudy