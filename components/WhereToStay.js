import React from 'react';

export default function WhereToStay({}) {
    return (
        <section id="location" className=" spacer-one-top-lg ">
            <div className="container spacer-one-bottom-lg">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className=" mb-5 pb-5 text-center">
                            <h1 className="display-4 ">Where To Stay</h1>
                            <p className="w-md-40 mb-0 mx-auto text-dark-gray opacity-8 ">Hotels in the area</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4 mb-3 mb-md-0 ">
                        <img src="assets/img/accommodation/1.jpg" alt="Image" className=" rounded img-fluid"/>
                        <div className="badge-overlap">
                            <span className="badge">Venue</span>
                        </div>
                        <h5 className="mt-3 mb-3">Hôtel Monaco </h5>
                        <p>501 Geary Street
                            <br/>San Franciscio, California
                            <br/>(415) 292 - 0100
                        </p>
                        <a href="#" className="hover-arrow">Get directions <span
                            className="fa fa-arrow-right"></span></a>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0 ">
                        <img src="assets/img/accommodation/2.jpg" alt="" className="rounded img-fluid"/>
                        <div className="badge-overlap">
                            <span className="badge">Accommodation</span>
                        </div>
                        <h5 className="mt-3 mb-3">Villa Nikko</h5>
                        <p>222 Mason Street
                            <br/>San Franciscio, California
                            <br/>(415) 394 - 1111
                        </p>
                        <a href="#" className="hover-arrow">Get directions <span
                            className="fa fa-arrow-right"></span></a>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0 ">
                        <img src="assets/img/accommodation/3.jpg" alt="" className="rounded img-fluid"/>
                        <div className="badge-overlap ">
                            <span className="badge">After Party</span>
                        </div>
                        <h5 className="mt-3 mb-3">California Party</h5>
                        <p>670 Ocean Ave
                            <br/>Santa Monica
                            <br/>(415) 394 - 1111
                        </p>
                        <a href="#" className="hover-arrow">Get directions <span
                            className="fa fa-arrow-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
