import React from 'react'
import Head from 'next/head'
import {Header} from "../Header/Header";
import {PropsLayout} from "../../interfaces";

const Layout = ({children, title = 'This is the default title'}: PropsLayout) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Header/>
        {children}
        <footer className="footer">
            <div className="container">
                <span>Rdevs ©2021</span>
            </div>
        </footer>
    </div>
)

export default Layout
