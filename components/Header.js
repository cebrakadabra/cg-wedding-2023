import React from 'react';


export default function Header({}) {
    return (
        <header className="header default">
            <div className="header-section">
                <div className="container-fluid ">
                    <nav className="navbar navbar-expand-lg header-navbar ml-0 ml-lg-5">
                        <a className=" navbar-brand navbar-logo scroll" href="#wrapper">
                            <img className="mb-0 logo-light" src="assets/img/logo/cg-white.png" style={{width: '125px'}} alt=""/>
                            <img className="mb-0 logo-dark" src="assets/img/logo/cg-black.png" style={{width: '125px'}} alt=""/>
                        </a>
                        <button className="navbar-toggler btn-navbar-toggler" type="button"
                                data-toggle="collapse" data-target=".nav-menu" aria-expanded="true"
                                aria-label="Toggle navigation">
                            <span className="fa fa-bars"/>
                        </button>
                        <div
                            className="nav-menu collapse navbar-collapse navbar-collapse justify-content-end mr-5 ">
                            <ul className=" navbar-nav  header-navbar-nav">
                                <li><a className=" nav-link scroll" href="#resto">Date</a></li>
                                <li><a className=" nav-link scroll" href="#story">Love Story</a></li>
                                <li><a className=" nav-link scroll" href="#wedding">Wedding</a></li>
                                <li><a className=" nav-link scroll" href="#gallery">Gallery</a></li>
                                {/*<li><a className=" nav-link scroll" href="#gift">Gift Registry</a></li>*/}
                                {/*<li><a className=" nav-link scroll" href="#friends">Friends</a></li>*/}
                                <li><a className=" nav-link scroll" href="#rsvp">Rsvp</a></li>
                                <li><a className=" nav-link scroll" href="#location">Location</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
