import { NextPage } from 'next';
import { useEffect } from 'react';
import twemoji from 'twemoji';

const Twemoji: NextPage = ({ children }) => {
    useEffect(() => {
        twemoji.parse(document.body, {
            folder: 'svg', ext: '.svg'
        });
    });

    return (
        <>
            {children}
        </>
    );
}

export default Twemoji;
