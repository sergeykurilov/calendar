import NextNprogress from 'nextjs-progressbar';
import React from "react";
import {NextComponentType} from "next";
import "../styles/common.scss"
import {Provider} from "react-redux";
import store from '../redux/store';

export default function MyApp({Component, pageProps}: { Component: NextComponentType, pageProps: any }) {
    return (
        <>
            <Provider store={store}>
                <NextNprogress
                    color="yellow"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={3}
                />
                <Component {...pageProps} />
            </Provider>
        </>
    )
}
