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
                    <svg id="logo_footer" data-name="Calque 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.95 136.54">
                        <path class="cls-1" d="m109.4,119.5c-.41-.11-.77-.28-1.18-.45-.33-.11-.65-.28-.98-.4-.77-.34-1.51-.68-2.28-1.02-5.58-2.61-10.68-5.85-15.16-9.71-.57-.45-1.14-.97-1.71-1.53-.12-.11-.29-.23-.41-.34-.45-.4-.9-.85-1.3-1.31-4.97-4.83-8.92-10.34-11.61-16.36-6.15-3.12-14.26-5.79-22.82-8.46,2.85,12.78,10.84,25.21,22.82,35.1.24.23.49.4.77.62.53.45,1.1.85,1.67,1.25.77.68,1.59,1.25,2.4,1.82,4.36,3.07,9.09,5.79,14.14,8.18.24.11.49.23.73.34.73.34,1.47.68,2.24.97.94.4,1.92.8,2.89,1.19,11.57,4.49,24.32,6.93,37.24,7.1v-11.59c-9.78-.23-18.95-2.04-27.46-5.4Z"/>
                        <path class="cls-1" d="m74.47,67.4c-.69-.23-1.34-.45-2-.68-.08-.06-.2-.06-.29-.11-.12-.06-.2-.11-.33-.17-.45-.17-.94-.34-1.39-.45-5.66-1.93-11.53-3.69-17.24-5.45l-1.91-.57-1.91-.57h-.08c-.65-.23-1.3-.45-1.96-.62-21.39-6.64-37.49-12.95-37.49-26.24,0-14.37,19.11-20.78,38.1-20.78,8.72,0,17.32,1.36,25.63,4.09,3.99-3.18,8.35-6.13,13-8.63C74.56,2.49,61.64.16,48.19.16,27.98.16,10.63,4.99.2,13.51v39.35c11.08,8.86,28.85,14.25,46.08,19.48l.53.17,2.12.62.73.23c.49.17.94.28,1.39.4,7.9,2.44,15.04,4.77,21.11,7.44.9.34,1.79.74,2.61,1.14.73.34,1.43.68,2.08,1.02.24.11.49.23.73.4,5.99,3.12,13.53,8.4,13.53,17.6,0,.28,0,.62-.04.91,4.93,4.37,10.68,8.01,17.07,10.73,2.16-4.09,3.3-8.52,3.3-13.29,0-16.7-19.27-26.07-36.96-32.31Z"/>
                        <path class="cls-1" d="m87.48,130.01c-9.94,4.26-22.49,6.53-36.06,6.53-18.62,0-36.39-4.26-51.42-12.32v-16.7c15.16,11.64,32.15,17.32,51.91,17.32,8.27,0,15.93-1.25,22.12-3.69,4.12,3.29,8.6,6.25,13.45,8.86Z"/>
                        <path class="cls-1" d="m99.59,7.1c-1.06.45-2.12.91-3.18,1.36-.9.34-1.75.74-2.61,1.14-.24.11-.49.23-.69.34-4.93,2.33-9.53,5.05-13.77,8.06-.86.62-1.67,1.25-2.49,1.87-.65.45-1.26.97-1.87,1.48-.24.17-.49.4-.69.57-11.04,9.26-18.5,20.44-21.72,32.6l1.75.51c5.54,1.65,11.25,3.41,16.83,5.28,1.91-11.7,8.23-22.6,18.13-31.18.69-.68,1.43-1.25,2.16-1.82h.04c.41-.34.81-.68,1.22-1.02.29-.23.57-.4.86-.62,2.73-1.99,5.58-3.81,8.52-5.34.08,0,.12-.06.16-.11,2.16-1.14,4.36-2.1,6.64-3.01.69-.28,1.39-.57,2.08-.79,8.15-3.01,16.99-4.66,26-4.88V0c-13.2.17-25.91,2.67-37.36,7.1Z"/>
                    </svg>
                    <div className="contact">
                        <p className="bold">Sweetfield creative</p>
                        <a href="mailto:margot@douxchamps.ch">margot@douxchamps.ch</a>
                        <br/>
                        <a href="tel:+41 79 122 79 36">+41 79 122 79 36</a>
                    </div>
                    <a className="instaLink" href="https://www.instagram.com/sweetfield_creatives/" target="_blank">instagram</a>
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