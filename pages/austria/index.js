import React from 'react';
import {observer} from 'mobx-react-lite';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {StoreContext} from '../../store';
import {getLayout} from "../../components/Layout";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import SaveTheDate from "../../components/SaveTheDate";
import Story from "../../components/Story";
import Events from "../../components/Events";
import GiftRegistry from "../../components/GiftRegistry";
import Gallery from "../../components/Gallery";
import RegistrationForm from "../../components/RegistrationForm";
import WhereToStay from "../../components/WhereToStay";
import Video from "../../components/Video";
import SubFooter from "../../components/SubFooter";
import Footer from "../../components/Footer";

require('./index.less');

const Austria = observer(({page}) => {
    const store = React.useContext(StoreContext);

    return (
        <div className="container-cs">
            <Head>
                <title>Chris & Georgia | Austria</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="wrapper">
                <Header />
                <Hero
                    bg="/assets/img/venues/cg-at-venue.jpg"
                    date="14th July 2023"
                    address="Die Deantnerin, Austria"
                />
                <SaveTheDate
                    heading="Save The Date"
                    date="14th July 2023"
                    address="Bürglalmweg 25, Dienten am Hochkönig A-5652"
                    text={
                        <>
                            <p>Real & authentic, modern & classic, modest & uncomplicated -  that is our wedding venue. Arrive, switch off and simply enjoy being there - Come celebrate with us and enjoy the gigantic view of the Austrian Alps.</p>
                            <a className="btn btn-primary btn-wide-sm btn-sm" href="https://www.deantnerin.at/de/das.bilderbuch" target="_blank" style={{marginTop: '10px'}}>Venue Website</a> &nbsp;&nbsp;&nbsp;
                            <a className="btn btn-primary btn-wide-sm btn-sm" href="https://g.page/diedeantnerin?share" target="_blank" style={{marginTop: '10px'}}>Open Directions</a>
                        </>
                    }
                />
                <Story />
                <Events />
                <Gallery />
                <GiftRegistry />
                <RegistrationForm />
                <WhereToStay />
                <Video />
                <Footer />
                <a className="scroll-to-top scroll" href="#wrapper">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                         x="0px" y="0px" viewBox="0 0 273.1091 238.2098" enableBackground="new 0 0 273.1091 238.2098"
                         xmlSpace="preserve">
               <path fill="#E25D5D" d="M136.7428,23.457L136.7428,23.457C105.6324-7.6197,55.2286-7.8699,23.8161,23.0177
                  c-31.6835,31.1545-31.6582,82.277-0.501,113.9287l90.7191,92.1591c11.8174,12.005,31.1293,12.1571,43.1343,0.3396l91.6648-90.2325
                  c31.6726-31.1777,32.5645-83.0754,1.4308-114.7912C219.1893-7.2342,168.3452-7.6516,136.7428,23.457z"/>
                        <path fill="#FFFFFF" d="M110.7149,123.5662l-2.9542-2.9542c-1.2509-1.2509-1.2509-3.2736,0-4.5112l25.8562-25.8695
                  c1.2509-1.2509,3.2736-1.2509,4.5112,0l25.8562,25.8562c1.2509,1.2509,1.2509,3.2736,0,4.5112l-2.9542,2.9542
                  c-1.2642,1.2642-3.3268,1.2376-4.5644-0.0532l-15.2635-16.0221v38.2454c0,1.7699-1.4239,3.1938-3.1938,3.1938H133.75
                  c-1.7699,0-3.1938-1.4239-3.1938-3.1938v-38.2454l-15.2769,16.0354C114.0418,124.8171,111.9791,124.8437,110.7149,123.5662z"/>
            </svg>
                </a>
            </div>
        </div>
    )
});

Austria.getLayout = getLayout;
export default Austria;

export const getServerSideProps = async (context) => {
    return {
        props: {
            page: null
        }
    }
}
