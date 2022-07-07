import React from 'react';
import dynamic from 'next/dynamic'
const Stories = dynamic(() => import('react-insta-stories'), { ssr: false });
import { isMobile } from 'react-device-detect'
require('./Video.less');

export default function Video({}) {
    const stories = [
        {
            url: "/assets/vid/2020/GC2020_2.mp4",
            type: "video",
            duration: 41000,
            header: {
                heading: "Grand Canyon & Joshua Tree",
                subheading: "2020",
                profileImage: ""
            }
        },
        {
            url: "/assets/vid/2021/MAHI_2021.mp4",
            type: "video",
            duration: 140000,
            header: {
                heading: "Maui, Hawaii",
                subheading: "2021",
                profileImage: ""
            }
        },
        // {
        //     url: "/assets/vid/2020/GC2020_2.mp4",
        //     type: "video",
        //     duration: 41000,
        //     header: {
        //         heading: "2022",
        //         subheading: "...",
        //         profileImage: ""
        //     }
        // },
    ]

    return (
        <section className="gradient-overlay align-middle">
            <Stories
                loop
                stories={stories}
                defaultInterval={1500}
                width={isMobile ? "100%" : "337.5px"}
                height={isMobile ? "100%" : "600px"}
            />
      {/*      <img className="bg-image" src="assets/img/2.jpg" alt=""/>*/}
      {/*      <div className="container">*/}
      {/*          <div className="row  min-vh-80 align-items-center z-index-2 position-relative text-center">*/}
      {/*              <div className="col-12">*/}
      {/*                  <div className=" play-btn-container mb-4">*/}
      {/*                      <a href="https://www.youtube.com/watch?v=Gc2en3nHxA4"*/}
      {/*                         className="btn btn-primary btn-play popup-youtube">*/}
      {/*                          <svg className="icon-svg" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
      {/*                               xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"*/}
      {/*                               viewBox="0 0 168.7 270.7" enableBackground="new 0 0 168.7 270.7;"*/}
      {/*                               xmlSpace="preserve">*/}
      {/*                              <path className="st0" d="M0,252.5V18.2C0,2,21.5-6.1,34.1,5.4l128.7,117.1c7.8,7.1,7.8,18.6,0,25.7L34.1,265.3*/}
      {/*                           C21.5,276.8,0,268.7,0,252.5z" fill="#FFFFFF"/>*/}
      {/*                          </svg>*/}
      {/*                      </a>*/}
      {/*                  </div>*/}
      {/*                  <h1 className="display-4 font-secondary  text-white mb-4">Just Married</h1>*/}
      {/*                  <p className="w-md-50 mb-0 mx-auto text-light lead font-weight-300 "> Friendship... is*/}
      {/*                      not something you learn in school. But if you haven't learned the meaning of*/}
      {/*                      friendship, you really haven't learned anything</p>*/}
      {/*              </div>*/}
      {/*          </div>*/}
      {/*      </div>*/}
      {/*      <div className="curved-decoration ">*/}
      {/*          <svg width="100%" height="100%" className="bg-secondary-svg" version="1.1"*/}
      {/*               xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"*/}
      {/*               y="0px" viewBox="0 0 2560 168.6227" enableBackground="new 0 0 2560 168.6227"*/}
      {/*               xmlSpace="preserve">*/}
      {/*              <g>*/}
      {/*              </g>*/}
      {/*              <g>*/}
      {/*                  <path d="M0,0c0,0,219.6543,165.951,730.788,124.0771c383.3156-31.4028,827.2139-96.9514,1244.7139-96.9514*/}
      {/*c212.5106,0,438.9999,3.5,584.4982,1.5844v139.9126H0V0z"></path>*/}
      {/*              </g>*/}
      {/*          </svg>*/}
      {/*      </div>*/}
        </section>
    )
}
