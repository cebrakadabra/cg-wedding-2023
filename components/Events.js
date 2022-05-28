import React from 'react';
require('./Events.less');

export default function Events({locale, desktopAsset}) {
    return (
        <section id="wedding" className="spacer-one-top-lg">
            <div className="container spacer-one-bottom-lg">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className=" text-center mb-5 pb-5">
                            <h1 className="display-4 mb-0">Schedule</h1>
                            <p className="w-md-40 mb-0 mx-auto text-dark-gray opacity-8 ">What, When & Where</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 d-flex mb-4 mb-lg-0 display-state ">
                        <div className="card card-icon-2 card-body justify-content-between">
                            <img className="bg-image" src={desktopAsset} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex mb-4 mb-lg-0">
                        <div className="card card-body">
                            {locale === 'us' ? (
                                <>
                                    <>
                                        <h4 className="day-tag"><strong>FRI <br/><span style={{fontSize: '12px'}}>May 19</span></strong></h4>
                                        <div className="icon-round mb-5 mb-md-3  bg-icon-primary">
                                            <h2 style={{margin: 0}}>🍕</h2>
                                        </div>
                                        <h5 className="mb-0"><strong>Rehersal Dinner</strong></h5>
                                        <h6 className="mb-5">6:00pm @Flying Caballos</h6>
                                        <p className="text-align-center">Please tell us if you can make it</p>
                                    </>
                                </>
                            ) : locale === 'at' ? (
                                <>
                                    <>
                                        <h4 className="day-tag"><strong>THU <br/><span style={{fontSize: '12px'}}>Jul 13</span></strong></h4>
                                        <div className="icon-round mb-5 mb-md-3  bg-icon-primary">
                                            <h2 style={{margin: 0}}>🍕</h2>
                                        </div>
                                        <h5 className="mb-0"><strong>Family Dinner</strong></h5>
                                        <h6 className="mb-5">6:00pm @TBD</h6>
                                        <p className="text-align-center">Please tell us if you can make it</p>
                                    </>
                                </>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex ">
                        <div className="card card-body justify-content-between bg-primary text-light">
                            {locale === 'us' ? (
                                <>
                                    <>
                                        <h4 className="day-tag primary"><strong>SAT <br/><span style={{fontSize: '12px'}}>May 20</span></strong></h4>
                                        <div className="icon-round mb-3 mb-md-3  bg-icon-white">
                                            <h2 style={{margin: 0}}>💍</h2>
                                        </div>
                                        <h5 className="mb-0 text-white"><strong>Wedding Ceremony</strong></h5>
                                        <h6 className="mb-5 text-white">3:30PM @Flying Caballos</h6>
                                        <p className="text-align-center">Please be seated by 04:00pm</p>
                                    </>
                                    <br/>
                                    <>
                                        <div className="icon-round mb-3 mb-md-3  bg-icon-white">
                                            <h2 style={{margin: 0}}>🥂</h2>
                                        </div>
                                        <h5 className="mb-0 text-white"><strong>Wedding Celebration</strong></h5>
                                        <h6 className="mb-5 text-white">4:30pm - 11:00pm @Flying Caballos</h6>
                                        <p className="text-align-center">
                                            4:30pm Cocktail Hour | 5:30pm Dinner <br/>
                                            7:00pm Party | 9:00pm Snacks

                                        </p>
                                    </>
                                </>
                            ) : locale === 'at' ? (
                                <>
                                    <>
                                        <h4 className="day-tag primary"><strong>FRI <br/><span style={{fontSize: '12px'}}>Jul 14</span></strong></h4>
                                        <div className="icon-round mb-3 mb-md-3  bg-icon-white">
                                            <h2 style={{margin: 0}}>💍</h2>
                                        </div>
                                        <h5 className="mb-0 text-white"><strong>Wedding Ceremony</strong></h5>
                                        <h6 className="mb-5 text-white">3:30PM @Die.Deantnerin</h6>
                                        <p className="text-align-center">Please be seated by 04:00pm</p>
                                    </>
                                    <br/>
                                    <>
                                        <div className="icon-round mb-3 mb-md-3  bg-icon-white">
                                            <h2 style={{margin: 0}}>🥂</h2>
                                        </div>
                                        <h5 className="mb-0 text-white"><strong>Wedding Celebration</strong></h5>
                                        <h6 className="mb-5 text-white">4:30pm - 2:00am @Die.Deantnerin</h6>
                                        <p className="text-align-center">
                                            4:30pm Cocktail Hour | 5:30pm Dinner <br/>
                                            7:00pm Party | 12:00am Midnight Snack

                                        </p>
                                    </>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className=" text-center mt-5 pt-5">
                            <a href="#rsvp" className="btn btn-primary btn-wide-lg btn-lg  scroll">RSVP</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curved-decoration">
                <svg width="100%" height="100%" className="bg-secondary-svg" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px" viewBox="0 0 2560 168.6227" enableBackground="new 0 0 2560 168.6227"
                     xmlSpace="preserve">
                    <g>
                    </g>
                    <g>
                        <path d="M0,0c0,0,219.6543,165.951,730.788,124.0771c383.3156-31.4028,827.2139-96.9514,1244.7139-96.9514
      c212.5106,0,438.9999,3.5,584.4982,1.5844v139.9126H0V0z"></path>
                    </g>
                </svg>
            </div>
        </section>
    )
}
