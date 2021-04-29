import { NextPage } from 'next';
import GitHub from '../public/github.svg';
import Exercism from '../public/exercism.svg';
import Discord from '../public/discord.svg';
import Telegram from '../public/telegram.svg';
import Fiverr from '../public/fiverr.svg';

const Footer: NextPage = () => {
    const items = [
        { href: 'https://github.com/pedrodesu/', icon: GitHub, alt: 'github', title: 'GitHub' },
        { href: 'https://exercism.io/profiles/pedrodesu', icon: Exercism, alt: 'exercism', title: 'Exercism' },
        { href: 'https://fiverr.com/pedrodesu', icon: Fiverr, alt: 'fiverr', title: 'Fiverr' },
        { href: 'https://discord.bio/p/pedrodesu/', icon: Discord, alt: 'discord', title: 'Discord' },
        { href: 'https://t.me/pedrodesu/', icon: Telegram, alt: 'telegram', title: 'Telegram' },
    ] as const;

    const initialDate = 2021;
    const currentDate = new Date().getFullYear();
    const finalDate = initialDate === currentDate ? initialDate : `${initialDate} - ${currentDate}`;

    return (
        <footer className="py-10 border-t-2 border-gray-100">
            <div className="container">
                <ul className="flex flex-col md:flex-row md:items-center">
                    <li>
                        <p>&copy; {finalDate} <b className="font-medium">Pedro Ferreira</b>. All rights reserved.</p>
                    </li>
                    <li className="flex md:justify-end items-center space-y-4 md:space-y-0 md:space-x-4 flex-1">
                        <p className="hidden md:flex items-center space-x-3">
                            <span>Reach out to me</span>
                            <code className="text-gray-400">@</code>
                        </p>
                        <ul className="flex space-x-4">
                            {
                                items.map(({ icon: Icon, ...attributes }, i) => (
                                    <li key={i} className="flex items-center">
                                        <a className="hover:text-primary" target="_blank" {...attributes}>
                                            <Icon />
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
