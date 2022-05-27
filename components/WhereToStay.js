import React from 'react';

export default function WhereToStay({locale}) {
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
                {locale === 'us' ? (
                    <>
                        <div className="row text-center">
                            <div className="col-md-4 mb-3 mb-md-0 ">
                                <img src="assets/img/accommodation/1-us.jpg" alt="Image" className=" rounded img-fluid"/>
                                <div className="badge-overlap">
                                    <span className="badge">Hotel</span>
                                </div>
                                <h5 className="mt-3 mb-3">Hotel Cerro </h5>
                                <p>1125 Garden Street<br/>San Luis Obispo, 93401, California</p>
                                <a href="https://www.google.com/maps/place/1125+Garden+St,+San+Luis+Obispo,+CA+93401/@35.2789862,-120.6654377,17z/data=!3m1!4b1!4m5!3m4!1s0x80ecf102fe765859:0xcb1254ba10d7c502!8m2!3d35.2789818!4d-120.663249" target="_blank" className="hover-arrow">Get directions
                                    <span className="fa fa-arrow-right"/>
                                </a>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0 ">
                                <img src="assets/img/accommodation/2-us.jpg" alt="" className="rounded img-fluid"/>
                                <div className="badge-overlap">
                                    <span className="badge">Hotel</span>
                                </div>
                                <h5 className="mt-3 mb-3">Hotel & Bistro Granada</h5>
                                <p>1130 Morro Street
                                    <br/>San Luis Obispo, 93401, California
                                </p>
                                <a href="https://g.page/granadahotelandbistro?share" target="_blank" className="hover-arrow">Get directions
                                    <span className="fa fa-arrow-right"/>
                                </a>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0 ">
                                <img src="assets/img/accommodation/3-us.jpg" alt="" className="rounded img-fluid"/>
                                <div className="badge-overlap ">
                                    <span className="badge">Hotel</span>
                                </div>
                                <h5 className="mt-3 mb-3">Inn at the Pier</h5>
                                <p>601 Cypress St,
                                    <br/>Pismo Beach, 93449, California
                                </p>
                                <a href="https://goo.gl/maps/K1revMxe1PcjkGdp6" target="_blank" className="hover-arrow">Get directions
                                    <span className="fa fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </>
                ) : locale === 'at' ? (
                    <>

                    </>
                ) : null}
            </div>
        </section>
    )
}
