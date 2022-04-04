import React from 'react';
// import logo from '../assets/logo.svg';

const Home = () => {
    return (
        <div>
            <section id='navbar_section'>
                <nav classNameName="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='bulma-logo'></img>
                        </a>
                        {/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a> */}
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="#navbar_section">
                                Home
                            </a>
                            <a className="navbar-item" href='#big'>
                                Documentation
                            </a>

                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                More
                                </a>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary" href='auth'>
                                        <strong>Iniciar sesion</strong>
                                    </a>
                                    {/* <a className="button is-light" href=''>
                                        Log in
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
            <section id='big'>

            </section>
        </div>
    );
}


// export default withRouter(Home);
export default Home