import React from 'react';
// import FontAwesomeIcon from

export default function Hero({bg, date, address}) {
    return (
        <section className="gradient-overlay gradient-overlay-dark ">
            <img className="bg-image" src={bg} alt=""/>
            <div className="container" style={{minHeight: '50vh'}}>
                <div className="row min-vh-80 align-items-center z-index-2 position-relative text-center">
                    <div className="col-12">
                        <img src="/assets/img/logo/cg-white.png" alt="" style={{width: '360px'}}/>
                        <p className="font-weight-300 lead mb-5 " style={{color: '#ffffff'}}>🤵🏻 💍 👰🏻<br/>{date}<br/><small style={{fontSize: '14px'}}>{address}</small></p>
                        <a href="#rsvp" className="btn btn-primary btn-wide-md btn-md  scroll">&nbsp;&nbsp;&nbsp;RSVP&nbsp;&nbsp;&nbsp;</a>
                    </div>
                </div>
            </div>
            <div className="curved-decoration ">
                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 2560 168.6227" enableBackground="new 0 0 2560 168.6227" xmlSpace="preserve">
                    <g/>
                    <g>
                        <path d="M2560,0c0,0-219.6543,165.951-730.788,124.0771c-383.3156-31.4028-827.2138-96.9514-1244.7139-96.9514c-212.5106,0-439,3.5-584.4982,1.5844l0,139.9126h2560V0z"/>
                    </g>
                </svg>
            </div>
        </section>
    )
}
