import React from 'react';
import Navbar from './Navbar';
import Example from './Example';
import { Carousel, ProgressBar, Button} from 'react-bootstrap';
import $ from 'jquery';

import 'bulma/css/bulma.min.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css';
import '../css/descargar.css';

import ImgSec1 from '../assets/ImgSec1.PNG';
import ImgSec2 from '../assets/ImgSec2.PNG';
import ImgSec3 from '../assets/ImgSec3.PNG';
import chat from '../assets/chitchat.png';

$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});


// const Descargar = () => {
class Descargar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = e => {
            this.setState({ target: e.target, show: !this.state.show });
          };
      
          this.state = {
            show: false,
            progress: 0,
          };
        
    }
    progressInstance = () =>{
        this.setState((state, props) => ({
            progress: 0
        }));
        for(let i=0;i<=100;i+=0.1){
            // this.setState({now: i});
            this.setState((state, props) => ({
                progress: i
            }));
        }
    };
    resetProgress = () =>{
        this.setState((state, props) => ({
            progress: 0
        }));
    };
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
                
                <section id="popover-section" className="section-area section-grey">
                    <div className='popover-container'>
                        <Example />
                    </div>
                    
                </section>
                <section id="section2" className="section-area section-white">
                    <div className="zoom-container">
                        <img src={chat} className="zoom" alt="zoom"/>
                    </div>
                    
                </section>
                <section id="section3" className="section-area section-grey">
                    {/* <ProgressBar animated now={now} label={`${now}%`} visuallyHidden /> */}
                    <Button variant="primary" onClick={this.progressInstance}>Primary</Button>
                    <Button variant="warning" onClick={this.resetProgress}>Reset</Button>
                    <ProgressBar animated now={this.state.progress} label={`${this.state.progress}%`}  visuallyHidden/>

                    
                    
                </section>
                
            </div>    
        )
    }
} 

export default Descargar