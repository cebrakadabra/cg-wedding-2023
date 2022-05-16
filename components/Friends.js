import React from 'react';

export default function Friends({type = '404'}) {
    return (
        <section id="friends" className="text-center">
            <div className="container spacer-double-lg">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className=" mb-5 pb-5">
                            <h1 className="display-4 mb-0">Our Best Friends</h1>
                            <p className="w-md-40 mb-0 mx-auto text-dark-gray opacity-8 ">We are lucky to have
                                them in our side</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <div className="px-5 mb-4 pb-4 ">
                            <div className="svg-mask-container px-3">
                                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 607 532" enableBackground="new 0 0 607 532"
                                     xmlSpace="preserve">
                                    <defs>
                                        <mask id="mask-middle-1">
                                            <path fill="#FFFFFF" d="M303.2954,55.7655L303.2954,55.7655c-68.9887-68.3032-180.269-68.3601-249.3155,0.1402
                                    c-69.6423,69.0921-69.0838,181.9562,0.0139,251.5284l201.1888,202.5704c26.2076,26.3876,68.8445,26.5335,95.2321,0.3258
                                    l201.4838-200.1096c69.6179-69.1431,71.0768-183.7278,2.0303-253.4415C485.013-12.8027,372.7591-13.2244,303.2954,55.7655z"></path>
                                        </mask>
                                    </defs>
                                    <image mask="url(#mask-middle-1)" width="607" height="532"
                                           xlinkHref="assets/img/mask-md.jpg"></image>
                                </svg>
                            </div>
                            <div className=" mt-4">
                                <h5 className="mb-0">Lisa Anderton</h5>
                                <span className="small">Bridesmaid </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <div className=" px-5 mb-4 pb-4 ">
                            <div className="svg-mask-container px-3">
                                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 607 532" enableBackground="new 0 0 607 532"
                                     xmlSpace="preserve">
                                    <defs>
                                        <mask id="mask-middle-2">
                                            <path fill="#FFFFFF" d="M303.2954,55.7655L303.2954,55.7655c-68.9887-68.3032-180.269-68.3601-249.3155,0.1402
                                    c-69.6423,69.0921-69.0838,181.9562,0.0139,251.5284l201.1888,202.5704c26.2076,26.3876,68.8445,26.5335,95.2321,0.3258
                                    l201.4838-200.1096c69.6179-69.1431,71.0768-183.7278,2.0303-253.4415C485.013-12.8027,372.7591-13.2244,303.2954,55.7655z"></path>
                                        </mask>
                                    </defs>
                                    <image mask="url(#mask-middle-2)" width="607" height="532"
                                           xlinkHref="assets/img/mask-md.jpg"></image>
                                </svg>
                            </div>
                            <div className=" mt-4">
                                <h5 className="mb-0">Jimmy Nicholson</h5>
                                <span className="small">Groomsman </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="text-center">
                            <div className="mx-auto icon-round mb-4 mb-md-4  bg-icon-primary">
                                <svg className="icon-svg" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 70.8 102.2" enableBackground="new 0 0 70.8 102.2;"
                                     xmlSpace="preserve">
                                    <path className="st0" opacity="0.3" d="M35.4,70.8c5.4,0,10-1.9,13.9-5.8c3.8-3.8,5.8-8.5,5.8-13.9V19.7c0-5.4-1.9-10-5.8-13.9C45.4,1.9,40.8,0,35.4,0
                                 c-5.4,0-10,1.9-13.9,5.8c-3.8,3.8-5.8,8.5-5.8,13.9v31.5c0,5.4,1.9,10,5.8,13.9C25.4,68.8,30,70.8,35.4,70.8z"
                                          fill="#E25D5D"/>
                                    <path className="st1" d="M69.6,40.5c-0.8-0.8-1.7-1.2-2.8-1.2c-1.1,0-2,0.4-2.8,1.2c-0.8,0.8-1.2,1.7-1.2,2.8v7.9
                                 c0,7.6-2.7,14.1-8.1,19.4c-5.4,5.4-11.9,8.1-19.4,8.1c-7.6,0-14.1-2.7-19.4-8.1c-5.4-5.4-8.1-11.9-8.1-19.4v-7.9
                                 c0-1.1-0.4-2-1.2-2.8c-0.8-0.8-1.7-1.2-2.8-1.2s-2,0.4-2.8,1.2C0.4,41.3,0,42.2,0,43.2v7.9C0,60.2,3,68,9.1,74.7
                                 c6,6.7,13.5,10.5,22.4,11.5v8.1H15.7c-1.1,0-2,0.4-2.8,1.2c-0.8,0.8-1.2,1.7-1.2,2.8c0,1.1,0.4,2,1.2,2.8c0.8,0.8,1.7,1.2,2.8,1.2
                                 H55c1.1,0,2-0.4,2.8-1.2c0.8-0.8,1.2-1.7,1.2-2.8c0-1.1-0.4-2-1.2-2.8c-0.8-0.8-1.7-1.2-2.8-1.2H39.3v-8.1c8.9-1,16.3-4.8,22.4-11.5
                                 c6-6.7,9.1-14.6,9.1-23.6v-7.9C70.8,42.2,70.4,41.3,69.6,40.5z" fill="#E25D5D"/>
                                </svg>
                            </div>
                            <blockquote>Friendship... is not something you learn in school. But if you haven't
                                learned the meaning of friendship, you really haven't learned anything.
                            </blockquote>
                            <small className="text-uppercase font-weight-600 text-dark upper-letter-space">We
                                love you Lisa and Jimmy</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curved-decoration ">
                <svg width="100%" height="100%" className="bg-secondary-svg" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px" viewBox="0 0 2560 168.6227" enableBackground="new 0 0 2560 168.6227"
                     xmlSpace="preserve">
                    <g>
                    </g>
                    <g>
                        <path d="M2560,0c0,0-219.6543,165.951-730.788,124.0771c-383.3156-31.4028-827.2138-96.9514-1244.7139-96.9514
      c-212.5106,0-439,3.5-584.4982,1.5844l0,139.9126h2560V0z"></path>
                    </g>
                </svg>
            </div>
        </section>
    )
}
