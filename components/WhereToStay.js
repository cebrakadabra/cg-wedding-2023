import React from 'react';

export default function WhereToStay({locale}) {
    return (
        <section id="location" className=" spacer-one-top-lg ">
            <div className="container spacer-one-bottom-lg">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className=" mb-5 pb-5 text-center">
                            <h1 className="display-4 ">Where To Stay</h1>
                            <p className="w-md-40 mb-0 mx-auto text-dark-gray opacity-8 ">A Shuttle will be available from these hotels to and from the venue for a small fee</p>
                            <br/>
                            <p className="w-md-40 mb-0 mx-auto text-dark-gray opacity-8 ">Please reach out to us for room reservations as we are in touch with the hotels</p>
                        </div>
                    </div>
                </div>
                {locale === 'us' ? (
                    <>
                        <div className="row text-center">
                            <div className="col-md-4 mb-3 mb-md-0 ">
                                <img src="assets/img/accommodation/1-us.webp" alt="Image" className=" rounded img-fluid"/>
                                <div className="badge-overlap">
                                    <span className="badge">Hotel</span>
                                </div>
                                <h5 className="mt-3 mb-3">La Quinta Inn & Suites</h5>
                                <p>1845 Monterey St,<br/>San Luis Obispo, CA 93401</p>
                                <a href="https://goo.gl/maps/rUoogFLEX5zRCR6M7" target="_blank" className="hover-arrow">Open Map
                                    <span className="fa fa-arrow-right"/>
                                </a>
                                <br/>
                                <br/>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0 ">
                                <img src="assets/img/accommodation/2-us.jpeg" alt="" className="rounded img-fluid"/>
                                <div className="badge-overlap">
                                    <span className="badge">Hotel</span>
                                </div>
                                <h5 className="mt-3 mb-3">The Kinney</h5>
                                <p>1800 Monterey St,<br/>San Luis Obispo, CA 93401
                                </p>
                                <a href="https://goo.gl/maps/XdsBfQy1Tq6fd2ua7" target="_blank" className="hover-arrow">Open Map
                                    <span className="fa fa-arrow-right"/>
                                </a>
                                <br/>
                                <br/>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0 ">
                                <img src="assets/img/accommodation/3-us.jpeg" alt="" className="rounded img-fluid"/>
                                <div className="badge-overlap ">
                                    <span className="badge">Hotel</span>
                                </div>
                                <h5 className="mt-3 mb-3">La Cuesta Inn</h5>
                                <p>2074 Monterey St,<br/>San Luis Obispo, CA 93401
                                </p>
                                <a href="https://goo.gl/maps/zfatiD3SbDgXgWP97" target="_blank" className="hover-arrow">Open Map
                                    <span className="fa fa-arrow-right" />
                                </a>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </>
                ) : locale === 'at' ? (
                    <>
                        <div className="row text-center">
                            <div className="col-md-4 mb-3 mb-md-0 ">
                                <img src="assets/img/accommodation/2-at.jpeg" alt="" className="rounded img-fluid"/>
                                <div className="badge-overlap ">
                                    <span className="badge">Hotel</span>
                                </div>
                                <h5 className="mt-3 mb-3">Hotel Eder</h5>
                                <p>Am Dorfpl. 5, <br/> Maria Alm, Austria</p>
                                <a href="https://goo.gl/maps/mgH3Ma1c7byFJnVM8" target="_blank" className="hover-arrow">Open Map
                                    <span className="fa fa-arrow-right" />
                                </a>
                                <br/>
                                <br/>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0 ">
                                <img src="assets/img/accommodation/1-at.jpeg" alt="" className="rounded img-fluid"/>
                                <div className="badge-overlap ">
                                    <span className="badge">Hotel</span>
                                </div>
                                <h5 className="mt-3 mb-3">Tante Frida (for Kids)</h5>
                                <p>Hochkönigstraße 31, <br/>Maria Alm, Austria</p>
                                <a href="https://goo.gl/maps/r9x34pmzaFigys2n7" target="_blank" className="hover-arrow">Open Map
                                    <span className="fa fa-arrow-right" />
                                </a>
                                <br/>
                                <br/>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0 ">
                                <img src="assets/img/accommodation/3-at.jpeg" alt="" className="rounded img-fluid"/>
                                <div className="badge-overlap ">
                                    <span className="badge">Hotel</span>
                                </div>
                                <h5 className="mt-3 mb-3">Hotel SEPP</h5>
                                <p>Urchen 8, <br/> Maria Alm, Austria</p>
                                <a href="https://goo.gl/maps/dU1R1Svz2xauLtAr8" target="_blank" className="hover-arrow">Open Map
                                    <span className="fa fa-arrow-right" />
                                </a>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
            <div className="curved-decoration">
                <svg width="100%" height="100%" className="bg-secondary-svg" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px"
                     viewBox="0 0 2560 168.6227" enableBackground="new 0 0 2560 168.6227" xmlSpace="preserve">
                    <g>
                    </g>
                    <g>
                        <path d="M0,0c0,0,219.6543,165.951,730.788,124.0771c383.3156-31.4028,827.2139-96.9514,1244.7139-96.9514
      c212.5106,0,438.9999,3.5,584.4982,1.5844v139.9126H0V0z"/>
                    </g>
                </svg>
            </div>
        </section>
    )
}
