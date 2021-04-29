import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const NotFound: NextPage = () => (
    <>
        <Head>
            <title>404 / pedrodesu</title>
        </Head>
        <div className="container">
            <ul className="flex flex-col flex-1 items-center justify-center">
                <h1>
                    <code className="text-gray-400 font-light text-jumbo">404</code>
                </h1>
                <ul>
                    <h2>Oops! It seems like you're lost!</h2>
                    <Link href="/">
                        <a className="text-gray-800">
                            <h3>
                                <code>&gt; return __CONST_HOME;</code>
                            </h3>
                        </a>
                    </Link>
                </ul>
            </ul>
        </div>
    </>
);

export default NotFound;
