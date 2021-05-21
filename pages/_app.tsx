import NextNprogress from 'nextjs-progressbar';
import React from "react";
import "../styles/globals/common.scss"
import {Provider} from "react-redux";
import { AppProps } from 'next/app'
import {store} from "../redux/store";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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
