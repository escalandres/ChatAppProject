import React from 'react';
import 'bulma/css/bulma.min.css'
import '../css/home.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Navbar';
import Example from './Example';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Popover, ButtonToolbar, Button, Overlay, OverlayTrigger } from 'react-bootstrap';

import '../css/descargar.css';
import ImgSec1 from '../assets/ImgSec1.PNG';
import ImgSec2 from '../assets/ImgSec2.PNG';
import ImgSec3 from '../assets/ImgSec3.PNG';
import cellphone from '../assets/bart.jpg';
// import Popover from 'react-bootstrap/Popover';
// import Overlay from 'react-bootstrap/Overlay';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { Carousel} from 'react-bootstrap';

const popover = () => (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
        </Popover.Content>
    </Popover>
    );
// const Descargar = () => {
class Descargar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = e => {
            this.setState({ target: e.target, show: !this.state.show });
          };
      
          this.state = {
            show: false
          };
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <section id="section4" className="section-area section-white">
                    <Carousel>
                        <Carousel.Item>
                            <img className="carousel-img" src={ImgSec1} alt="First slide"/>
                            {/* <a data-bs-toggle="popover" tittle="Cellphone" data-bs-trigger="focus" data-bs-content="Chat App es la mejor forma de comunicarte en tu celular">
                                <img className="carousel-img" src={ImgSec1} alt="First slide"/>
                                {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            {/*</a> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={ImgSec2} alt="Second slide"/>
                            {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={ImgSec3} alt="Third slide" />
                            {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        
                    </Carousel>
                </section>
                
                <section id="section1" className="section-area section-grey">
                    
                </section>
                <section id="section2" className="section-area section-white">
                
                </section>
                <section id="section3" className="section-area section-grey">
                
                <Example />
                </section>
                
            </div>    
        )
    }
} 

export default Descargar