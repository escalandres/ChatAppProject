import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css'
import '../css/home.css'
import 'font-awesome/css/font-awesome.min.css';
import App from '../App';

import robot from '../assets/robot.png';
import chat from '../assets/chat.png';
import chatUser from '../assets/chatUser.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolid, faDownload, icons } from '@fortawesome/fontawesome-free-solid';


const darkMode = () =>{
    const darkModeInput = document.getElementById('darkModeInput');
    const darkModeLabel = document.getElementById('darkModeLabel');
    const darkModeSpan = document.getElementById('darkModeSpan');
    if(darkModeInput.checked===true){
        darkModeSpan.classList.add("dark-theme-span");
        darkModeSpan.classList.remove("light-them-span");
        darkModeLabel.classList.add("dark-theme-toggle");
        darkModeLabel.classList.remove("light-theme-toggle");
        document.documentElement.style.setProperty('--background-color', '#192229');
    }
    else{
        
        darkModeSpan.classList.remove("dark-theme-span");
        darkModeSpan.classList.add("light-them-span");
        darkModeLabel.classList.remove("dark-theme-toggle");
        darkModeLabel.classList.add("light-theme-toggle");
        document.documentElement.style.setProperty('--background-color', 'rgb(64,78,237)');
    }
    
}

// import logo from '../assets/logo.svg';

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
}

const Home = () => {
    return (
        // <ScriptTag src="https://kit.fontawesome.com/7ee186d268.js" crossorigin="anonymous" />
        <div className="all">
            <section id='navbar_section'>
                <nav id="nav-sec" className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand navbar__brand">
                        <a className="navbar-item nav-bar__logo__container" href="#navbar_section">
                            <div className="navbar__logo"></div>
                            <p className="navbar__logo__text">Chat App</p>
                        </a>
                        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            
                        </a>
                    </div>
                    <div id="navMenu" className="navbar-menu navbar__menu">
                        <div className="navbar-start navbar__start">
                            <a className="navbar-item navbar__text" href="#homepage">
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
                    <div className="theme__container__btn">
                        <label id="darkModeLabel" className="toggle-dark-mode light-theme-toggle s-cursor-pointer s-relative s-cross-center s-mr-1">
                            <input id="darkModeInput" className="toggle-input s-opacity-0" type="checkbox" onClick={darkMode} />
                            <span id="darkModeSpan" className="slider light-theme-span dot s-absolute s-h-24px s-w-24px s-cursor-pointer s-shadow-bottom s-circle"></span>
                        </label>
                    </div>
                </nav>
            </section>
            <section id='homepage'>
                <div className="home__container">
                    <div class="image__left__container">
                        <img class="image__left animation" src={chatUser} alt="" />
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
                            {/* <a href="#" className="btn__download"><i className="fa-solid fa-download icons"></i>Descargar para Windows</a> */}
                            <a href="#" className="btn__download"><FontAwesomeIcon icon={faDownload} className="icons" />Descargar para Windows</a>
                            <a href="#" className="btn__browser">Abrir Chat en tu navegador</a>
                        </div>
                    </div>
                    <div class="image__right__container">
                        <div>
                            <img id="messageIcon" class="image__right  animation" src={chat} alt="" />
                        </div>
                        <div>
                            <img class="image__right" src={robot} alt="" />
                        </div>
                    </div>
                </div>
            </section>
    </div>
    );
}


// export default withRouter(Home);
export default Home