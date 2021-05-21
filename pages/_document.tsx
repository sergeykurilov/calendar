import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'/>
                    <meta charSet="UTF-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
