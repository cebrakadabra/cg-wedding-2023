import React from 'react';

export default function SaveTheDate({heading, date, address, text}) {
    return (
        <section id="resto" className=" ">
            <div className="container spacer-double-sm">
                <div className="row justify-content-lg-between align-items-center">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <div className="pr-md-4">
                            <h1 className="font-secondary display-4">{heading}</h1>
                            <p className="lead font-weight-300 text-dark-gray opacity-8">
                                {date}<br/>
                                <small style={{fontSize: '14px'}}>📍 {address}</small></p>
                            <p className="mb-4 pr-5">{text}</p>
                            <div className="countdown row text-center"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="svg-mask-container">
                            <svg version="1.1" id="p.svg" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 980.2914 884.5557" enableBackground="new 0 0 980.2914 884.5557"
                                 xmlSpace="preserve">
                                <path opacity="0.05" fill="#E35D5D" d="M493.9887,130.1238L493.9887,130.1238C419.5373,4.797,257.8407-37.3296,131.6182,36.1312
                              C4.3062,110.2269-37.5245,274.4576,36.6059,401.6698l215.8423,370.3983c28.1165,48.2495,90.0233,64.5706,138.2729,36.4541
                              l368.4115-214.6845c127.2958-74.1791,172.7084-240.1479,98.7059-367.5465C783.976,99.1337,621.0024,56.1091,493.9887,130.1238z"/>
                                <path fill="none" stroke="#E35D5D" strokeWidth="3.1978" strokeMiterlimit="10"
                                      d="M151.0414,716.6817L151.0414,716.6817
                              c-2.6854-4.5204-8.5175-6.0399-13.0702-3.3902c-4.592,2.6725-6.1008,8.5961-3.427,13.1844l7.7851,13.3598
                              c1.0141,1.7403,3.247,2.3289,4.9873,1.3148l13.2881-7.7433c4.5914-2.6756,6.2294-8.6618,3.5602-13.257
                              C161.5008,715.5639,155.6226,714.0121,151.0414,716.6817z"/>
                                <path fill="none" stroke="#E35D5D" strokeWidth="2.7402" strokeMiterlimit="10"
                                      d="M186.6779,44.1803L186.6779,44.1803
                              c-1.4613-2.4599-4.635-3.2867-7.1125-1.8449c-2.4988,1.4543-3.3199,4.6778-1.8649,7.1747l4.2365,7.2701
                              c0.5519,0.947,1.767,1.2674,2.714,0.7155l7.2311-4.2138c2.4985-1.456,3.3899-4.7136,1.9374-7.2141
                              C192.3697,43.572,189.1709,42.7276,186.6779,44.1803z"/>
                                <path fill="none" stroke="#E35D5D" strokeWidth="2.5752" strokeMiterlimit="10"
                                      d="M978.3951,400.8979
                              c-0.5042,0.934-0.5042,2.0591,0,2.993c0.3052,0.4453,0.5839,0.9083,0.835,1.3862c0.5513,1.3705-0.4096,2.8669-1.3862,3.9854
                              c-0.6144,0.7089-1.3075,1.6697-0.8979,2.5203c0.1919,0.3133,0.4371,0.5904,0.7246,0.8192c2.0887,2.0325,2.1343,5.3734,0.1018,7.4622
                              c-0.5895,0.6058-1.3159,1.0612-2.1182,1.3277"/>
                                <defs>
                                    <mask id="mask">
                                        <path fill="#ffffff" d="M528.4855,192.3897L528.4855,192.3897C454.034,67.0629,292.3375,24.9363,166.115,98.3971
                                    C38.8029,172.4928-3.0277,336.7236,71.1027,463.9358L286.945,834.3341c28.1165,48.2495,90.0233,64.5706,138.2729,36.4541
                                    l368.4115-214.6845c127.2958-74.1792,172.7084-240.1479,98.7059-367.5465C818.4728,161.3996,655.4992,118.375,528.4855,192.3897z"/>
                                    </mask>
                                </defs>
                                <image mask="url(#mask)" width="981" height="885"
                                       xlinkHref="/assets/img/mask-lg.jpg"/>
                                <g>
                                    <path fill="none" stroke="#E35D5D" strokeWidth="7" strokeLinecap="round"
                                          strokeMiterlimit="10" d="M747.8805,524.349
                                 c108.1955-68.637,139.1927-213.677,70.5558-321.8725S606.4696,62.2462,498.2741,130.8832l0,0"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
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
