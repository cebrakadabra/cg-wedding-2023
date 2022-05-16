import React from 'react';
import axios from 'axios';
import getConfig from "next/config";
import Head from 'next/head';

import {StoreContext} from "../store";
import {constants} from "../config";

require('./Layout.less');

// const {publicRuntimeConfig} = getConfig();

function Layout({session, pageType, seoObj, slug, children}) {
    const store = React.useContext(StoreContext);

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>Chris & Georgia</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700" rel="stylesheet"/>

                <script src="/js/jquery-1.12.4.min.js"/>
                <script src="/js/bootstrap.min.js"/>
                <script src="/js/smooth-scroll.js"/>
                <script src="/js/jquery.magnific-popup.min.js"/>
                <script src="/js/jquery.countdown.min.js"/>
                <script src="/js/placeholders.min.js"/>
                {/*<script src="/js/instafeed.min.js"/>*/}
                <script src="/js/script.js"/>
            </Head>
            <div className={`site-wrapper pageType-${pageType}`}>
                <main>{children}</main>
            </div>
        </>
    )
}

export const getLayout = (page) => {
    const {props: {slug}, children} = page;

    return (
        <Layout slug={slug} children={children}>
            {page}
        </Layout>
    )
};
export default Layout
