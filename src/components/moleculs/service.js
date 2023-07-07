import React from "react";
import './service.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

class Service extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        gsap.registerPlugin(ScrollTrigger);
    
        const timeline = gsap.timeline();
    
        timeline.fromTo('.imageService3', { height: '80vh', delay: 5 }, { height: 0 });
        timeline.from('.service2', { y: window.innerHeight * 1.1 }, '<');
        timeline.fromTo('.imageService2', { height: '80vh', delay: 5 }, { height: 0 });
        timeline.from('.service3', { y: window.innerHeight * 1.1 }, '<');
    
        ScrollTrigger.create({
          trigger: '.service',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
          /* snap: 0.5, */
          pin: true,
          animation: timeline,
        });
      }

    render() {
        return (
            <section className="service">
                <section className="left">
                    <div className="service1">
                        <h2 className="black">Graphisme</h2>
                        <p className="black">
                        Je réalise pour vous et avec vous une identité de marque, des affiches, des flyers et toutes autres types de supports de communication.
                        </p>
                    </div>
                    <div className="service2">
                        <h2 className="black">Web</h2>
                        <p className="black">
                        Je réalise des sites internet des maquettes au développement. Je choisirais une solution technique adaptée à vos besoins. 
                        </p>
                    </div>
                    <div className="service3">
                        <h2 className="black">Photographie</h2>
                        <p className="black">
                        Je réalise des shooting sur demande que se soit portraits, sport, évènements ou autres besoins.
                        </p>
                    </div>
                </section>
                <section className="right">
                    <div className="imageService1">
                    <img src="https://picsum.photos/800/600" alt="Image 1" />
                    </div>
                    <div className="imageService2">
                    <img src="https://picsum.photos/500/300" alt="Image 2" />
                    </div>
                    <div className="imageService3">
                    <img src="https://picsum.photos/400/300" alt="Image 3" />
                    </div>
                </section>
            </section>
        )
    }
}

export default Service;
