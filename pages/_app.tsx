import { NextPage } from 'next'
import { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MDX from '../components/hoc/mdx';
import '../styles/globals.css';
import Twemoji from '../components/hoc/twemoji';

const Layout: NextPage<AppProps> = ({ Component, pageProps }) => (
    <MDX>
        <Twemoji>
            <Navbar />
            <main className="flex flex-col">
                <Component {...pageProps} />
            </main>
            <Footer />
        </Twemoji>
    </MDX>
);

export default Layout;
