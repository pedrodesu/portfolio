import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../public/logo.svg';

const Navbar: NextPage = () => {
    const { route } = useRouter();

    const items = ['Posts', 'Credits'];

    return (
        <nav className={`py-8 ${route === '/' ? 'absolute w-full text-white' : 'border-b-2 border-gray-100'}`}>
            <div className="container flex items-center">
                <Link href="/">
                    <a className={`flex items-center space-x-4 ${route !== '/' ? 'text-primary' : undefined}`}>
                        <Logo />
                    </a>
                </Link>

                <ul className="flex flex-1 justify-end space-x-4 md:space-x-10">
                    {
                        items.map((title) => [title, `/${title.toLowerCase()}`]).map(([title, link], i) => (
                            <li key={i}>
                                <Link href={link}>
                                    <a className={route !== '/' ? 'hover:text-primary' : undefined}>{title}</a>
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
