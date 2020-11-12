import Head from 'next/head'
import React from "react";

export default function Meta() {
    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta name="description" content="Description"/>
            <meta name="keywords" content="Salah, Moslem, Islam, Praying"/>
            <title>Salah</title>

            <link rel="manifest" href="/manifest.json"/>
            <link
                href="/icons/favicon-16x16.png"
                rel="icon"
                type="image/png"
                sizes="16x16"
            />
            <link
                href="/icons/favicon-32x32.png"
                rel="icon"
                type="image/png"
                sizes="32x32"
            />
            <link rel="apple-touch-icon" href="/icons/apple-icon.png"/>
            <meta name="theme-color" content="#FFFFFF"/>

            <link rel="shortcut icon" href="/icons/favicon.ico"/>
            <meta name="msapplication-TileColor" content="#000000"/>
            <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
            <meta name="theme-color" content="#000"/>
            <link rel="alternate" type="application/rss+xml" href="/feed.xml"/>
            <meta
                name="description"
                content={`Pray Salah`}
            />
        </Head>
    )
}
