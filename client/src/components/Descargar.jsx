import React from 'react';
import 'bulma/css/bulma.min.css'
import '../css/home.css';
import 'font-awesome/css/font-awesome.min.css';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import Navbar from './Navbar';
import '../css/descargar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import ImgSec1 from '../assets/ImgSec1.PNG';
import ImgSec2 from '../assets/ImgSec2.PNG';
import ImgSec3 from '../assets/ImgSec3.PNG';

// const Descargar = () => {
class Descargar extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <div>
                <Navbar />
                <Carousel>
                    <Carousel.Item>
                        <img className="carousel-img" src={ImgSec1} alt="First slide"/>
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={ImgSec2} alt="Second slide"/>
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={ImgSec3} alt="Third slide" />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>    
        )
    }
} 

export default Descargar