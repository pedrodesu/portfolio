import { NextPage } from 'next'
import { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import Head from 'next/head';
import React from 'react';

const Layout: NextPage<AppProps> = ({ Component, pageProps }) => (
    <MDXProvider components={{
        wrapper: (props) => {
            const { route } = useRouter();
            const name = route.substring(route.lastIndexOf('/') + 1);
            const fmtName = name.split('_').map((el) => el[0].toUpperCase() + el.substring(1)).join(' ');

            return (
                <>
                    <Head>
                        <title>{fmtName} | pedrodesu</title>
                    </Head>
                    <div id="blog" className="container xl:px-72">
                        <h1>{fmtName}</h1>
                        <React.Fragment {...props} />
                    </div>
                </>
            );
        }
    }}>
        <Navbar />
        <main className="mb-14">
            <Component {...pageProps} />
        </main>
        <Footer />
    </MDXProvider>
);

export default Layout;
