import React from 'react';

export default function GiftRegistry({}) {
    return (
        <section id="gift" className=" bg-primary">
            <div className="container spacer-double-lg">
                <div className="row justify-content-between z-index-3 position-relative align-items-center">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <h1 className="display-4 text-white">Gift Registry</h1>
                        {/*<p className="lead text-white mb-0">Details to follow</p>*/}
                    </div>
                    <div className="col-md-5">
                        <small className="text-uppercase mb-5 font-weight-600 text-light upper-letter-space">You can gift Chris & Georgia either experiences for their honeymoon, or goods for their life together</small>
                        <a className="btn btn-lg btn-block btn-secondary"
                           href="https://www.zola.com/registry/chrisandgeorgiamay20"
                           target="_blank"
                        >Show List</a>
                    </div>
                </div>
            </div>
            <div className="curved-decoration z-index-3">
                <svg width="100%" height="100%" className="bg-white-svg" version="1.1"
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
