import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const PostProgress: NextPage = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const getIncludedScroll = () => window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100;

        const handleScroll = () => setOffset(getIncludedScroll());

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className="fixed h-1 top-0 bg-gray-900" style={{ width: `${offset}%` }} />
    );
}

export default PostProgress;
