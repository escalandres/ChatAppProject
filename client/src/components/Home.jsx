// Before
// import { render } from 'react-dom';

// import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css'
import '../css/home.css'
import 'font-awesome/css/font-awesome.min.css';
import App from '../App';

import robot from '../assets/robot.png';
import chat from '../assets/chat.png';
import chatUser from '../assets/chatUser.png';
import ImgSec1 from '../assets/ImgSec1.PNG';
import ImgSec2 from '../assets/ImgSec2.PNG';
import ImgSec3 from '../assets/ImgSec3.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faSolid, faDownload, icons  } from '@fortawesome/fontawesome-free-solid';


function darkMode(){
    const darkModeInput = document.getElementById('darkModeInput');
    const darkModeLabel = document.getElementById('darkModeLabel');
    const darkModeSpan = document.getElementById('darkModeSpan');
    if(darkModeInput.checked===true){
        darkModeSpan.classList.add("dark-theme-span");
        darkModeSpan.classList.remove("light-them-span");
        darkModeLabel.classList.add("dark-theme-toggle");
        darkModeLabel.classList.remove("light-theme-toggle");
        document.documentElement.style.setProperty('--background-color', 'var(--body-bg-dark)'); //--body-bg-dark
        document.documentElement.style.setProperty('--section-color', 'var(--white)'); //--white
        document.documentElement.style.setProperty('--section-background-off', 'var(--body-bg-dark)'); //--body-bg-dark
        document.documentElement.style.setProperty('--section-background-white', 'var(--dt-darkest)'); //--dt-darkest
        
    }
    else{
        darkModeSpan.classList.remove("dark-theme-span");
        darkModeSpan.classList.add("light-them-span");
        darkModeLabel.classList.remove("dark-theme-toggle");
        darkModeLabel.classList.add("light-theme-toggle");
        document.documentElement.style.setProperty('--background-color', 'var(--bluish-purple)');
        document.documentElement.style.setProperty('--section-color', 'var(--not-quite-dark)'); //--not-quite-dark
        document.documentElement.style.setProperty('--section-background-off', 'var(--off-white)'); //--body-bg
        document.documentElement.style.setProperty('--section-background-white', 'var(--white)'); //--white
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });

// const navbarBurger = () =>{
//     document.addEventListener('DOMContentLoaded', () => {
//         // Get all "navbar-burger" elements
//         const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
//         // Check if there are any navbar burgers
//         if ($navbarBurgers.length > 0) {
//           // Add a click event on each of them
//           $navbarBurgers.forEach( el => {
//             el.addEventListener('click', () => {
//               // Get the target from the "data-target" attribute
//               const target = el.dataset.target;
//               const $target = document.getElementById(target);
//               // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//               el.classList.toggle('is-active');
//               $target.classList.toggle('is-active');
//             });
//           });
//         }
//       });
// }


// import logo from '../assets/logo.svg';

//const container = document.getElementById('app');


// After

//const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
    // root.render(<App />, document.getElementById('root'));
}

const Home = () => {
    return (
        // <ScriptTag src="https://kit.fontawesome.com/7ee186d268.js" crossorigin="anonymous" />
        <div className="all">
            <section id='navbar_section'>
                <nav id="nav-sec" className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand navbar__brand">
                        <a className="navbar-item nav-bar__logo__container" href="#">
                            <div className="navbar__logo"></div>
                            <p className="navbar__logo__text">Chat App</p>
                        </a>
                        <div className="theme__container__btn">
                            <label id="darkModeLabel" className="toggle-dark-mode light-theme-toggle s-cursor-pointer s-relative s-cross-center s-mr-1">
                                <input id="darkModeInput" className="toggle-input s-opacity-0" type="checkbox" onClick={darkMode}/>
                                <span id="darkModeSpan" className="slider light-theme-span dot s-absolute s-h-24px s-w-24px s-cursor-pointer s-shadow-bottom s-circle"></span>
                            </label>
                        </div>
                        {/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu" onClick={navbarBurger}> */}
                        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">

                            <span id="pri" className="white-line" aria-hidden="true"></span>
                            <span id="pri" className="white-line" aria-hidden="true"></span>
                            <span id="pri" className="white-line" aria-hidden="true"></span>
                            
                        </a>
                    </div>
                    <div id="navMenu" className="navbar-menu navbar__menu">
                        <div className="navbar-start navbar__start">
                            <a className="navbar-item navbar__text">
                                Home
                            </a>
                            <a className="navbar-item navbar__text">
                                Descargar
                            </a>
                            <a className="navbar-item navbar__text">
                                Seguridad
                            </a>
                            <a className="navbar-item navbar__text">
                                About
                            </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link navbar__text">
                                    More
                                </a>
                            </div>
                        </div>
                        <div id="navbar__end1" className="navbar-end navbar__end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button navbar__login__btn" onClick={renderApp}>
                                    Iniciar sesion
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
            <section id='homepage'>
                <div className="home__container">
                    <div className="image__left__container">
                        <img className="image__left animation" src={chatUser} alt=""/>
                    </div>
                    <div className="home__container__message">
                        <h1 className="home__main-message">
                            Crea un lugar...
                        </h1>
                        <div className="home__message__div">
                            <p className="home__message">
                                ... en el que puedas formar clubes escolares, grupos de juegos
                                o una comunidad mundial. En el que puedas pasar tiempo con tus amigos. 
                                Un lugar que haga que hablar a diario y divertirte sea más fácil.
                            </p>
                        </div>
                        <div className="home__message__btn">
                        <a href="#" className="btn__download home__btn"><FontAwesomeIcon icon={faDownload} className="icons" />Descargar para Windows</a>
                        <a id="browser" href="#" className="btn__browser home__btn">Abrir Chat en tu navegador</a>
                        </div>
                    </div>
                    <div className="image__right__container hidden">
                        <div className="image__right__div">
                            <img id="messageIcon" className="image__right  animation" src={chat} alt=""/>
                        </div>
                        <div className="image__right__div hidden">
                            <img className="image__right" src={robot} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section1" className="section-area section-white">
                <div className="section__left-container" >
                    <div className="section__img__container">
                        <img className="section__img" src={ImgSec1} alt="Imagen 1"/>
                    </div>
                </div>
                <div className="section__right-container" >
                    <div className="section__text__container">
                        <h1 className="section__h1">Crea un lugar especial con tus amigos</h1>
                        <p className="section__p">
                            Chat App es un lugar donde se pueden organizan canales ordenados por temas, 
                            en los que puedes colaborar, compartir o simplemente hablar de tu día sin 
                            monopolizar un chat de grupo.
                        </p>
                    </div>
                </div>
            </section>
            <section id="section2" className="section-area section-grey">
                <div id="section2__left-container" className="section__left-container" >
                    <div className="section__text__container left">
                        <h1 className="section__h1">Donde es fácil pasar el rato</h1>
                        <p className="section__p">
                            Entra en un canal de informativo cuando estés libre. Tambien puedes hablar con
                            tus amigos gracias a los mensajes directos. 
                        </p>
                    </div>
                </div>
                <div id="section2__right-container" className="section__right-container" >
                    <div className="section__img__container">
                        <img className="section__img  img__right" src={ImgSec2} alt="Imagen 2"/>
                    </div>
                </div>
            </section>
            <section id="section3" className="section-area section-white">
                <div className="section__left-container" >
                    <div className="section__img__container">
                        <img className="section__img" src={ImgSec3} alt="Imagen 3"/>
                    </div>
                </div>
                <div className="section__right-container" >
                    <div className="section__text__container">
                        <h1 className="section__h1">De unos pocos fans a un montón</h1>
                        <p className="section__p">
                            Establece cualquier comunidad con las herramientas de moderación y el acceso 
                            personalizado de miembros. Concédeles poderes especiales, crea canales privados 
                            y mucho más.
                        </p>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer__container">
                    <div className="footer__left-container">
                        
                        <h2 className="footer__h2">CREA TU LUGAR</h2>
                        <h3 className="footer__h3">Siguenos en:</h3>
                        <div className="icons__container">
                            <FontAwesomeIcon icon={faFacebook} className="fa-brands social-icons" />
                            <FontAwesomeIcon icon={faTwitter} className="fa-brands social-icons"/>
                            <FontAwesomeIcon icon={faInstagram} className="fa-brands social-icons"/>
                            <FontAwesomeIcon icon={faYoutube} className="fa-brands social-icons"/>
                        </div>
                    </div>
                    <div className="footer__right-container">
                        <div className="footer__info product">
                            <span className="footer__span">Producto</span>
                            <a href="" className="footer__a">Chat App</a>
                            <a href="" className="footer__a">Canales</a>
                            <a href="" className="footer__a">Mensajes directos</a>
                        </div>
                        <div className="footer__info company">
                            <span className="footer__span">Compañía</span>
                            <a href="" className="footer__a">Sobre nosotros</a>
                            <a href="" className="footer__a">Trabajos</a>
                            <a href="" className="footer__a">Marca</a>
                            <a href="" className="footer__a">Noticias</a>
                        </div>
                        <div className="footer__info resources">
                            <span className="footer__span">Recursos</span>
                            <a href="" className="footer__a">Soporte tecnico</a>
                            <a href="" className="footer__a">Seguridad</a>
                            <a href="" className="footer__a">Blog</a>
                            <a href="" className="footer__a">Opiniones</a>
                            <a href="" className="footer__a">Licencias</a>
                        </div>
                        <div className="footer__info politics">
                            <span className="footer__span">Politicas</span>
                            <a href="" className="footer__a">Condiciones</a>
                            <a href="" className="footer__a">Privacidad</a>
                            <a href="" className="footer__a">Ajuste de cookies</a>
                            <a href="" className="footer__a">Directivas</a>
                            <a href="" className="footer__a">Licencias</a>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
    );
}


// export default withRouter(Home);
export default Home