import React from 'react';
require('./Header.less');

export default function Header({}) {
    return (
        <header className="header default">
            <div className="header-section">
                <div className="container-fluid ">
                    <nav className="navbar navbar-expand-lg header-navbar ml-0 ml-lg-5">
                        <button className="navbar-toggler btn-navbar-toggler collapsed" type="button"
                                data-toggle="collapse" data-target=".nav-menu" aria-expanded="true"
                                aria-label="Toggle navigation"
                                style={{border: 'none', outline: 0, position: 'absolute', right: 0, zIndex: 100, top: 0}}
                        >
                            <span className="fa fa-bars" style={{fontSize: '24px'}}/>
                        </button>
                        <div
                            className="nav-menu collapse navbar-collapse navbar-collapse justify-content-end mr-5 ">
                            <ul className=" navbar-nav  header-navbar-nav">
                                <img className="logo-dark" src="/assets/img/logo/cg-black.png" alt="" style={{width: '150px', marginLeft: '-15px', marginTop: '5px'}}/>
                                <li><a className=" nav-link scroll" href="#resto">Date</a></li>
                                <li><a className=" nav-link scroll" href="#wedding">Wedding</a></li>
                                {/*<li><a className=" nav-link scroll" href="#gallery">Gallery</a></li>*/}
                                {/*<li><a className=" nav-link scroll" href="#gift">Gift Registry</a></li>*/}
                                {/*<li><a className=" nav-link scroll" href="#friends">Friends</a></li>*/}
                                <li><a className=" nav-link scroll" href="#rsvp">Rsvp</a></li>
                                <li><a className=" nav-link scroll" href="#location">Hotels</a></li>
                                <li><a className=" nav-link scroll" href="#story">Love Story</a></li>
                                <br/>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
