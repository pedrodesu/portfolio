import { NextPage } from 'next';
import Head from 'next/head';
import Waves from '../public/waves.svg';

const Home: NextPage = () => (
    <>
        <Head>
            <title>Home / pedrodesu</title>
        </Head>
        <div>
            <div className="bg-primary text-white pt-24">
                <div className="container py-20 space-y-10">
                    <ul>
                        <li>
                            <h1>Hey, I'm Pedro. 👋</h1>
                        </li>
                        <li>
                            <h3>I code software on demand. 👨‍💻</h3>
                        </li>
                    </ul>
                    <ul className="flex justify-center md:justify-start space-x-4">
                        <li>
                            <button className="border w-28 md:w-32 py-2 rounded-md border-gray-400 text-gray-200 transition-colors hover:border-white hover:text-white">
                                About me
                            </button>
                        </li>
                        <li>
                            <button className="border w-28 md:w-32 py-2 rounded-md border-gray-300 bg-white text-primary transition-colors hover:bg-primary hover:text-white">
                                Place order
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Waves />
            </div>
        </div>
    </>
);

export default Home;
