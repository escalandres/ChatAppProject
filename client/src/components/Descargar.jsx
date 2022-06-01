import React, {useState} from 'react';
import { Carousel, ProgressBar, Button, DropdownButton, Dropdown, Alert, ToastContainer, Toast} from 'react-bootstrap';
import $ from 'jquery';
import Navbar from './Navbar';
import Example from './Example';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
// import fileDownload from 'js-file-download';
import { useDownloadFile } from "./useDownloadFile";
import Downloader from './Downloader';

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

function Toastt(){
    const toa = document.getElementById('toast-container');
    toa.classList.remove('hidden');
    setTimeout(() => {  toa.classList.add('hidden'); }, 3000);
}

function Alertt(){
    const ale = document.getElementById('alert-container');
    ale.classList.remove('hidden');
    setTimeout(() => {  ale.classList.add('hidden'); }, 3000);
}

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
                    <br></br>
                    <Button id="float-btn" variant="primary" style={{position: 'fixed', top: '80%', right: 10}}>
                        <a className="a-btn" href="login"><FontAwesomeIcon className="fa-solid chat-btn__icon" icon="fa-comment-dots" /></a>
                    </Button>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#" onClick={Alertt}>Alert action</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={Toastt}>Toast action</Dropdown.Item>
                    </DropdownButton>
                    <br></br>                
                    <ToastContainer id="toast-container" className="hidden">
                        <Toast>
                            <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small className="text-muted">just now</small>
                            </Toast.Header>
                            <Toast.Body>Llene el captcha</Toast.Body>
                        </Toast>
                    </ToastContainer>
                    <Alert key='warning' variant="warning" id="alert-container" className="hidden">
                        Debe llenar el captcha
                    </Alert>
                </section>
                
            </div>    
        )
    }
} 

export default Descargar