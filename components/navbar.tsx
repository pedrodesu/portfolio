import { NextPage } from 'next';
import Link from 'next/link';
import { PenTool } from 'react-feather';

const Navbar: NextPage = () => {
    const items = [[PenTool, 'Posts', '/posts']] as const;

    return (
        <nav className="my-10">
            <div className="container flex items-center">
                <Link href="/">
                    <a className="flex items-center">
                        <img className="pr-4" src="/logo.svg" alt="logo" width={60} />
                        <p className="font-medium">pedrodesu</p>
                    </a>
                </Link>

                <ul className="flex flex-1 justify-end">
                    {
                        items.map(([Icon, title, link], i) => (
                            <li key={i}>
                                <Link href={link}>
                                    <a className="flex items-center space-x-4">
                                        <Icon />
                                        <span>{title}</span>
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;