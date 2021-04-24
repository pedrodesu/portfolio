import { NextPage } from 'next';
import Link from 'next/link';
import { GitHub } from 'react-feather';

const Footer: NextPage = () => (
    <footer className="bg-gray-100 py-10">
        <div className="container">
            <ul className="flex flex-col space-y-10">
                <li className="inline-flex">
                    <Link href="/">
                        <a>
                            <img src="/logo.svg" alt="logo" width={40} />
                        </a>
                    </Link>
                </li>
                <li className="inline-flex">
                    <a className="flex items-center space-x-2" href="https://github.com/pedrodesu/" target="_blank">
                        <GitHub />
                        <span>GitHub</span>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;
