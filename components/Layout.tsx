import React, {ReactNode} from 'react'
import Head from 'next/head'
import {Header} from "./Header/Header";

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => (
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
