import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css'
import '../css/home.css'
import 'font-awesome/css/font-awesome.min.css';
import App from '../App';
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
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu navbar__menu">
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
            </nav>
        </section>
        <section id='homepage'>
            <div className="home__container">
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
                        <a href="#" className="btn__download"><i className="fa-solid fa-download icons"></i>Descargar para Windows</a>
                        <a href="#" className="btn__browser">Abrir Chat en tu navegador</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}


// export default withRouter(Home);
export default Home